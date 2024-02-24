import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Video from './components/Video';


function App() {
  
  const videos = [
    { "description" : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
              "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ],
              "subtitle" : "By Blender Foundation",
              "thumb" : "images/BigBuckBunny.jpg",
              "title" : "Big Buck Bunny"
            },
            { "description" : "The first Blender Open Movie from 2006",
              "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ],
              "subtitle" : "By Blender Foundation",
              "thumb" : "images/ElephantsDream.jpg",
              "title" : "Elephant Dream"
            },
            { "description" : "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
              "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ],
              "subtitle" : "By Google",
              "thumb" : "images/ForBiggerBlazes.jpg",
              "title" : "For Bigger Blazes"
            },{
              "sources" : [ "https://media.istockphoto.com/id/1479254244/video/speed-ramp-raindrop-falling-from-leaf-rippling-green-water-surface.mp4?s=mp4-640x640-is&k=20&c=5Cg_4ygMf_9TKbI4tvR2tcmg4F52WXyUeM12qlJw0xA=" ],
              "title" : "For Bigger Blazes"
            }
            ,{
              "sources" : [ "https://media.istockphoto.com/id/1430945266/video/nature-sunrise-mountain-trees-and-aerial-view-of-the-forrest-and-beautiful-scenic-in-the.mp4?s=mp4-640x640-is&k=20&c=gosr3IBQvn0OV-RLrkaWEzLBeCulQ4QZILC4M5B9DcY=" ],
              "title" : "For Bigger Blazes"
            }
           
  ]


  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const handleWheel = (event) => {
      const deltaY = event.deltaY;
  
      if (deltaY > 0) {
       
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      } else if (deltaY < 0) {
        
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
      }
    };
  
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowDown':
          
          setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
          break;
        case 'ArrowUp':
         
          setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
          break;
        default:
          break;
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [videos]);

  return (
    <div className="App">
   
    {videos.map((video, index) => (
    
      <Video
        key={index}
        src={video.sources}
        i={index}
        currentVideoIndex={currentVideoIndex}
        title={video.title}
      />
      

      
    ))}
  </div>
  
  );
  
}

export default App;
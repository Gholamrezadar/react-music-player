import useMusicStore from "@/lib/store";
import{useRef} from "react";
import { useEffect } from "react";
export default function PlayBar() {
  const setSelectedSong = useMusicStore((state) => state.setSelectedSong);

  const selectedSong = useMusicStore((state) => state.selectedSong);
  const selectedPlaylist = useMusicStore((state) => state.selectedPlaylist);
  const audioRef = useRef(null);
  const setSongIsSelected = useMusicStore((state) => state.setSongIsSelected);
  // const songIsSelected = useMusicStore((state) => state.songIsSelected);
  const isPlaying = useMusicStore((state) => state.isPlaying);
  const toggleIsPlaying = useMusicStore((state) => state.toggleIsPlaying);
  const toggleIsLooping = useMusicStore((state) => state.toggleIsLooping);
  const toggleIsShuffling = useMusicStore((state) => state.toggleIsShuffling);
  const isShuffling = useMusicStore((state) => state.isShuffling);
  const isLooping = useMusicStore((state) => state.isLooping);
  const setCurrentTime = useMusicStore((state) => state.setCurrentTime);
  const setDuration = useMusicStore((state) => state.setDuration);
  const currentTime = useMusicStore((state) => state.currentTime);
  const duration = useMusicStore((state) => state.duration);
  // const setPlayFunction = useMusicStore((state) => state.setPlayFunction);
  // const play = () => {
  //   audioRef.current.play();
  //   // setSongIsSelected();
  // };
  // setPlayFunction(play);

  useEffect(() => {
    
    // console.log("songIsSelected", songIsSelected);
    const play = () => {
      audioRef.current.play();
    };
    const pause = () => {
      audioRef.current.pause();
    };
    if(isPlaying){
      play();
    }
    else{
      pause();
    }
    
  
    // const formatTime = (time) => {
    //   const minutes = Math.floor(time / 60);
    //   const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    //   return `${minutes}:${seconds}`;
    // };
    // audioRef.current.addEventListener("timeupdate", (e) => {
    //   setCurrentTime(e.target.currentTime);
    //   setDuration(e.target.duration);
    // });
    
  });
  const handleSliderChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };
  // play();
  // console.log("out", songIsSelected);

  return (
    <div className="bg-gray-950 flex w-full h-[9%] justify-center md:justify-between">
      <audio src={selectedSong.link} ref={audioRef} onTimeUpdate={(e)=>{ setCurrentTime(e.target.currentTime); setDuration(e.target.duration);}} onEnded={()=>{
        let temp = selectedPlaylist.nextSong(isShuffling, isLooping);
        if(temp != null){
          setSelectedSong(temp);
        }
        else{
          alert("no more songs")
        }
      }
        
      }></audio>
      <div className="w-[30%] justify-left pl-8 hidden md:flex">
        <div className="flex h-full">
          <img src={selectedSong.imgAddress} alt="image" className=" w-full rounded-md m-1"></img>
        </div>
        <div className="flex flex-col justify-center pl-8">
          <div className="flex lato-bold">{selectedSong.title}</div>
          <div className="flex lato-bold text-gray-400">{selectedPlaylist.name}</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-[30%]">
        <div className="flex  justify-center items-center">
          {/* shuffle */}
          <div className="flex mr-2 ml-2" onClick={() => {toggleIsShuffling();}}>
            <ShuffleButton/>
          </div>
          {/* previous */}
          <div className="flex mr-2 ml-2" onClick={() => {
            let temp = selectedPlaylist.previousSong(isShuffling, isLooping);
            if(temp != null){
              setSelectedSong(temp);
            }
            else{
              alert("no more songs")
            }
            
            }}>
            <PreviousButton/>
          </div>
          {/* play */}
          <div className="flex mr-2 ml-2 cursor-pointer" onClick={() => {toggleIsPlaying();}}>
            {isPlaying ? <PauseButton /> : <PlayButton />}
          </div>
          {/* next */}
          <div className="flex mr-2 ml-2" onClick={() => {
            let temp = selectedPlaylist.nextSong(isShuffling, isLooping);
            if(temp != null){
              setSelectedSong(temp);
            }
            else{
              alert("no more songs")
            }
            // console.log(selectedPlaylist.nextSong(isShuffling, isLooping));
            }}>
            <NextButton/>
          </div>
          {/* loop */}
          <div className="flex mr-2 ml-2" onClick={() => {toggleIsLooping();}}>
            <LoopButton/>
          </div>
        </div>
        <div className="flex-grow flex justify-between  items-center w-4/5">
          <div className="flex text-sm text-gray-400 m-1">
            <span>{formatTime(currentTime)}</span>
            {/* <span>{formatTime(duration)}</span> */}
          </div>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSliderChange}
            className="w-full appearance-none bg-gray-900 h-2 rounded-full cursor-pointer music-slider"
          />
          <div className="flex text-sm text-gray-400 m-1">
            {/* <span>{formatTime(currentTime)}</span> */}
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        
      </div>
      <div className="hidden md:flex w-[30%] justify-end items-center pr-8"> 
        {
          currentTime && duration ? <div className="flex text-gray-400 text-l lato-bold">{formatTime(currentTime)} / {formatTime(duration)}</div> : "loading..."
        }
      </div>
    </div>
  );
}

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};
// function setNextSong(){
//   const setSelectedSong = useMusicStore((state) => state.setSelectedSong);
//   const isLooping = useMusicStore((state) => state.isLooping);
//   const isShuffling = useMusicStore((state) => state.isShuffling);
//   setSelectedSong(selectedPlaylist.nextSong(isShuffling, isLooping));
// }

function PauseButton() {
  return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 cursor-pointer hover:text-gray-400 transition-all duration-200">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z" clip-rule="evenodd" />
          </svg>
}
function ShuffleButton() {
  const isShuffling = useMusicStore((state) => state.isShuffling);
  return <svg
    fill="currentColor"
    className={isShuffling ? "w-6 text-green-500 cursor-pointer hover:text-green-400 transition-all duration-200 maryam-glow" : "w-6 cursor-pointer hover:text-gray-400 transition-all duration-200"}
    viewBox="0 0 16 16"
  >
    <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
    <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
  </svg>;
}

function PreviousButton() {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 cursor-pointer hover:text-gray-400 transition-all duration-200"
  >
    <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
  </svg>;
}

function LoopButton() {
  const isLooping = useMusicStore((state) => state.isLooping);
  return <svg
    fill="currentColor"
    className={isLooping ? "w-6 text-green-500 cursor-pointer hover:text-green-400 transition-all duration-200 maryam-glow" : "w-6 cursor-pointer hover:text-gray-400 transition-all duration-200"}
    viewBox="0 0 16 16"
  >
    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
  </svg>;
}

function NextButton() {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 cursor-pointer hover:text-gray-400 transition-all duration-200"
  >
    <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
  </svg>;
}

function PlayButton() {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 cursor-pointer hover:text-gray-400 transition-all duration-200"
  >
    <path
      fill-rule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
      clip-rule="evenodd" />
  </svg>;
}


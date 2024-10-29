import SongCard from "./songCard";
import { allSongs } from "@/lib/data";
import useMusicStore from "@/lib/store";
import { useEffect } from "react";
import { Playlist } from "@/lib/playlist";
import PlaylistNameForm from "./nameForm";
export default function SongPanel() {
  const selectedSong = useMusicStore((state) => state.selectedSong);
  const setSelectedSong = useMusicStore((state) => state.setSelectedSong);
  const selectedPlaylist = useMusicStore((state) => state.selectedPlaylist);
  const setIsPlaying = useMusicStore((state) => state.setIsPlaying);
  const setReload = useMusicStore((state) => state.setReload);
  const reload = useMusicStore((state) => state.reload);
  const createPlaylist = useMusicStore((state) => state.createPlaylist);
  useEffect(() => {}, [reload]);

  return (
    <div className="bg-gray-950 flex flex-grow  h-full flex-col p-2">
      <div className="flex bg-gray-900 flex-col maryam-shadow">
        <div className="flex bg-gray-900 justify-start items-center mb-2 mt-2 "> {/* ghd change */}
          {/* play top */} {/* ghd change */}
          {/* <div
            className="flex text-green-500 cursor-pointer"
            onClick={() => {
              setIsPlaying(true);
              selectedPlaylist.setCurrent(0);
              setSelectedSong(selectedPlaylist.current.data);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                clip-rule="evenodd"
              />
            </svg> 
          </div> */}
          <div className="flex p-5 lato-black text-xl md:text-5xl"> {/* ghd change */}
            {selectedPlaylist.name}
          </div>
          {/* <div className="flex text-5xl p-5 lato-black">MDAR Musics</div> */}
        </div>
        <div className="flex bg-gray-900 mb-4 text-sm">
          <div className="flex bg-blue-100 bg-transparent w-[5%] justify-end pr-4 lato-bold">
            #
          </div>
          <div className="flex bg-blue-900 bg-transparent w-[5%] lato-bold">
            Title
          </div>
          <div className="flex bg-blue-300 bg-transparent w-[30%]"></div>
          <div className="flex bg-blue-500 bg-transparent w-[50%] lato-bold">
            Artist
          </div>
          <div className="flex bg-blue-800 bg-transparent w-[10%] lato-bold pl-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="flex bg-gray-900 flex-grow flex-col overflow-scroll bg-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        {/* {Array.from({length: 20}).map((_,index)=>{
                  return <SongCard key={index} id={index} name={`song${index+1}`} image="https://picsum.photos/100/100" artist={`artist${index+1}`} time={`${Math.floor(Math.random() * 100)}min`}/>
                })} */}

        {/* {isShuffling ? "w-6 text-green-500 cursor-pointer hover:text-green-400 transition-all duration-200 maryam-glow" : "w-6 cursor-pointer hover:text-gray-400 transition-all duration-200"} */}
        {selectedPlaylist.displayAll().map((song, index) => {
          return (
            <div
              key={index}
              className={`${
                selectedSong.link === song.link ? "text-green-700" : ""
              } cursor-pointer`}
              onClick={() => {
                setSelectedSong(song);
                setIsPlaying(true);
                selectedPlaylist.setCurrent(index);
              }}
            >
              <SongCard
                id={index}
                name={song.title}
                image={song.imgAddress}
                artist={song.artistName}
                time={`${Math.floor(Math.random() * 100)}min`}
              />
            </div>
          );
        })}
      </div>
      <div
        className={`${
          createPlaylist ? "block" : "hidden"
        } bg-gray-800 centermodal rounded-3xl`}
      >
        <PlaylistNameForm />
      </div>
    </div>
  );
}

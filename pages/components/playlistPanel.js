import PlaylistCard from "./playlistCard";
import { allSongs, playlists } from "@/lib/data";
import useMusicStore from "@/lib/store";
import { Playlist } from "@/lib/playlist";
import { useEffect, useRef } from "react";
export default function PlaylistPanel() {
  const selectedPlaylist = useMusicStore((state) => state.selectedPlaylist);
  const setSelectedPlaylist = useMusicStore(
    (state) => state.setSelectedPlaylist
  );
  const setOriginalPlaylist = useMusicStore(
    (state) => state.setOriginalPlaylist
  );
  const originalPlaylist = useMusicStore((state) => state.originalPlaylist);
  const setReload = useMusicStore((state) => state.setReload);
  const reload = useMusicStore((state) => state.reload);
  const addToList = useMusicStore((state) => state.addToList);
  const toggleAddToList = useMusicStore((state) => state.toggleAddToList);
  const songForAddToList = useMusicStore((state) => state.songForAddToList);
  const createPlaylist = useMusicStore((state) => state.createPlaylist);
  const toggleCreatePlaylist = useMusicStore(
    (state) => state.toggleCreatePlaylist
  );
  useEffect(() => {}, [reload]);

  return (
    <div className="bg-gray-950 flex w-[18rem] h-full flex-col p-2">
      <div className="bg-gray-900 flex w-full justify-between maryam-shadow">
        <div className="flex bg-gray-900 h-full p-3">
          {/* lib icon */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              setSelectedPlaylist(allSongs);
              setOriginalPlaylist(allSongs);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
              <path
                fill-rule="evenodd"
                d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                clip-rule="evenodd"
              />
              <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
            </svg>
          </div>
          <div className="bg-gray-900 flex text-sm md:text-3xl p-3 lato-bold">
            Playlists
          </div>
        </div>
        {/* add playlist */}
        <div
          className=" cursor-pointer flex bg-gray-900 h-full items-center pr-2"
          onClick={() => {
            setReload();
            toggleCreatePlaylist();
            // let newPlaylist = new Playlist("new playlist");
            // playlists.push(newPlaylist);
            // return (
            //     <div key={playlists.length} className="cursor-pointer" >
            //         {/* onClick={()=>{setSelectedPlaylist(playlists[index]); setOriginalPlaylist(playlists[index]) }} */}
            //         <PlaylistCard name={newPlaylist.name} image="https://picsum.photos/100/100" length={newPlaylist.dll.getSize()}/>
            //     </div>
            // )
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
          </svg>
        </div>
      </div>

      <div
        className="bg-gray-900 flex h-full flex-col overflow-scroll bg-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        {/* {Array.from({length: 20}).map((_,index)=>{
                return <PlaylistCard key={index} name={`playlist${index+1}`} image="https://picsum.photos/100/100" length={Math.floor(Math.random() * 100)}/>
              })} */}
        {/* `${selectedSong.link === song.link ? "bg-gray-900" : ""} cursor-pointer` */}
        {playlists.map((_, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer flex justify-between  hover:bg-gray-800"
              onClick={() => {
                setSelectedPlaylist(playlists[index]);
                setOriginalPlaylist(playlists[index]);
              }}
            >
              <PlaylistCard
                name={playlists[index].name}
                image="https://picsum.photos/100/100"
                length={playlists[index].dll.getSize()}
              />
              <div
                className={`${
                  addToList ? "block" : "hidden"
                } cursor-pointer mr-2 mt-3 text-gray-400`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAddToList();
                  let flag = playlists[index].addSong(
                    songForAddToList.title,
                    songForAddToList.imgAddress,
                    songForAddToList.link,
                    songForAddToList.lyric,
                    songForAddToList.artistName
                  );
                  if (!flag) {
                    alert("already in playlist");
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// function PlaylistNameForm(){
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Create a New Playlist</h2>
//       <form onSubmit={handleCreatePlaylist} style={styles.form}>
//         <input
//           type="text"
//           value={playlistName}
//           onChange={handleInputChange}
//           placeholder="Enter playlist name"
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Create Playlist</button>
//       </form>
//     </div>
//   )
// }

function PlaylistNameForm() {
  const inputRef = useRef(null);

  const toggleCreatePlaylist = useMusicStore(
    (state) => state.toggleCreatePlaylist
  );
  let newPlaylist = new Playlist(" ");
  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    let name = inputRef.current.value;
    if (name == "") {
      newPlaylist.changeName("new playlist");
    } else {
      newPlaylist.changeName(name);
    }
    toggleCreatePlaylist();
    playlists.push(newPlaylist);
    return (
      <div key={playlists.length} className="cursor-pointer">
        {/* onClick={()=>{setSelectedPlaylist(playlists[index]); setOriginalPlaylist(playlists[index]) }} */}
        <PlaylistCard
          name={newPlaylist.name}
          image="https://picsum.photos/100/100"
          length={newPlaylist.dll.getSize()}
        />
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-950 h-[100%] rounded-3xl">
      <h1 className="color-white text-center text-3xl font-bold">
        Create Playlist
      </h1>
      <form
        onSubmit={handleCreatePlaylist}
        className="flex flex-col items-center justify-center p-5 gap-10"
      >
        <input
          ref={inputRef}
          className="color-white w-full bg-slate-900 p-4 pr-5 pl-5 rounded-2xl border border-gray-950"
          type="text"
          placeholder="Enter playlist name"
        />
        <button
          className="px-4 py-2 text-white bg-gray-700 rounded-md cursor-pointer text-base hover:bg-gray-900 transition-colors duration-300"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}

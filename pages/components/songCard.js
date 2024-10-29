
import { allSongs } from "@/lib/data";
import useMusicStore from "@/lib/store";
const SongCard = ({id, image, name, artist, time}) =>{
    const selectedPlaylist = useMusicStore((state) => state.selectedPlaylist);
    const setSelectedPlaylist = useMusicStore((state) => state.setSelectedPlaylist);
    const setReload = useMusicStore((state) => state.setReload);
    const addToList = useMusicStore((state) => state.toggleAddToList);
    const toggleAddToList = useMusicStore((state) => state.toggleAddToList);
    const songForAddToList = useMusicStore((state) => state.songForAddToList);
    const setSongForAddToList = useMusicStore((state) => state.setSongForAddToList);

    return (
      <div className="bg-gray-900 flex m-3 items-center h-16 hover:bg-gray-800">
        <div className=" flex w-[5%] justify-end pr-6 text-gray-400">{id+1}</div>
        <div className="flex h-full w-[5%] ">
          <img src={image} alt="image" className="h-full w-full rounded-md overflow-hidden"></img>
        </div>
          <div className=" flex w-[30%] pl-2 text-xs md:text-xl lato-bold">{name}</div>
          <div className=" flex w-[50%] text-gray-400 text-xs md:text-xl">{artist}</div>
          {/* <div className=" flex w-[50%] text-gray-400 text-xs md:text-xl">{}</div> */}

          {/* minus button */}
          <div className=" hidden md-flex text-gray-400" onClick={(e)=>{
            e.stopPropagation();
            selectedPlaylist.deleteSong(name);
            // setSelectedPlaylist(allSongs)
            setSelectedPlaylist(selectedPlaylist);
            setReload();
                
            //reload
          }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clip-rule="evenodd" />
            </svg>
          </div>

          {/* Plus button */}
          <div onClick={(e)=>{
            e.stopPropagation();
            toggleAddToList();
            // alert(selectedPlaylist.getSong(id).title)
            setSongForAddToList(selectedPlaylist.getSong(id));
            // alert(songForAddToList.title)
            }} className=" hidden md:flex text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                </svg>

            </div>
      </div>
    )
}

export default SongCard;
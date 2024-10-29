import useMusicStore from "@/lib/store";

export default function SearchBar() {
  const setSelectedPlaylist = useMusicStore(
    (state) => state.setSelectedPlaylist
  );
  const selectedPlaylist = useMusicStore((state) => state.selectedPlaylist);
  const originalPlaylist = useMusicStore((state) => state.originalPlaylist);
  function search(value) {
    if(value == ""){
      setSelectedPlaylist(originalPlaylist);
      return;
    }
    setSelectedPlaylist(originalPlaylist.search(value));
  }
  return (
    <div className="bg-gray-950 flex w-full h-[6%] justify-between pl-8 pr-8 ">
      <div className="flex"> </div>
      {/* searchbar */}
      <div className="flex items-center justify-center w-full">
        <div className="relative w-full max-w-lg mt-2">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input
            onChange={(e) => search(e.target.value)}
            type="text"
            className="w-full pl-12 pr-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Search for songs, artists ..."
          />
          {
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              ✕
            </button>
          }
        </div>
      </div>
      <div className="flex"> </div>
    </div>
  );
}

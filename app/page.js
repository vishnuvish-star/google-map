import SearchBar from "@/components/searchBar";
import SideBar from "@/components/sideBar";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      {/* business list */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 ">
        <div>
          <SearchBar />
        </div>
        {/* google map */}
        <div>google map</div>
      </div>
    </div>
  );
}

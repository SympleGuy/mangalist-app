import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className="border-solid border-2 border-black relative w-64 mb-8 mt-3">
      <input
        className="w-full p-2 focus:outline-none"
        type="text"
        placeholder="Find a title..."
      />
      <button className="absolute right-0 bottom-2 text-2xl">
        <BiSearch className="" />
      </button>
    </div>
  );
}

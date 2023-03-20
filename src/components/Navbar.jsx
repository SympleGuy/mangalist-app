import Image from "next/image";
import localImage from "../../public/logo_v3.png";
import { NavLink } from "@/data/Navlink";
import NavbarLink from "./NavbarLink";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <div className="flex bg-white gap-10 px-5 py-2">
      <div className="flex flex-col items-end pl-10 flex-grow">
        <SearchBar />
        <div className="flex gap-5 w-full">
          {NavLink.map((link) => (
            <NavbarLink fw={"font-black"} size={"text-3xl"} href={link.href}>
              {link.name}
            </NavbarLink>
          ))}
        </div>
      </div>
      <Image src={localImage} width={120} className="rounded-lg" />
    </div>
  );
};
export default Navbar;

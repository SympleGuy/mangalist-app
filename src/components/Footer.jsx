import Image from "next/image";
import localImage from "../../public/logo_v3.png";
import NavbarLink from "./NavbarLink";
import { NavLink } from "@/data/Navlink";
import { FooterLink } from "@/data/Navlink";
export default function Footer() {
  return (
    <div className="bg-footer-gray flex text-footerText-gray px-5 py-10 gap-32">
      {/* <Image src={localImage} height={40} width={120} /> */}
      <div className="inline-grid grid-cols-2 gap-x-28 gap-y-2 items-start">
        {NavLink.map((el) => {
          return (
            <NavbarLink size={"text-3xl"} fw={"font-black"} href={el.href}>
              {el.name}
            </NavbarLink>
          );
        })}
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          {FooterLink.map((el) => {
            return (
              <NavbarLink href={"el.href"} size={"text-md"}>
                {el.name}
              </NavbarLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

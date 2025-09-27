import Link from "next/link";
// import "./navbar.css";

export type MenuItem = {
    name: string;
    url: string;
}

type NavbarProps = {
    home: MenuItem;
    menus: MenuItem[];
}
export default function Navbar({home, menus} : NavbarProps)  {

    return (
      <nav className="flex justify-between py-4 px-8 bg-black text-white">
        <Link className="text-2xl font-bold" href={home.url}>{home.name}</Link>
        <ul className="flex gap-6 navbar">
          {menus.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
    } 

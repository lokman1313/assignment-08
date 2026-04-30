import Link from "next/link";
import NavLink from "./NavLink";

const NavbarPage = () => {
  const links=<>
  <li><NavLink href={"/"}>Home</NavLink></li>
  <li><NavLink href={"/allTiles"}>All Tiles</NavLink></li>
  <li><NavLink href={"/profile"}>Profile</NavLink></li>
  </>
  return (
    <div className="navbar bg-gray-900 text-white shadow-sm sticky top-0 z-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content font-semibold rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link href={"/"} className="flex justify-center items-center text-2xl font-bold">Tiles<span className="text-success">Gallery</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2 text-gray-300 font-semibold">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link href={"/login"} className="btn btn-success">Login</Link>
  </div>
</div>
  );
};

export default NavbarPage;
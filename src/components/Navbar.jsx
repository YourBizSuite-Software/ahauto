import { Link, NavLink } from "react-router-dom";

const linkBase = "px-3 py-2 rounded-md text-sm font-medium";
const active = "bg-black text-white";
const idle = "text-gray-700 hover:bg-gray-200";

export default function Navbar() {
  return (
    <header className="bg-amber-500 shadow">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold tracking-tight">
          AH <span className="text-[#4B1C4A]">AUTO</span> Services
        </Link>
        <nav className="flex gap-2">
          <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>Home</NavLink>
          <NavLink to="/inventory" className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>Inventory</NavLink>

          <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
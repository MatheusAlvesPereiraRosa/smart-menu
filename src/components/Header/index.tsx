import { Link } from "react-router-dom"

import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => (
    <nav className="bg-brown">
        <ul className="hidden justify-center gap-2 sm:flex">
            <li className="p-4 min-w-[9rem] text-center text-white"><Link to="/">MENU</Link></li>
            <li className="p-4 min-w-[9rem] text-center text-white"><Link to="/login">ENTRAR</Link></li>
            <li className="p-4 min-w-[9rem] text-center text-white"><Link to="/contact">CONTATO</Link></li>
        </ul>
        <div className="flex justify-center relative sm:hidden">
            <div className="text-white p-4 text-lg">MENU</div>

            <RxHamburgerMenu size={24} className="text-white absolute right-2 top-4 cursor-pointer"/>
        </div>
    </nav>
)


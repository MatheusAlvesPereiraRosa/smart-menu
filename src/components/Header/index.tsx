import { Link } from "react-router-dom"

export const Header = () => (
    <nav className="bg-amber-800">
        <ul className="flex justify-center gap-2">
            <li className="p-4"><Link to="/">MENU</Link></li>
            <li className="p-4"><Link to="/login">ENTRAR</Link></li>
            <li className="p-4"><Link to="/contact">CONTATO</Link></li>
        </ul>
    </nav>
)


import CartWidget from "./CartWidget"
import logo from "./img/lobo.png"
import menu from "./img/menu.svg"
import { TiThMenu } from "react-icons/ti"
import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
    const [mostrarMenu, setmostrarMenu] = useState(false)
    return (
        <header className="flex justify-between items-center bg-zinc-900 h-14 lg:h-16 px-5 py-1 text-zinc-100">
            <div className="flex justify-between h-full items-center">
                <div className="h-full lg:hidden mr-2">
                    <TiThMenu className="h-full" size={35} onClick={() => setmostrarMenu(!mostrarMenu)} />
                    <div className={mostrarMenu ? "absolute" : "absolute hidden"}>
                        <nav className="bg-zinc-900 rounded-md relative z-50">
                            <ul>
                                <Link to={'/'} onClick={() => setmostrarMenu(!mostrarMenu)} ><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Inicio</li></Link>
                                <Link to={'/category/Epic'} onClick={() => setmostrarMenu(!mostrarMenu)} ><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Epic</li></Link>
                                <Link to={'/category/Steam'} onClick={() => setmostrarMenu(!mostrarMenu)} ><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Steam</li></Link>
                                <Link to={'/category/Ubysoft'} onClick={() => setmostrarMenu(!mostrarMenu)} ><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Ubysoft</li></Link>
                                <Link to={'/category/Origin'} onClick={() => setmostrarMenu(!mostrarMenu)} ><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Origin</li></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Link to={'/'} className="flex justify-between items-center h-full">
                    <div className="h-full">
                        <img className="max-w-full max-h-full" src={logo} alt="LOBO" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl lg:text-2xl">CENTRO GAMING</h1>
                    </div>
                </Link>
            </div>
            <div className="hidden lg:inline">
                <nav>
                    <ul className="flex justify-between itemsc-center font-medium">
                        <Link to={'/'}><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Inicio</li></Link>
                        <Link to={'/category/Epic'}><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Epic</li></Link>
                        <Link to={'/category/Steam'}><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Steam</li></Link>
                        <Link to={'/category/Ubysoft'}><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Ubysoft</li></Link>
                        <Link to={'/category/Origin'}><li className="py-2 px-5 rounded-md transition duration-300 hover:bg-blue-400 hover:text-zinc-900">Origin</li></Link>
                    </ul>
                </nav>
            </div>
            <CartWidget />
        </header>
    )
}
export default Header
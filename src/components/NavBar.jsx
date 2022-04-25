import CartWidget from "./CartWidget"
const NavBar = ({children}) => {
    return (
        <div className="navbar bg-purple-700 text-slate-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-700 rounded-box w-52">
                        <li tabIndex="0" >
                            <a href="../../public/index.html" className="justify-between justify-between hover:bg-emerald-700">
                                PC
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="bg-purple-700">
                                <li className="hover:bg-emerald-700"><a href="../../public/index.html">Steam</a></li>
                                <li className="hover:bg-emerald-700"><a href="../../public/index.html">Epic</a></li>
                                <li className="hover:bg-emerald-700"><a href="../../public/index.html">Steam</a></li>
                                <li className="hover:bg-emerald-700"><a href="../../public/index.html">Ubysoft</a></li>
                                <li className="hover:bg-emerald-700"><a href="../../public/index.html">Origin</a></li>
                            </ul>

                        </li>
                        <li tabIndex="0">
                            <a href="../../public/index.html" className="justify-between justify-between hover:bg-emerald-700">
                                PlayStation
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="bg-purple-700">
                                <li className="hover:bg-emerald-700"><a href="../../public/index.html">PlayStation4</a></li>
                                <li className="hover:bg-emerald-700"><a href="../../public/index.html">PlayStation5</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="../../public/index.html" className="justify-between justify-between hover:bg-emerald-700">
                                Xbox
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="bg-purple-700">
                                <li className="hover:bg-emerald-700"><a href="../../public/index.html">Xbox one</a></li>
                                <li className="hover:bg-emerald-700"><a href="../../public/index.html">Xbox Series X|S</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a href="../../public/index.html" className="btn btn-ghost normal-case text-xl hover:bg-emerald-700">CentroGaming</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul tabIndex="0" className="menu menu-horizontal p-0">
                    <li tabIndex="0">
                        <a href="../../public/index.html" className="justify-between justify-between hover:bg-emerald-700">
                            PC
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </a>
                        <ul className="bg-purple-700">
                            <li className="hover:bg-emerald-700"><a href="../../public/index.html">Steam</a></li>
                            <li className="hover:bg-emerald-700"><a href="../../public/index.html">Epic</a></li>
                            <li className="hover:bg-emerald-700"><a href="../../public/index.html">Steam</a></li>
                            <li className="hover:bg-emerald-700"><a href="../../public/index.html">Ubysoft</a></li>
                            <li className="hover:bg-emerald-700"><a href="../../public/index.html">Origin</a></li>
                        </ul>

                    </li>
                    <li tabIndex="0">
                        <a href="../../public/index.html" className="justify-between justify-between hover:bg-emerald-700">
                            PlayStation
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </a>
                        <ul className="bg-purple-700">
                            <li className="hover:bg-emerald-700"><a href="../../public/index.html">PlayStation4</a></li>
                            <li className="hover:bg-emerald-700"><a href="../../public/index.html">PlayStation5</a></li>
                        </ul>
                    </li>
                    <li tabIndex="0">
                        <a href="../../public/index.html" className="bg-purple-700 justify-between hover:bg-emerald-700">
                            Xbox
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </a>
                        <ul className="bg-purple-700">
                            <li className="hover:bg-emerald-700"><a href="../../public/index.html">Xbox one</a></li>
                            <li className="hover:bg-emerald-700"><a href="../../public/index.html">Xbox Series X|S</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <CartWidget/>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:bg-emerald-700 focus:bg-emerald-700">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a href="../../public/index.html" className="justify-between">
                                Perfil
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href="../../public/index.html">Configuración</a></li>
                        <li><a href="../../public/index.html">Salir</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default NavBar
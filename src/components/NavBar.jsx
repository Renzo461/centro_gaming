const NavBar = () => {
    return (
        <div className="navbar bg-purple-700 text-slate-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-700 rounded-box w-52">
                        <li tabIndex="0" >
                            <a className="justify-between justify-between hover:bg-emerald-700">
                                PC
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="bg-purple-700">
                                <li className="hover:bg-emerald-700"><a>Steam</a></li>
                                <li className="hover:bg-emerald-700"><a>Epic</a></li>
                                <li className="hover:bg-emerald-700"><a>Steam</a></li>
                                <li className="hover:bg-emerald-700"><a>Ubysoft</a></li>
                                <li className="hover:bg-emerald-700"><a>Origin</a></li>
                            </ul>

                        </li>
                        <li tabIndex="0">
                            <a className="justify-between justify-between hover:bg-emerald-700">
                                PlayStation
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="bg-purple-700">
                                <li className="hover:bg-emerald-700"><a>PlayStation4</a></li>
                                <li className="hover:bg-emerald-700"><a>PlayStation5</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="justify-between justify-between hover:bg-emerald-700">
                                Xbox
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="bg-purple-700">
                                <li className="hover:bg-emerald-700"><a>Xbox one</a></li>
                                <li className="hover:bg-emerald-700"><a>Xbox Series X|S</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl hover:bg-emerald-700">CentroGaming</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul tabIndex="0" className="menu menu-horizontal p-0">
                    <li tabIndex="0">
                        <a className="justify-between justify-between hover:bg-emerald-700">
                            PC
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </a>
                        <ul className="bg-purple-700">
                            <li className="hover:bg-emerald-700"><a>Steam</a></li>
                            <li className="hover:bg-emerald-700"><a>Epic</a></li>
                            <li className="hover:bg-emerald-700"><a>Steam</a></li>
                            <li className="hover:bg-emerald-700"><a>Ubysoft</a></li>
                            <li className="hover:bg-emerald-700"><a>Origin</a></li>
                        </ul>

                    </li>
                    <li tabIndex="0">
                        <a className="justify-between justify-between hover:bg-emerald-700">
                            PlayStation
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </a>
                        <ul className="bg-purple-700">
                            <li className="hover:bg-emerald-700"><a>PlayStation4</a></li>
                            <li className="hover:bg-emerald-700"><a>PlayStation5</a></li>
                        </ul>
                    </li>
                    <li tabIndex="0">
                        <a className="bg-purple-700 justify-between hover:bg-emerald-700">
                            Xbox
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </a>
                        <ul className="bg-purple-700">
                            <li className="hover:bg-emerald-700"><a>Xbox one</a></li>
                            <li className="hover:bg-emerald-700"><a>Xbox Series X|S</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle hover:bg-emerald-700">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">Ver Carro</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:bg-emerald-700 focus:bg-emerald-700">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Perfil
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Configuración</a></li>
                        <li><a>Salir</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default NavBar
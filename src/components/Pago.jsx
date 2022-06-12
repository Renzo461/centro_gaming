import { useEffect, useState } from "react"
import Cart from "./Cart"
import { useCartContext } from "./context/CartContext"
import { doc, collection, getDocs, getFirestore, setDoc } from "firebase/firestore"
import { Link, Navigate, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import { wait } from "@testing-library/user-event/dist/utils"
const Pago = () => {
    const { deleteCart, cart, c, mT } = useCartContext()
    const [idVenta, setIdVenta] = useState(0)
    const [nom, setNom] = useState('')
    const [ape, setApe] = useState('')
    const [tel, setTel] = useState('')
    const [cor, setCor] = useState('')
    let navigate = useNavigate();
    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "orders")
        getDocs(itemsCollection).then((r) => {
            r.docs == [] ?
                setIdVenta("V1")
                :
                setIdVenta("V" + (r.docs.length + 1))
        })
    }, [])

    const pagar = async () => {        
        if (nom == '' || ape == '' || tel == '' || cor == '') {
            alert("RELLENO TODOS LOS CAMPOS")
            return
        }
        const o = {
            comprador: { nombre: nom, apellido: ape, telefono: tel, email: cor },
            items: cart,
            total: mT,
        }
        const db = getFirestore();
        await setDoc(doc(db, "orders", idVenta), o)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Venta Registrada',
            text: 'Id Venta: '+idVenta,
            showConfirmButton: false,
            timer: 3000
        })        
        deleteCart()
        navigate("/")
    }
    return (
        <div className="bg-white flex-1 pt-5 flex justify-center">
            <div className="flex w-3/4">
                <div className="w-1/3">
                    <form className="text-black">
                        <h2 className="text-2xl font-semibold">Dirección de facturación</h2>
                        <div className="flex flex-wrap mt-2">
                            <label className="w-1/2 p-2">
                                <input onChange={(event) => setNom(event.target.value)} className="w-full p-2 text-xl rounded-md border-2 border-slate-500" placeholder="Nombre" type="text" name="nombre" />
                            </label>
                            <label className="w-1/2 p-2">
                                <input onChange={(event) => setApe(event.target.value)} className="w-full p-2 text-xl rounded-md border-2 border-slate-500" placeholder="Apellido" type="text" name="apellido" />
                            </label>
                            <label className="w-1/2 p-2">
                                <input onChange={(event) => setTel(event.target.value)} className="w-full p-2 text-xl rounded-md border-2 border-slate-500" placeholder="Teléfono" type="text" name="telefono" />
                            </label>
                            <label className="w-1/2 p-2">
                                <input onChange={(event) => setCor(event.target.value)} className="w-full p-2 text-xl rounded-md border-2 border-slate-500" placeholder="Email" type="email" name="email" />
                            </label>
                        </div>
                        <div className="flex justify-end p-2 text-zinc-900">
                            <div className="w-auto cursor-pointer bg-blue-400 px-5 py-1 rounded-md duration-200 hover:bg-cyan-400 font-semibold" onClick={() => pagar()}>
                                PAGAR {mT}$
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w-2/3">
                    {cart.map((c) => <Cart key={c.id} juego={c} eliminar={false} />)}
                    <div className="text-xl text-black">
                        <div className="bg-slate-100 px-10 py-2 mb-1">
                            <h1 className="font-bold text-xl">RESUMEN</h1>
                            <div className="flex justify-between text-base mt-1">
                                {c == 1 ?
                                    <p>{c} Juego</p> :
                                    <p>{c} Juegos</p>
                                }
                                <p className="font-semibold">
                                    {mT}$
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-100 px-10 py-2">
                            <div className="flex justify-between items-center text-base ">
                                <h1 className="font-semibold">Total:</h1>
                                <p className="text-2xl font-extrabold">
                                    {mT}$
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Pago
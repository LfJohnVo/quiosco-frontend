import { formatearDinero } from "../helpers";

export default function Producto({ producto }) {

    const { nombre, imagen, precio } = producto;

    return (
        <div className="border p-3 shadow bg-white">
            <img
                alt={`imagen de ${nombre}`}
                src={`img/${imagen}.jpg`}
                className="w-full"
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="text-2xl font-bold text-amber-500">{formatearDinero(precio)}</p>
            </div>

            <button
                type="button"
                className="bg-amber-500 hover:bg-amber-600 w-full p-3 text-white font-bold uppercase"
            >
                Agregar al pedido
            </button>
        </div>
    )
}

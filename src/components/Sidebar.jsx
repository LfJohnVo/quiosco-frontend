import { categorias } from "../data/categorias"
import Categoria from "./Categoria"

export default function Sidebar() {
    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img
                    className="w-32"
                    src={`img/${"logo"}.png`}
                />
            </div>

            <div className="mt-10">
                {categorias.map((categoria) => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </div>

            <div className="my-5 py-5">
                <button className="bg-red-400 w-full p-3 rounded-md text-white font-bold">
                    Cancelar Orden
                </button>
            </div>

        </aside>
    )
}

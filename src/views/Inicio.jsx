import { productos } from "../data/productos"
import Producto from "../components/Producto"

export default function Inicio() {
  return (
    <>
      <h1 className="text-4xl font-black">Inicio</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido</p>

      <div className="grid grid-cols-3 gap-4">
        {productos.map(producto => (
          <Producto
            key={producto.imagen}
            producto={producto}
          />
        ))}
      </div>

    </>
  )
}

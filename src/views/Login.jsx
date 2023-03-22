import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 py-10 px-5">
        <form>
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Ingresa tu email"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="password"
            >
              Contraseña:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Ingresa tu password"
            />
          </div>
          <input
            type="submit"
            value="Iniciar cuenta"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-md"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/registro" className="text-indigo-500 hover:text-indigo-600"> Crear una cuenta </Link>
      </nav>
    </>
  )
}

import { Link } from 'react-router-dom'

export default function Registro() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Llena el formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 py-10 px-5">
        <form>
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="name"
            >
              Nombre:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Ingresa tu nombre"
            />
          </div>
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
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="password_confirmation"
            >
              Repetir Contraseña:
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password_confirmation"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Repite password"
            />
          </div>
          <input
            type="submit"
            value="Crear cuenta"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-md"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/login" className="text-indigo-500 hover:text-indigo-600"> Iniciar sesión </Link>
      </nav>
    </>
  )
}

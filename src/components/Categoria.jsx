export default function Categoria({ categoria }) {

    const { nombre, id, icono } = categoria;

    return (
        <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
            <img
                alt="icono"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-icon-3-design-template-cf5e1e813fa9253f979b835d2a33a05d_screen.jpg?ts=1627157386"
                className="w-12"
            />

            <p className="text-lg">{nombre}</p>
        </div>
    )
}

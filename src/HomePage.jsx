import { Link } from 'react-router-dom'

const catalogo = [
    {
        id: 'daniela',
        nombre: 'Daniela',
        ciudad: 'Lima',
        imagen: '/daniela/principal/daniela-main.jpg'
    },
    {
        id: 'luana',
        nombre: 'Luana',
        ciudad: 'Puno',
        imagen: '/luana/principal/luana-main.jpg'
    },
    {
        id: 'martina',
        nombre: 'Martina',
        ciudad: 'Arequipa',
        imagen: '/martina/principal/martina-main.jpg'
    }
]

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="titulo">💎 Catálogo KinX</h1>
            <p className="subtitulo">Explora perfiles exclusivos y elige tu favorita</p>
            <div className="kinesiologas-grid">
                {catalogo.map((kine) => (
                    <Link to={`/${kine.id}`} key={kine.id} className="kinesiologa-card">
                        <img src={kine.imagen} alt={`Foto de ${kine.nombre}`} />
                        <div className="info">
                            <h3>{kine.nombre}</h3>
                            <p>{kine.ciudad}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomePage

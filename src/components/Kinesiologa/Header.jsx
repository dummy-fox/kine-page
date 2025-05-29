import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Header = () => {
    const [data, setData] = useState({
        mainTitle: '',
        subtitle: '',
        stars: '',
        ratingText: ''
    });

    const { clienteId } = useParams();

    useEffect(() => {
        fetch(`/${clienteId}/textos.json`)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.error('Error cargando textos:', err));
    }, [clienteId]);

    return (
        <div className="gradient-bg">
            <h1 className="main-title">{data.mainTitle}</h1>
            <p className="subtitle">{data.subtitle}</p>
            <div className="rating">
                <span className="stars">{data.stars}</span>
                <span className="rating-text">{data.ratingText}</span>
            </div>
        </div>
    );
};

export default Header;

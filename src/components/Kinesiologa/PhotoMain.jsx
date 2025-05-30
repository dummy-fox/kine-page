import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PhotoMain = () => {
    const [data, setData] = useState({
        photoTitle: '',
        photoDescription: '',
        badge1: '',
        badge2: '',
        badge3: '',
        photoNote: ''
    });

    const { clienteId } = useParams();

    useEffect(() => {
        fetch(`/${clienteId}/textos.json`)
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error('Error cargando textos:', err));
    }, [clienteId]);

    return (
        <div className="photo-main">
            <div className="photo-container">
                <div className="photo-frame">
                    <img
                        src={`/${clienteId}/principal/${clienteId}-main.jpg`}
                        alt={data.photoTitle}
                        className="main-photo"
                    />

                    <div className="photo-overlay">
                        <div className="overlay-content">
                            <h2 className="photo-title">{data.photoTitle}</h2>
                            <p className="photo-description">{data.photoDescription}</p>
                            <div className="badges">
                                <span className="badge">{data.badge1}</span>
                                <span className="badge purple">{data.badge2}</span>
                                <span className="badge red">{data.badge3}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="photo-note">{data.photoNote}</p>
            </div>
        </div>
    );
};

export default PhotoMain;

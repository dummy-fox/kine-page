const Carousel = ({photos,currentPhoto,setCurrentPhoto}) => {
    const prevPhoto = () => {
        setCurrentPhoto((currentPhoto - 1 + photos.length) % photos.length);
    };

    const nextPhoto = () => {
        setCurrentPhoto((currentPhoto + 1) % photos.length);
    };

    const setPhoto = (index) => {
        setCurrentPhoto(index);
    };

                    
    return (
    <div className="carousel-section">
        <h3 className="carousel-title">📸 Más Fotos Exclusivas</h3>
        <div className="carousel-container">
            <img
                src={photos[currentPhoto].src}
                alt={photos[currentPhoto].alt}
                className="carousel-photo"
            />

            <div className="carousel-overlay">
                <div className="carousel-text">
                    <h3>🔥 Galería Privada</h3>
                    <p>+ Fotos y Videos adicionales disponibles al confirmar tu pago</p>
                </div>
            </div>

            <button className="carousel-controls prev" onClick={prevPhoto}> ‹ </button>
            <button className="carousel-controls next" onClick={nextPhoto}> › </button>
        </div>

        <div className="carousel-indicators">
            {photos.map((_, index) => (
                <span
                    key={index}
                    className={`indicator ${currentPhoto === index ? 'active' : ''}`}
                    onClick={() => setPhoto(index)}
                />
            ))}
        </div>
    </div>
)};

export default Carousel
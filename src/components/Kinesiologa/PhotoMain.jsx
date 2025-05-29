import photoMain from '@/assets/images/principal/kine.jpg';

const PhotoMain = () => (
    <div className="photo-main">
        <div className="photo-container">
            <div className="photo-frame">
                <img
                    src={photoMain}
                    alt="Kine Mía - Foto Principal"
                    className="main-photo"
                />

                <div className="photo-overlay">
                    <div className="overlay-content">
                        <h2 className="photo-title">🌹 Tu Kinesióloga Favorita</h2>
                        <p className="photo-description">Profesional, discreta y con experiencia comprobada</p>
                        <div className="badges">
                            <span className="badge">✨ Premium</span>
                            <span className="badge purple">🔥 Disponible</span>
                            <span className="badge red">💎 VIP</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="photo-note">* Foto real verificada - Se desbloquea al agendar cita</p>
        </div>
    </div>
);

export default PhotoMain
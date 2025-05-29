const AudioSection = () => (
    <div className="audio-section">
        <h3 className="audio-title">🎤 Mensaje Personal de Mía</h3>
        <p className="audio-description">Escucha mi voz y conoce más sobre mis servicios</p>

        <div className="audio-container">
            <audio controls className="audio-controls">
                <source src="/audio/kine-mia-mensaje.mp3" type="audio/mpeg" />
                <source src="/audio/kine-mia-mensaje.ogg" type="audio/ogg" />
                Tu navegador no soporta el elemento de audio.
            </audio>
        </div>

        <div className="audio-info">
            <div className="audio-item">
                <span>🎵</span>
                <span>Duración: 45 seg</span>
            </div>
            <div className="audio-item">
                <span>🔊</span>
                <span>Audio verificado</span>
            </div>
        </div>

        <p className="audio-note">* Audio grabado especialmente para presentarme y generar más confianza</p>
    </div>
)

export default AudioSection;
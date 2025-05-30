import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const AudioSection = () => {
    const [duration, setDuration] = useState('45 seg');
    const audioRef = useRef(null);

    const { clienteId } = useParams();

    const formatTime = (seconds) => {
        if (!seconds || isNaN(seconds)) return '-- seg';
        
        if (seconds < 60) {
            return `${Math.round(seconds)} seg`;
        } else {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.round(seconds % 60);
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')} min`;
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            const audioDuration = audioRef.current.duration;
            setDuration(formatTime(audioDuration));
        }
    };

    return (
        <div className="audio-section">
            <h3 className="audio-title">{`🎤 Mensaje Personal de ${clienteId[0].toUpperCase() + clienteId.slice(1).toLowerCase()}`}</h3>
            <p className="audio-description">Escucha mi voz y conoce más sobre mis servicios</p>

            <div className="audio-container">
                <audio 
                    ref={audioRef}
                    controls 
                    className="audio-controls"
                    onLoadedMetadata={handleLoadedMetadata}
                >
                    <source src={`/${clienteId}/audio/${clienteId}-audio.mp3`} type="audio/mpeg" />
                    <source src={`/${clienteId}/audio/${clienteId}-audio.ogg`} type="audio/ogg" />
                    Tu navegador no soporta el elemento de audio.
                </audio>
            </div>

            <div className="audio-info">
                <div className="audio-item">
                    <span>🎵</span>
                    <span>Duración: {duration}</span>
                </div>
                <div className="audio-item">
                    <span>🔊</span>
                    <span>Audio verificado</span>
                </div>
            </div>

            <p className="audio-note">* Audio grabado especialmente para presentarme y sepan que soy real</p>
        </div>
    )
}

export default AudioSection;
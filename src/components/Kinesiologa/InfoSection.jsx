const InfoSection = () => (
    <div className="info-section">
        <div className="info-grid">
            <div className="info-item">
                <div className="info-icon">🏆</div>
                <div className="info-value">+5 años</div>
                <div className="info-label">Experiencia</div>
            </div>
            <div className="info-item">
                <div className="info-icon">💎</div>
                <div className="info-value">VIP</div>
                <div className="info-label">Servicio Premium</div>
            </div>
            <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-value">San Borja</div>
                <div className="info-label">Lima</div>
            </div>
            <div className="info-item">
                <div className="info-icon">🕐</div>
                <div className="info-value">9am-8pm</div>
                <div className="info-label">Lun-Sáb</div>
            </div>
        </div>

        <div className="experience-box">
            <h3 className="experience-title">✨ Experiencia Única</h3>
            <ul className="experience-list">
                <li>• Atención personalizada y discreta</li>
                <li>• Ambiente relajante y profesional</li>
                <li>• Terapias exclusivas adaptadas a ti</li>
                <li>• 100% confidencial y seguro</li>
            </ul>
        </div>
    </div>
);

export default InfoSection;
const QRModal = ({ onCancel, onConfirm }) => (
    <div className="modal">
        <div className="modal-content">
            <h3 className="modal-title">🔐 Verificación de Cliente</h3>
            <p className="modal-text">
                Para garantizar tu seriedad como cliente y evitar personas que solo buscan perder tiempo,
                necesitamos una verificación simbólica de S/ 5.00 y asi enviarte lo necesario para encontrarnos
            </p>

            <div className="qr-container">
                <div className="qr-placeholder">
                    <div className="qr-icon">📱</div>
                    <div className="qr-text">Código QR Yape</div>
                    <div className="qr-amount">S/ 5.00</div>
                </div>
            </div>

            <p className="qr-note">Escanea con tu app Yape para realizar el pago de verificación, luego envia la captura en mi chat, sera la unica forma en la que te responda</p>

            <div className="modal-buttons">
                <button className="modal-btn cancel" onClick={onCancel}>Cancelar</button>
                <button className="modal-btn confirm" onClick={onConfirm}>Ya Pagué ✓</button>
            </div>
        </div>
    </div>
)

export default QRModal
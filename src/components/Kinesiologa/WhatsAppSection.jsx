const WhatsAppSection = ({paymentVerified,onWhatsAppClick}) => (
    <div className="whatsapp-section">
        <button className="whatsapp-btn" onClick={onWhatsAppClick}>
            {paymentVerified ? '💬 Continuar a WhatsApp' : '💬 Escribir por WhatsApp para coordinar nuestro encuentro'}
        </button>

        {!paymentVerified && (
            <div className="notice-box">
                <p><strong>💡 Recomendación:</strong> Al hacer clic se solicitará verificación de S/ 5.00</p>
                <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Al proceder, aceptas nuestros términos de uso y políticas de privacidad</p>
            </div>
        )}

        {paymentVerified && (
            <div className="notice-box success">
                <p><strong>✅ Verificación completada</strong></p>
                <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Serás redirigido automáticamente a WhatsApp</p>
            </div>
        )}
    </div>
)

export default WhatsAppSection;
import React, { useState } from 'react'
import './styles/kinesiologa.css'
import Header from './components/Kinesiologa/Header'
import PhotoMain from './components/Kinesiologa/PhotoMain'
import AudioSection from './components/Kinesiologa/AudioSection'
import Carousel from './components/Kinesiologa/Carousel'
import InfoSection from './components/Kinesiologa/InfoSection'
import WhatsAppSection from './components/Kinesiologa/WhatsAppSection'
import QRModal from './components/Kinesiologa/QRModal'




const KinesiologaPage = () => {
    const [currentPhoto, setCurrentPhoto] = useState(0)
    const [showQR, setShowQR] = useState(false)
    const [paymentVerified, setPaymentVerified] = useState(false)

    const photos = [
        { src: '/luz/carousel/luz-1.jpg', alt: 'Foto 1' },
        { src: '/luz/carousel/luz-2.jpg', alt: 'Foto 2' },
        { src: '/luz/carousel/luz-3.jpg', alt: 'Foto 2' },
        { src: '/luz/carousel/luz-4.jpg', alt: 'Foto 2' },
    ];


    const handleWhatsAppClick = () => {
        if (!paymentVerified) {
            setShowQR(true)
            return
        }
        setTimeout(() => {
            const mensaje = encodeURIComponent("Hola Kine Lizza, vi tu página, realicé el pago de verificación y estoy interesad@ en una sesión.")
            window.open(`https://wa.me/51953102525?text=${mensaje}`, '_blank')
        }, 1000);
    }

    const handlePaymentConfirm = () => {
        setPaymentVerified(true);
        setShowQR(false);

        // En lugar de llamar de nuevo a handleWhatsAppClick(),
        // mejor abrir WhatsApp directamente ya que el pago fue confirmado.
        setTimeout(() => {
            const mensaje = encodeURIComponent("Hola Kine Lizza, vi tu página, realicé el pago de verificación y estoy interesad@ en una sesión.")
            window.open(`https://wa.me/51904800405?text=${mensaje}`, '_blank')
        }, 1000);
    }

    return (
        <>
            <div className="container">
                <Header />
                <PhotoMain />
                <AudioSection />
                <Carousel
                    photos={photos}
                    currentPhoto={currentPhoto}
                    setCurrentPhoto={setCurrentPhoto}
                />
                <InfoSection />
                <WhatsAppSection
                    paymentVerified={paymentVerified}
                    onWhatsAppClick={handleWhatsAppClick}
                />
                <footer className="footer">
                    <p>🔒 Servicio 100% discreto y confidencial</p>
                    <p>Solo para personas mayores de edad</p>
                </footer>
            </div>

            {showQR && (
                <QRModal
                    onCancel={() => setShowQR(false)}
                    onConfirm={handlePaymentConfirm}
                />
            )}
        </>
    )
}

export default KinesiologaPage
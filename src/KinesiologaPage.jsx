import React, { useState } from 'react'
import './styles/kinesiologa.css'
import Header from './components/Kinesiologa/Header'
import PhotoMain from './components/Kinesiologa/PhotoMain'
import AudioSection from './components/Kinesiologa/AudioSection'
import Carousel from './components/Kinesiologa/Carousel'
import InfoSection from './components/Kinesiologa/InfoSection'
import WhatsAppSection from './components/Kinesiologa/WhatsAppSection'
import QRModal from './components/Kinesiologa/QRModal'
import { useParams } from 'react-router-dom'




const KinesiologaPage = ({data}) => {
    const [currentPhoto, setCurrentPhoto] = useState(0)
    const [showQR, setShowQR] = useState(false)
    const [paymentVerified, setPaymentVerified] = useState(false)
    const {clienteId} = useParams();
    

    const photos = [
        { src: `/${clienteId}/carousel/${clienteId}1.jpg`, alt: 'Foto 1' },
        { src: `/${clienteId}/carousel/${clienteId}2.jpg`, alt: 'Foto 2' },
        { src: `/${clienteId}/carousel/${clienteId}3.jpg`, alt: 'Foto 3' },
        { src: `/${clienteId}/carousel/${clienteId}4.jpg`, alt: 'Foto 4' },
    ];


    const handleWhatsAppClick = () => {
        const mensaje = encodeURIComponent(data.privateMsgWhatsApp);
        if(!data.isPaymentRequired) {
            setPaymentVerified(true);
            setTimeout(() => {
                window.open(`https://wa.me/${data.phoneNumber}?text=${mensaje}`, '_blank');
            }, 1000);

            return;
        }
        
        if (!paymentVerified) {
            setShowQR(true)
            return
        }

        setTimeout(() => {
            window.open(`https://wa.me/${data.phoneNumber}?text=${mensaje}`, '_blank');
        }, 1000);
    }

    const handlePaymentConfirm = () => {
        setPaymentVerified(true);
        setShowQR(false);

        // En lugar de llamar de nuevo a handleWhatsAppClick(),
        // mejor abrir WhatsApp directamente ya que el pago fue confirmado
        setTimeout(() => {
            const mensaje = encodeURIComponent(data.privateMsgWhatsApp)
            window.open(`https://wa.me/${data.phoneNumber}?text=${mensaje}`, '_blank');
        }, 1000);
    }

    return (
        <>
            <div className="container">
                <Header />
                <PhotoMain />
                {
                    data.hasAudio && (
                        <AudioSection />
                    )
                }
                
                <Carousel
                    photos={photos}
                    currentPhoto={currentPhoto}
                    setCurrentPhoto={setCurrentPhoto}
                />
                <InfoSection />
                <WhatsAppSection
                    paymentVerified={paymentVerified}
                    onWhatsAppClick={handleWhatsAppClick}
                    data={data}
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
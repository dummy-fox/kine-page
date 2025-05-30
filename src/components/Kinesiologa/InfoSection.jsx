import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InfoSection = () => {
    const [data, setData] = useState({
        infoItems: [
            { icon: '🏆', value: '', label: '' },
            { icon: '💎', value: '', label: '' },
            { icon: '📍', value: '', label: '' },
            { icon: '🕐', value: '', label: '' }
        ],
        experienceTitle: '',
        experienceList: []
    });

    const { clienteId } = useParams();

    useEffect(() => {
        fetch(`/${clienteId}/textos.json`)
            .then((res) => res.json())
            .then((json) => {
                setData({
                    infoItems: json.infoItems ?? [
                        { icon: '🏆', value: '', label: '' },
                        { icon: '💎', value: '', label: '' },
                        { icon: '📍', value: '', label: '' },
                        { icon: '🕐', value: '', label: '' }
                    ],
                    experienceTitle: json.experienceTitle ?? '',
                    experienceList: json.experienceList ?? []
                });
            })
            .catch((err) => console.error('Error cargando textos:', err));
    }, [clienteId]);

    return (
        <div className="info-section">
            <div className="info-grid">
                {data.infoItems.map((item, index) => (
                    <div key={index} className="info-item">
                        <div className="info-icon">{item.icon}</div>
                        <div className="info-value">{item.value}</div>
                        <div className="info-label">{item.label}</div>
                    </div>
                ))}
            </div>

            <div className="experience-box">
                <h3 className="experience-title">{data.experienceTitle}</h3>
                <ul className="experience-list">
                    {data.experienceList.map((text, i) => (
                        <li key={i}>• {text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfoSection;

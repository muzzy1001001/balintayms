import React, { useEffect, useState } from 'react';

const Confetti = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const colors = ['#ff69b4', '#ff1493', '#c71585', '#ffb6c1', '#ff6b8a', '#ffd700'];
        const newParticles = [];

        for (let i = 0; i < 150; i++) {
            newParticles.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 2,
                duration: Math.random() * 2 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 10 + 5,
                rotation: Math.random() * 360
            });
        }

        setParticles(newParticles);

        const timer = setTimeout(() => {
            setParticles([]);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="confetti-container">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="confetti-particle"
                    style={{
                        left: `${particle.left}%`,
                        backgroundColor: particle.color,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                        transform: `rotate(${particle.rotation}deg)`
                    }}
                />
            ))}
        </div>
    );
};

export default Confetti;
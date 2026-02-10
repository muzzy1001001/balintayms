import React, { useEffect, useState } from 'react';

const BackgroundHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const generateHearts = () => {
            const newHearts = [];
            for (let i = 0; i < 30; i++) {
                newHearts.push({
                    id: i,
                    left: Math.random() * 100,
                    top: Math.random() * 100,
                    delay: Math.random() * 6,
                    duration: Math.random() * 3 + 4,
                    size: Math.random() * 20 + 10
                });
            }
            setHearts(newHearts);
        };

        generateHearts();
    }, []);

    return (
        <div className="background-hearts">
            {hearts.map(heart => (
                <div
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: `${heart.left}%`,
                        top: `${heart.top}%`,
                        width: `${heart.size}px`,
                        height: `${heart.size}px`,
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundHearts;
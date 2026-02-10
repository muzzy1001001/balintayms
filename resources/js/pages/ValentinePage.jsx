import React, { useState, useCallback, useRef, useEffect } from 'react';
import ValentineCard from '../components/ValentineCard';
import SuccessMessage from '../components/SuccessMessage';
import BackgroundHearts from '../components/BackgroundHearts';
import Confetti from '../components/Confetti';

const ValentinePage = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [confettiActive, setConfettiActive] = useState(false);
    const [yesButtonSize, setYesButtonSize] = useState(1);
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const noButtonRef = useRef(null);
    const lastIncreaseTime = useRef(0);
    const increaseDelay = 300;

    const handleYesClick = useCallback(() => {
        setShowSuccess(true);
        setConfettiActive(true);
    }, []);

    const increaseYesSize = useCallback(() => {
        const now = Date.now();
        if (now - lastIncreaseTime.current < increaseDelay) {
            return;
        }
        lastIncreaseTime.current = now;
        
        setYesButtonSize(prev => {
            const newSize = prev + 0.05;
            return newSize > 3 ? 3 : newSize;
        });
    }, []);

    const handleNoHover = useCallback((e) => {
        if (!noButtonRef.current) return;

        const button = noButtonRef.current;
        const rect = button.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        const deltaX = mouseX - buttonCenterX;
        const deltaY = mouseY - buttonCenterY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 120) {
            increaseYesSize();

            // Random teleportation inside the button container only - MOVE FARTHER
            const containerRect = button.parentElement.getBoundingClientRect();
            const buttonWidth = rect.width;
            const buttonHeight = rect.height;
            
            // Container dimensions
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;
            
            // Generate random position inside the container with LARGER movement
            // Start from center (0,0) and add random offset with increased range
            const maxOffsetX = (containerWidth - buttonWidth) / 2 - 10; // 10px padding
            const maxOffsetY = (containerHeight - buttonHeight) / 2 - 10;
            
            // Move farther by multiplying the offset range
            const moveMultiplier = 3; // Move 3x farther
            const randomX = (Math.random() - 0.5) * 2 * maxOffsetX * moveMultiplier;
            const randomY = (Math.random() - 0.5) * 2 * maxOffsetY * moveMultiplier;
            
            setNoButtonPosition({
                x: randomX,
                y: randomY
            });
        }
    }, [increaseYesSize]);

    const handleNoClick = useCallback(() => {
        setYesButtonSize(1);
        setNoButtonPosition({ x: 0, y: 0 });
    }, []);

    return (
        <div className="valentine-container">
            <BackgroundHearts />
            
            {!showSuccess ? (
                <ValentineCard
                    yesButtonSize={yesButtonSize}
                    noButtonPosition={noButtonPosition}
                    noButtonRef={noButtonRef}
                    onYesClick={handleYesClick}
                    onNoHover={handleNoHover}
                    onNoClick={handleNoClick}
                />
            ) : (
                <SuccessMessage />
            )}
            
            {confettiActive && <Confetti />}
        </div>
    );
};

export default ValentinePage;
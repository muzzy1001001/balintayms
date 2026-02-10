import React from 'react';

const ValentineCard = ({ 
    yesButtonSize, 
    noButtonPosition, 
    noButtonRef, 
    onYesClick, 
    onNoHover, 
    onNoClick 
}) => {
    return (
        <div className="valentine-card">
            <img 
                src="/img/me.png" 
                alt="Valentine" 
                className="valentine-image"
            />
            <div className="title-container">
                <h1 className="valentine-title">
                    WILL YOU BE MY VALENTINE?
                </h1>
                <span className="korean-text">자기야</span>
            </div>
            <div className="button-container">
                <button
                    className="btn btn-yes"
                    onClick={onYesClick}
                    style={{
                        transform: `scale(${yesButtonSize})`
                    }}
                >
                    YES
                </button>
                <button
                    ref={noButtonRef}
                    className="btn btn-no"
                    onMouseMove={onNoHover}
                    onClick={onNoClick}
                    style={{
                        transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`
                    }}
                >
                    NO
                </button>
            </div>
        </div>
    );
};

export default ValentineCard;
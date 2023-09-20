import React, { useState } from 'react';
import './FavoritesButton.css';


interface FavoritesButtonProps {
    description: string;
    onChange?: (value: boolean) => void;
}

const FavoritesButton: React.FC<FavoritesButtonProps> = ({ description, onChange }) => {

    const [currentState, setCurrentState] = useState(false);
    
    const handleClick = () => {
        if (onChange) {
            setCurrentState(!currentState);
            onChange(!currentState);
        }
    };

    return (
        <>
            <div className='FavoritesButton-button'>
                <button onClick={handleClick}>
                    {description}
                </button>
            </div>
        </>
    )
}

export default FavoritesButton

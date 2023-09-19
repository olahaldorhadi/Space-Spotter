import React from 'react';
import './FavoritesButton.css';


interface FavoritesButtonProps {
    description: string;
    onChange?: (value: boolean) => void;
}

const FavoritesButton: React.FC<FavoritesButtonProps> = ({ description, onChange }) => {

    let currentState: boolean = false;
    
    const handleClick = () => {
        // Call the onChange prop when the button is clicked
        if (onChange) {
            currentState = !currentState;
            console.log(currentState)
          onChange(currentState);
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

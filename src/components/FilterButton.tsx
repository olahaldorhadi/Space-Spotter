import { useState } from 'react';
import './FilterButton.css';

interface FilterButtonProps {
    initialDescription: string;
    inputType: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ initialDescription, inputType }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(initialDescription);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newDescription = event.currentTarget.value || event.currentTarget.innerText;
        setDescription(newDescription);
        console.log("button was clicked", newDescription);
        toggleDropdown();
    }

    return (
        <>
            <div className='filter-button'>
                <button onClick={toggleDropdown}>{description}</button>
                {inputType === 'dropdown' && isOpen && (
                 <div className='dropdown-menu'> 
                    <button onClick={handleButtonClick}>Gløshaugen</button>
                    <button onClick={handleButtonClick}>Dragvoll</button>
                    <button onClick={handleButtonClick}>Kalvskinnet</button>
                    <button onClick={handleButtonClick}>Øya</button>
                    <button onClick={handleButtonClick}>Tunga</button>
                    <button onClick={handleButtonClick}>Elgseter</button>
                    <button onClick={handleButtonClick}>Lerkendal</button>
                    <button onClick={handleButtonClick}>Moholt</button>
                    <button onClick={handleButtonClick}>Olavskvartalet</button>
                    <button onClick={handleButtonClick}>Solsiden</button>
                </div>
                )}
            </div>
        </>
    )
}

export default FilterButton;

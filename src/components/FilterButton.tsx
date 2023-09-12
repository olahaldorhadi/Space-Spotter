import { useState } from 'react';
import './FilterButton.css';

interface FilterButtonProps {
    description: string;
    inputType: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ description, inputType }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='filter-button' onClick={toggleDropdown}>
                <p>{description}</p>
                {inputType === 'dropdown' && isOpen && (
                    <div className='dropdown-menu'>
                        <p>Gløshaugen</p>
                        <p>Dragvoll</p>
                        <p>Kalvskinnet</p>
                        <p>Øya</p>
                        <p>Tunga</p>
                        <p>Elgseter</p>
                        <p>Lerkendal</p>
                        <p>Moholt</p>
                        <p>Olavskvartalet</p>
                        <p>Solsiden</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default FilterButton;

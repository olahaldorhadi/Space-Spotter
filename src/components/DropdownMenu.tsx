import { useState } from 'react';
import './DropdownMenu.css';

interface DropdownMenuProps {
    description: string;
    inputType: string;
}

export const campusList = [
    { key: 0, optionsText: "Gløshaugen" },
    { key: 1, optionsText: "Dragvoll" },
    { key: 2, optionsText: "Kalvskinnet" },
    { key: 3, optionsText: "Øya" },
    { key: 4, optionsText: "Tunga" },
    { key: 5, optionsText: "Elgseter" },
    { key: 6, optionsText: "Lerkendal" },
    { key: 7, optionsText: "Moholt" },
    { key: 8, optionsText: "Olavskvartalet" },
    { key: 9, optionsText: "Solsiden" },
  ]

  export const typeList = [
    { key: 0, optionsText: "Grupperom" },
    { key: 1, optionsText: "Undervisningsrom" },
    { key: 2, optionsText: "Digital undervisning" },
    { key: 3, optionsText: "Auditorium" },
    { key: 4, optionsText: "Seminarrom" },
    { key: 5, optionsText: "Lesesal" },
    { key: 6, optionsText: "Vrimleareal" },
    { key: 7, optionsText: "Dataarbeidsplass" },
    { key: 8, optionsText: "Ferdighetsrom" },
    { key: 9, optionsText: "Boks" },
    { key: 10, optionsText: "Laboratorium" },
  ]
  

const DropdownMenu: React.FC<DropdownMenuProps> = ({ description, inputType }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDescription, setCurrentDescription] = useState(description);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const updatedDescription = event.currentTarget.value || event.currentTarget.innerText;
        setCurrentDescription(updatedDescription);
        toggleDropdown();
    }
    
    return (
        <>
            <div className='dropdown'>
                <button onClick={toggleDropdown}>{currentDescription}</button>
                {inputType === "building" && isOpen && (
                    <div className='dropdown-menu'> 
                        {campusList.map(campus => (
                            <button onClick={handleButtonClick} key={campus.key}>{campus.optionsText}</button>
                        ))}
                    </div>
                )}
                {/* {isOpen && inputType === "building" (
                    <div className='dropdown-menu'> 
                        {campusList.map(campus => (
                            <button onClick={handleButtonClick} key={campus.key}>{campus.optionsText}</button>
                        ))}
                    </div>
                )} */}
                {inputType === "roomtype" && isOpen && (
                    <div className='dropdown-menu'> 
                        {campusList.map(campus => (
                            <button onClick={handleButtonClick} key={campus.key}>{campus.optionsText}</button>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default DropdownMenu;

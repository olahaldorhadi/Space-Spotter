import Dropdown from './DropdownMenu';
import './Filters.css';
import FavoritesButton from './FavoritesButton';
import { useEffect, useState } from 'react';
import { useFilterContext } from './FilterContext';
import { setItem, getItem, toggleFavorite, checkIfFavoriteIsTrue } from '../utils/sessionStorageUtil';


const Filters = () => {
    const [localCampus, setLocalCampus] = useState<string>(() => getItem("campus") || "Hvilket campus?");
    
    const [localSizeValue, setLocalSizeValue] = useState<number | null>(() => {
        const sizeValue = parseInt(getItem("minSize"));
        return isNaN(sizeValue) ? null : sizeValue;
    });
    const displaySize = localSizeValue?.toString() ?? "Størrelse?";
    
    const [localRoomType, setLocalRoomType] = useState<string>(() => getItem("roomType") || "Romtype?");
    const [localFavorites, setFavoriteChoice] = useState<boolean>(() => (checkIfFavoriteIsTrue("favorite")))

    const {setCampus, setSize, setRoomType, setFavorites} = useFilterContext();

    useEffect(() => {
        setCampus(localCampus);
        setSize(displaySize);
        setRoomType(localRoomType);
        setFavorites(localFavorites);
    }, [displaySize, localCampus, localFavorites, localRoomType, setCampus, setFavorites, setRoomType, setSize]);
    
    return (
        <>
            <div className='filters--filters'>
                <div className='filters--filters-section'>
                    <Dropdown 
                        description={localCampus} 
                        inputType={'campus'} 
                        onChange={(value: string): void => {
                            setLocalCampus(value);
                            setItem("campus", value)
                        }} 
                    />
                    <input 
                        type="number" 
                        placeholder={displaySize.toString()}
                        className='filters--number-input' 
                        min="1"
                        onChange={(e): void => {
                            setLocalSizeValue(parseInt(e.target.value));
                            setItem("minSize", e.target.value)
                        }} 

                    />
                    <Dropdown 
                        description={localRoomType}
                        inputType={'roomtype'} 
                        onChange={(value: string): void => {
                            setLocalRoomType(value);
                            setItem("roomType", value)
                        }} 
                    />
                    <FavoritesButton 
                        description={'Se favoritter'} 
                        onChange={(value: boolean): void => {
                            setFavoriteChoice(value)
                            toggleFavorite("favorite"); 
                        }} 
                    />
                </div>
            </div>
        </>
    )
}

export default Filters

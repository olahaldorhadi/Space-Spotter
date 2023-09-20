import Dropdown from './DropdownMenu';
import SearchButton from './SearchButton';
import './Filters.css';
import FavoritesButton from './FavoritesButton';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from './FilterContext';
import { setItem, getItem, removeItem, toggleFavorite, checkIfFavoriteIsTrue } from '../utils/sessionStorageUtil';


const Filters = () => {
    const [localCampus, setLocalCampus] = useState<string>(() => getItem("campus") || "Hvilket campus?");
    const [localSize, setLocalSize] = useState<any>(() => parseInt(getItem("minSize")) || "Størrelse?");
    const [localRoomType, setLocalRoomType] = useState<string>(() => getItem("roomType") || "Romtype?");
    const [localFavorites, setFavoriteChoice] = useState<boolean>(() => (checkIfFavoriteIsTrue("favorite")))
    
    const {campus, setCampus, size, setSize, roomType, setRoomType, favorites, setFavorites} = useContext(FilterContext);

    useEffect(() => {
        setCampus(localCampus);
        setSize(localSize);
        setRoomType(localRoomType);
        setFavorites(localFavorites);
    }, [localCampus, localSize, localRoomType, localFavorites]);
    
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
                        placeholder={localSize}
                        className='filters--number-input' 
                        onChange={(e): void => {
                            setLocalSize(e.target.value);
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
                    <SearchButton description={'Søk'} />
                </div>
            </div>
        </>
    )
}

export default Filters

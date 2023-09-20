import Dropdown from './DropdownMenu';
import './Filters.css';
import FavoritesButton from './FavoritesButton';
import { useContext, useEffect, useState } from 'react';
import { FilterContext } from './FilterContext';
import { setItem, getItem, removeItem } from '../utils/sessionStorageUtil';


const Filters = () => {

    // const [campus, setCampus] = useState('');
    // const [size, setSize] = useState('');
    // const [roomType, setRoomType] = useState('');
    // const [favorites, setFavorites] = useState(false);
    const [localCampus, setLocalCampus] = useState<string>(() => getItem("campus") || "Hvilket campus?");
    const [localSize, setLocalSize] = useState<any>(() => parseInt(getItem("minSize")) || "Størrelse?");
    const [localRoomType, setLocalRoomType] = useState<string>(() => getItem("roomType") || "Romtype?");
    
    const {campus, setCampus, size, setSize, roomType, setRoomType, favorites, setFavorites} = useContext(FilterContext);

    useEffect(() => {
        setCampus(localCampus);
        setSize(localSize);
        setRoomType(localRoomType);
    }, [localCampus, localSize, localRoomType]);
    

    // return (
    //     <>
    //         <div className='filters--filters'>
    //             <div className='filters--filters-section'>
    //                 <Dropdown description={'Hvilket campus?'} inputType={'campus'} onChange={(value: string): void => { setCampus(value); }} />
    //                 <input type="number" placeholder='Størrelse?' className='filters--number-input' onChange={(e): void => { setSize(e.target.value); }} />
    //                 <Dropdown description={'Romtype'} inputType={'roomtype'} onChange={(value: string): void => { setRoomType(value); }} />
    //                 <FavoritesButton description={'Se favoritter'} onChange={(value: boolean): void => { setFavorites(value); }} />
    //             </div>
    //         </div>
    //     </>
    // )
    return (
        <>
            <div className='filters--filters'>
                <div className='filters--filters-section'>
                    <Dropdown 
                        description={localCampus} 
                        inputType={'campus'} 
                        onChange={(value: string): void => {
                            setLocalCampus(value);
                            setItem("campus", value) // Method from sessionStorage which saves the campus with the key "campus"
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
                            setFavorites(value);
                        }} 
                    />
                </div>
            </div>
        </>
    )
}

export default Filters

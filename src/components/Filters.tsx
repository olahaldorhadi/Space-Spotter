import Dropdown from './DropdownMenu';
import SearchButton from './SearchButton';
import './Filters.css';
import FavoritesButton from './FavoritesButton';
import { useContext } from 'react';
import { FilterContext } from './FilterContext';


const Filters = () => {

    // const [campus, setCampus] = useState('');
    // const [size, setSize] = useState('');
    // const [roomType, setRoomType] = useState('');
    // const [favorites, setFavorites] = useState(false);

    const { campus, setCampus, size, setSize, roomType, setRoomType, favorites, setFavorites } = useContext(FilterContext);

    // return (
    //     <>
    //         <div className='filters--filters'>
    //             <div className='filters--filters-section'>
    //                 <Dropdown description={'Hvilket campus?'} inputType={'campus'} onChange={(value: string): void => { setCampus(value); }} />
    //                 <input type="number" placeholder='Størrelse?' className='filters--number-input' onChange={(e): void => { setSize(e.target.value); }} />
    //                 <Dropdown description={'Romtype'} inputType={'roomtype'} onChange={(value: string): void => { setRoomType(value); }} />
    //                 <FavoritesButton description={'Se favoritter'} onChange={(value: boolean): void => { setFavorites(value); }} />
    //                 <SearchButton description={'Søk'} />
    //             </div>
    //         </div>
    //     </>
    // )
    return (
        <>
            <div className='filters--filters'>
                <div className='filters--filters-section'>
                    <Dropdown 
                        description={'Hvilket campus?'} 
                        inputType={'campus'} 
                        onChange={(value: string): void => {
                            setCampus(value);
                        }} 
                    />
                    <input 
                        type="number" 
                        placeholder='Størrelse?' 
                        className='filters--number-input' 
                        onChange={(e): void => {
                            setSize(e.target.value);
                        }} 
                    />
                    <Dropdown 
                        description={'Romtype'} 
                        inputType={'roomtype'} 
                        onChange={(value: string): void => {
                            setRoomType(value);
                        }} 
                    />
                    <FavoritesButton 
                        description={'Se favoritter'} 
                        onChange={(value: boolean): void => {
                            setFavorites(value);
                        }} 
                    />
                    <SearchButton description={'Søk'} />
                </div>
            </div>
        </>
    )
}

export default Filters

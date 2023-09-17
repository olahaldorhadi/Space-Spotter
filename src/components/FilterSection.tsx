import { useState } from 'react';
import Dropdown from './DropdownMenu';
import FavoritesButton from './FavoritesButton';
import './FilterSection.css';


const FilterSection = () => {
    // const [size, setSize] = useState('');
    // const [roomType, setRoomType] = useState('');
    // const [favorites, setFavorites] = useState(false);

    // const { rooms, isLoading, error } = useFilteredRooms(size, roomType, favorites);

    return (
        <>
            <div className='filter-section--filter-section'>
                <div className='filter-section--filter-section'>
                    {/* <Dropdown description={'Hvilket bygg?'} inputType={'building'} /> */}
                    <input type="number" placeholder='Størrelse?' onChange={(e) => setSize(e.target.value)} />
                    {/* <Dropdown description={'Hvilke størrelse?'} inputType={'dropdown'} /> */}
                    <Dropdown description={'Romtype?'} inputType={'roomtype'} onChange={(value) => setRoomType(value)}/>
                    <FavoritesButton description={'Se favoritter'} onChange={(value) => setFavorites(value)} />
                    {/* <FilterButton description={'Når?'} inputType={''} />
                    <FilterButton description={'Antall?'} inputType={''} /> */}
                </div>
            </div>
        </>
    )
}

export default FilterSection

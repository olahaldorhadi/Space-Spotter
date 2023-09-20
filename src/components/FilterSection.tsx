import Dropdown from './DropdownMenu';
import FavoritesButton from './FavoritesButton';
import './FilterSection.css';
import { FilterContext } from './FilterContext';
import { useContext } from 'react';


const FilterSection = () => {
    const { updateFilters } = useContext(FilterContext);

    return (
        <>
            <div className='filter-section--filter-section'>
                <div className='filter-section--filter-section'>
                    {}
                    <input type="number" placeholder='Størrelse?' onChange={(e) => updateFilters({ size: e.target.value })} />
                    {}
                    <Dropdown description={'Romtype?'} inputType={'roomtype'} onChange={(value) => updateFilters({ roomType: value })}/>
                    <FavoritesButton description={'Se favoritter'} onChange={(value) => updateFilters({ favorites: value })}  />
                    {}
                </div>
            </div>
        </>
    )
}

export default FilterSection

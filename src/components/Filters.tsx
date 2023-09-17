import Dropdown from './DropdownMenu';
import SearchButton from './SearchButton';
import './Filters.css';


const Filters = () => {

    return (
        <>
            <div className='filters--filters'>
                <div className='filters--filters-section'>
                    <Dropdown description={'Hvilket campus?'} inputType={'campus'} />
                    {/* <FilterButton description={'Når?'} inputType={''} />
                    <FilterButton description={'Antall?'} inputType={''} /> */}
                    <SearchButton description={'Søk'} />
                </div>
            </div>
        </>
    )
}

export default Filters

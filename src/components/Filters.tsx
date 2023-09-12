import FilterButton from './FilterButton';
import './Filters.css';
import SearchButton from './SearchButton';

const Filters = () => {

    return (
        <>
            <div className='filters'>
                <div className='filters-section'>
                    <FilterButton description={'Hvilken campus?'} inputType={'dropdown'} />
                    {/* <FilterButton description={'Når?'} inputType={''} />
                    <FilterButton description={'Antall?'} inputType={''} /> */}
                    <SearchButton description={'Søk'} />
                </div>
            </div>
        </>
    )
}

export default Filters

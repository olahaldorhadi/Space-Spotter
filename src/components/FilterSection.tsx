import Dropdown from './DropdownMenu';
import './FilterSection.css';


const FilterSection = () => {

    return (
        <>
            <div className='filter-section--filter-section'>
                <div className='filter-section--filter-section'>
                    <Dropdown description={'Hvilket bygg?'} inputType={'dropdown'} />
                    <Dropdown description={'Hvilke størrelse?'} inputType={'dropdown'} />
                    <Dropdown description={'Type?'} inputType={'dropdown'} />
                    <Dropdown description={'Favoritter'} inputType={'dropdown'} />
                    {/* <FilterButton description={'Når?'} inputType={''} />
                    <FilterButton description={'Antall?'} inputType={''} /> */}
                </div>
            </div>
        </>
    )
}

export default FilterSection

import './SearchButton.css';

interface SearchButtonProps {
    description: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ description }) => {
    
    return (
        <>
            <div className='search-button'>
                <button>{description}</button>
            </div>
        </>
    )
}

export default SearchButton

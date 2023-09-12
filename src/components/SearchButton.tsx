import './SearchButton.css';

interface SearchButtonProps {
    description: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ description }) => {
    
    return (
        <>
            <div className='search-button'>
                <p>{description}</p>
            </div>
        </>
    )
}

export default SearchButton

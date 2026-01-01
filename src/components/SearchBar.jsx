

function SearchBar({ setSearch }) {
    return (

        <div className="search">
            <input type="text"
                placeholder="Search for Products,Brands and More"
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

    );
}

export default SearchBar;

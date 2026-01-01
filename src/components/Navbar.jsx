import SearchBar
    from "./SearchBar";

function Navbar({ setSearch }) {
    return (
        <div>
            <nav>
                <div className='logo'>
                    <h1 className='text-black'>CoLo<span className='text-red-400'>SHoP</span></h1>
                </div>
                <SearchBar setSearch={setSearch} />

                <a href="#" className='navlink'>HOME</a>
                <a href="#" className='navlink'>SHOPING</a>

                <button className="btn">Add-Acount</button>
            </nav>
        </div>
    )
}

export default Navbar;
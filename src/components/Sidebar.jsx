function Sidebar({ setCategory }) {
    return (
        <div className="sidebar">

            <div className="box">
                <h4 className="text-red-400">Categories</h4>

                <p onClick={() => setCategory("all")}>All</p>
                <p onClick={() => setCategory("men's clothing")}>Men</p>
                <p onClick={() => setCategory("women's clothing")}>Women</p>
                <p onClick={() => setCategory("electronics")}>Electronics</p>
                <p onClick={() => setCategory("jewelery")}>Jewelery</p>
            </div>

        </div>
    );
}

export default Sidebar;

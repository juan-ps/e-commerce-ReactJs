const SearchSidebar = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="container border border-black p-2">
                    <p>Search Module</p>
                    <ul className="menu bg-base-100">
                        <li className="menu-title">
                            <span>Category 1</span>
                        </li>
                        <li className="hover-bordered"><a>Camisas</a></li>
                        <li className="hover-bordered"><a>Blusas</a></li>
                        <li className="hover-bordered"><a>Pantalones</a></li>
                        <li className="menu-title">
                            <span>Category 2</span>
                        </li>
                        <li className="hover-bordered"><a>Camperas</a></li>
                        <li className="hover-bordered"><a>-</a></li>
                        <li className="hover-bordered"><a>-</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default SearchSidebar
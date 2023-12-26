import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


const Nav = ({onSearch}) =>{
    return (
        <nav>        {/*Nav tiene a SearchBar y le paso la funcion onSearch como prop. */}
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to= "/About"> ABOUT </Link>
            </button>
            <button>
                <Link to ='/home'> HOME </Link>
            </button>
        </nav>
    )
}
export default Nav; 
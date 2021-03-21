import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
    const [loggedIn, setLoggedIn] = useContext(UserContext);
    console.log("destination",loggedIn);
  return (
    <div className='header'>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        {/* <Link to="/login">
                        <button className='btn-success'>Login</button>
                        </Link> */}
                        {
                            loggedIn.name ?
                            <span className='user-name'> {loggedIn.name}</span>
                            :
                            <Link to='/login' className='btn-success'>Login</Link>
                        }
                    </li>
                </ul>
            </nav>
        </div>
  );
};

export default Header;

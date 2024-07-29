import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../assets/div.middle-header-main-logo (1).png"
function Nav(props) {
    return (
        <div>
            <div className={"w-full h-auto p-16 bg-red-600"}>
                <Link to="/" >
                    <img src={Logo} alt=""/>
                </Link>
            </div>
        </div>
    );
}

export default Nav;
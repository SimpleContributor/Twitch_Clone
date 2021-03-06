import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
    return (
        <div>
            <Link to="/">
                TwitchClone
            </Link>
            <div>
                <Link to="/">
                    All Streams
                </Link>
                <GoogleAuth />  
            </div>
        </div>
    )
}

export default Header;

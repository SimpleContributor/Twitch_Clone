import React from 'react';
import { Link } from 'react-router-dom';

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
            </div>
        </div>
    )
}

export default Header;

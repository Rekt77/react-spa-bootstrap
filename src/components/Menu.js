import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about">소개</Link></li>
                <li><Link to="/about/react">리액트소개</Link></li>
            </ul>
        </div>
    )
}

export default Menu;
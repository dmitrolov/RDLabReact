import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './navigation.scss'

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className='navigation-container'>
                        <li className='navigation-container__item'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='navigation-container__item'>
                            <Link to="/active/0">Active Image</Link>
                        </li>
                        <li className='navigation-container__item'>
                            <Link to="/Categories/">Categories</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
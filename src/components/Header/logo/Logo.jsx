import React from 'react';
import logo from '../../../assets/images/Logo.svg'
import {Link} from "react-router-dom";
import styles from './Logo.module.scss'
export const Logo = () => {
    return (

        <Link to={"/"} className={styles.link}>
            <img src={logo} alt={"Logo"} className={styles.logo}/>
            <span>Честный<br/> автоподбор</span>
        </Link>

    );
};


import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p> *Машина безумного Дейва - так называется магазин в данной игре.</p>
            <p>&copy; 2024 Plants vs Zombies Merch Store. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>PvZ Мерч</div>
                <ul className={styles.navLinks}>
                    <li><a href="#home">Главная</a></li>
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#shop">Магазин безумного Дейва</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
            <div className={styles.headerContent}>
                <h1>Добро пожаловать в магазин по PvZ</h1>
                <p>Эксклюзивные мерчи для фанатов "Plants vs Zombies"!</p>
                <a href="#shop" className={styles.cta}>Начать заказывать</a>
            </div>
        </header>
    );
};

export default Header;
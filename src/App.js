import React from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
import './styles.css';

import tshirtImage1 from './components/assets/images/tshirt1.png';
import tshirtImage2 from './components/assets/images/tshirt2.png';
import mug1 from './components/assets/images/mug1.png';
import poster1 from './components/assets/images/poster1.png';


const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <section id="about" className="about">
                    <div className="container">
                        <h2>О нас</h2>
                        <p>Ваш универсальный магазин товаров для игры "Растения против зомби". У нас есть все - от футболок до предметов коллекционирования!</p>
                    </div>
                </section>
                <section id="shop" className="shop">
                    <div className="container">
                        <h2>Машина безумного Дейва</h2>
                        <div className="product-grid">
                            <Product name="PvZ Футболка" image={tshirtImage1} price={19.99} />
                            <Product name="PvZ Футболка" image={tshirtImage2} price={19.99} />
                            <Product name="PvZ Poster" image={mug1} price={4.99} />
                            <Product name="PvZ Poster" image={poster1} price={14.99} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
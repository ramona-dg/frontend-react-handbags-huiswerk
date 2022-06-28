import React from 'react';
import './App.css';
import ButtonHomePage from "./ButtonHomePage";
import Product from "./Product";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <ButtonHomePage description="to the collection"/>
                <ButtonHomePage description="shop all bags"/>
                <ButtonHomePage description="pre-orders"/>
            </nav>
            <main>
            <Product
                label="Best seller"
                image={bag_1}
                name="The handy bag"
                price="€400,-"
            />
            <Product
                label="Best seller"
                image={bag_2}
                name="The stylisch bag"
                price="€250,-"
            />
            <Product
                label="New collection"
                image={bag_3}
                name="The simple bag"
                price="€300,-"
            />
            <Product
                label="New collection"
                image={bag_4}
                name="The trendy bag"
                price="€150,-"
            />
            </main>
            <footer>

            </footer>
        </>
    );
}

export default App;




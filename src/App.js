import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import bagOne from './assets/bag_1.png';
import bagTwo from './assets/bag_2.png';
import bagThree from './assets/bag_3.png';
import bagFour from './assets/bag_4.png';


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    isDisabled={false}
                    clickHandler={() => console.log("To the collection!")}
                    description="to the collection"
                />
                <Button isDisabled={false} clickHandler={() => console.log("Shop all bags!")}
                        description="shop all bags"
                />
                <Button isDisabled={true} clickHandler={() => console.log("To the pre-orders!")}
                        description="pre-orders"
                />
            </nav>
            <main>
                <Product
                    label="Best seller"
                    image={bagOne}
                    name="The handy bag"
                    price="€400,-"
                />
                <Product
                    label="Best seller"
                    image={bagTwo}
                    name="The stylisch bag"
                    price="€250,-"
                />
                <Product
                    label="New collection"
                    image={bagThree}
                    name="The simple bag"
                    price="€300,-"
                />
                <Product
                    label="New collection"
                    image={bagFour}
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




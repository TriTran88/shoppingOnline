import React, { Component } from 'react';
import Header from './component/Header'
import Footer from './component/Footer';
import MessageContainer from './conatainers/MessageContainer'
import CartContainer from './conatainers/CartContainer';
import ProductsContainer from './conatainers/ProductsContainer';

class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <MessageContainer />
                        <CartContainer />
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default App
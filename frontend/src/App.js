import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <main className = "py-3">
          <Container>
            <Route exact path = "/" component = {HomeScreen}/>
            <Route exact path = "/products/:id" component = {ProductScreen}/>
          </Container>
        </main>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;

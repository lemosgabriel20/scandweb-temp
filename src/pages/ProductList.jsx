import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Product from '../components/Product';
import '../styles/ProductList.css'
import Footer from '../components/Footer';

function ProductList() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const time = 200;
    const timeout = time*6;
    
    if (timer < timeout) {
      const interval = setInterval(() => {
        fetchProducts();
        setTimer(prev => prev + time);
      }, time);

    return () => clearInterval(interval);
    }
  }, [timer]);

  const fetchProducts = () => {
    fetch('/api/')
    .then(response => response.json())
    .then((data) => {
      setProducts(data);
    });
  }

  const onMassDelete = () => {

    setTimer(0);
    const data = { massDelete: true }
    fetch('/api/', {
      method: 'DELETE',
      body: JSON.stringify(data),
    });
  }

  return (
    <div className='container'>
      <div className='ProductList'>
        <header className='header'>
          <h1>Product List</h1>
          <div className='header-buttons'>
            <button onClick={ () => navigate('/addproduct') }>Add</button>
            <button id="delete-product-btn" onClick={ onMassDelete }>Mass Delete</button>
          </div>
        </header>
        <main className='display'>
          {
            products.map((product, index) => {
              return (
                <Product
                  key = { index }
                  data = { product }
                  setTimer={ setTimer }
                />
              )
            })
          }
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;

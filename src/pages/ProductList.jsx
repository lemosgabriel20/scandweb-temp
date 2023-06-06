import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Product from '../components/Product';
import '../styles/ProductList.css'

function ProductList() {
  //Please note, that on product list page product should not be split by product types - they should be sorted by primary key in database.
  // Call to api to get all products
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/storepage/src/api/')
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        setProducts(data);
      });
  }, [])

  return (
    <div className='ProductList'>
      <header className='header'>
        <h1>Product List</h1>
        <div className='header-buttons'>
          <button onClick={ () => navigate('/addproduct') }>ADD</button>
          <button id="#delete-product-btn">MASS DELETE</button>
        </div>
      </header>
      <main className='display'>
        {
          products.map((product, index) => {
            return (
              <Product
                key = { index }
                sku = { product.sku }
                name = { product.name }
                price = { product.price }
                data = { product }
                misc = { product.type }
              />
            )
          })
        }
      </main>
    </div>
  );
};

export default ProductList;

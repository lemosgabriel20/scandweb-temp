import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Product from '../components/Product';
import '../styles/ProductList.css'

function ProductList() {
  //Please note, that on product list page product should not be split by product types - they should be sorted by primary key in database.
  // Call to api to get all products
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

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
        { /* Show api fetchAll result */ }
        <Product sku={"JWC23A"} name={"Batman DVD"} price={1.20} data={"2"} misc={"furniture"}/>
      </main>
    </div>
  );
};

export default ProductList;

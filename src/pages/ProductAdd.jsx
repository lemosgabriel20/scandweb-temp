import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddForm from '../components/AddForm';
import '../styles/ProductAdd.css'

function ProductAdd() {
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [info, setInfo] = useState('');
  const [data, setData] = useState({
    sku: '',
    name: '',
    price: 0,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { sku, name, price } = data;
    const body = {
      sku,
      name,
      price,
      type,
      info,
    };
    console.log(body)
    fetch('http://localhost/storepage/src/api/', {
      method: 'POST',
      body: JSON.stringify(body),
    }).then(response => response.text()).then((data)=> console.log(data));
  }

  return (
    <div className='ProductAdd'>
      <header className='header'>
        <h1>Product Add</h1>
        <div className='header-buttons'>
          <button onClick={ handleSubmit }>Save</button>
          <button onClick={ () => navigate('/') }>Cancel</button>
        </div>
      </header>
      <AddForm setData={ setData } data={ data } setInfo={ setInfo } setType={ setType } type={ type }/>
    </div>
  );
};

export default ProductAdd;
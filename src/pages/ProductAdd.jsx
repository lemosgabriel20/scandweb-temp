import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddForm from '../components/AddForm';
import Notification from '../components/Notification';
import Footer from '../components/Footer';
import '../styles/ProductAdd.css'

function ProductAdd() {
  const navigate = useNavigate();
  const [saveDisablaed, setDisabled] = useState(false);
  const [data, setData] = useState({
    sku: '',
    name: '',
    price: '',
    type: '',
    info: '',
  });
  const [notify, setNotify] = useState({
    sku: {
      on: false,
      type: undefined,
      message: undefined,
    },
    required: {
      on: false,
      type: undefined,
      message: undefined,
    },
    type: {
      on: false,
      type: undefined,
      message: undefined,
    }
  });

  const fetchAPI = () => {
    setDisabled(true);
    fetch('/api/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.status === 409) {
          setNotify({ sku: { on: true, type: 'error', message: 'SKU already registered.' }});
          setDisabled(false);
        } else {
          setNotify({ sku: { on: false, type: undefined, message: undefined }});      
          navigate('/');
        }
      });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { sku, name, price, type, info } = data;

    // Require errors
    if (sku === '' || name === '' || price === '' || type === '') {
      setNotify({ required: {on: true, type: 'error', message: 'Please, submit required data.'}});
      return null;
    }
    else if (type === 'dvd' && info.size === '') {
      setNotify({ required: {on: true, type: 'error', message: 'Please, submit required data.'}});
      return null;
    }
    else if (type === 'book' && info.weight === '') {
      setNotify({ required: {on: true, type: 'error', message: 'Please, submit required data.'}});
      return null;
    }
    else if (type === 'furniture' && (info.height === '' || info.width === '' || info.length === '')) {
      setNotify({ required: {on: true, type: 'error', message: 'Please, submit required data.'}});
      return null;
    }
    else {
      setNotify({ required: { on: false, type: undefined, message: undefined }});
    }

    // Type errors
    const regex = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;
    if (!regex.test(price)) {
      setNotify({ type: { on: true, type: 'error', message: 'Please, provide the data of indicated type' } });
      return null;
    }
    else if (type === 'dvd' && !regex.test(info.size)) {
      setNotify({ type: { on: true, type: 'error', message: 'Please, provide the data of indicated type' } });
      return null;
    }
    else if (type === 'book' && !regex.test(info.weight)) {
      setNotify({ type: { on: true, type: 'error', message: 'Please, provide the data of indicated type' } });
      return null;
    }
    else if (type === 'furniture' && (!regex.test(info.height) || !regex.test(info.width)|| !regex.test(info.length))) {
      setNotify({ type: { on: true, type: 'error', message: 'Please, provide the data of indicated type' } });
      return null;
    }
    
    fetchAPI();
  }

  return (
    <div className='container'>
      <div className='ProductAdd'>
        <header className='header'>
          <h1>Product Add</h1>
          <div className='header-buttons'>
            <button onClick={ handleSubmit } disabled={ saveDisablaed }>Save</button>
            <button onClick={ () => navigate('/') }>Cancel</button>
          </div>
        </header>
        {
          Object.values(notify).map((notification, index) => {
            if (notification.on) {
            return <Notification key={ index } type={ notification.type } message={ notification.message } />
            }
            return null;
          })
        }
        <AddForm data={ data } setData={ setData }/>

      </div>
      <Footer/>
    </div>
  );
};

export default ProductAdd;
import { useEffect, useState } from 'react';
import '../styles/Product.css';

function Product ({ sku, name, price, data, misc }) {
  const onDelete = () => {
    alert('Deleted');
  };
  const [productInfo, setProductInfo] = useState({ desc: '', info: '' });
  useEffect(() => {
    const type = misc.toLowerCase();
    switch(type) {
      case 'dvd':
        setProductInfo({ desc: 'Size', info: 'MB' });
        break;
      
      case 'book':
        setProductInfo({ desc: 'Weight', info: 'KG' });
        break;
      
      case 'furniture':
        setProductInfo({ desc: 'Dimension', info: '' });
        break;
    }
  }, [misc]);

  return (
    <div className='Product'>
      { /* Api call for delete */ }
      <input
        type='checkbox'
        className='delete-checkbox'
        onChange={ onDelete }
      />
      <div className='description'>
        <p>{sku}</p>
        <p>{ name }</p>
        <p>{ price } $</p>
        <p>{ `${productInfo.desc}: ` }{ data }{ ' ' + productInfo.info }</p>
      </div>
    </div>
  );
}

export default Product;
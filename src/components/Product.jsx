import { useEffect, useState } from 'react';
import '../styles/Product.css';

function Product ({ sku, name, price, data, misc }) {
  const [productInfo, setProductInfo] = useState({ desc: '', info: '' });
  const [newData, setNewData] = useState();
  const onDelete = () => {
    alert('Deleted');
  };
  useEffect(() => {
    const type = misc.toLowerCase();
    switch(type) {
      case 'dvd':
        setProductInfo({ desc: 'Size', info: 'MB' });
        setNewData(data.size);
        break;
      
      case 'book':
        setProductInfo({ desc: 'Weight', info: 'KG' });
        setNewData(data.weight);
        break;
      
      case 'furniture':
        setProductInfo({ desc: 'Dimension', info: '' });
        setNewData(data.height + 'x' + data.width + 'x' + data.length);
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
        <p>{ `${productInfo.desc}: ` }{ newData }{ ' ' + productInfo.info }</p>
      </div>
    </div>
  );
}

export default Product;
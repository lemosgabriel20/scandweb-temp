import { useEffect, useState } from 'react';
import '../styles/Product.css';

function Product ({ data, setTimer }) {
  const [productInfo, setProductInfo] = useState({ desc: '', info: '' });
  const [newData, setNewData] = useState();

  const onDelete = (evt) => {
    const { sku, type } = data;
    data = {
      massDelete: false,
      sku,
      type: type.toLowerCase(),
    }
    fetch('/api/', {
      method: 'DELETE',
      body: JSON.stringify(data),
    });
    setTimer(0);
  };

  useEffect(() => {
    const  { type } = data;
    switch(type.toLowerCase()) {
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
  }, []);

  return (
    <div className='Product'>
      <input
        type='checkbox'
        className='delete-checkbox'
        onChange={ onDelete }
      />
      <div className='description'>
        <p>{data.sku}</p>
        <p>{ data.name }</p>
        <p>{ data.price } $</p>
        <p>{ `${productInfo.desc}: ` }{ newData }{ ' ' + productInfo.info }</p>
      </div>
    </div>
  );
}

export default Product;
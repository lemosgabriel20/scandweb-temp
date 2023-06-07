import { useEffect, useState } from 'react';
import '../styles/AddForm.css'

function AddForm({ data, setData }) {
  useEffect(() => {
    switch(data.type) {
      case 'dvd':
        setData({...data, info: {size: ''} });
        break;
      case 'book':
        setData({...data, info: {weight: ''} });
        break;
      case 'furniture':
        setData({...data, info: {height: '', width: '', length: ''} });
        break;
    }
  }, [data.type]);

  return(
    <form id="product_form">
      <div className='input-container'>
        <label htmlFor="sku">SKU:</label>
        <input id="sku" type="text" value={data.sku} onChange={ (e) => setData({...data, sku: e.target.value}) }/>
      </div>

      <div className='input-container'>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={data.name} onChange={ (e) => setData({...data, name: e.target.value})}/>
      </div>

      <div className='input-container'>
        <label htmlFor="price">Price ($):</label>
        <input id="price" type="text" value={data.price} onChange={ (e) => setData({...data, price: e.target.value}) } />
      </div>

      <div className='type-switcher'>
        <label htmlFor="productType">Type Switcher</label>
        <select id="productType" onChange={(e) => setData({...data, type: e.target.value })} defaultValue="null">
          <option disabled value="null"></option>
          <option id="DVD" value="dvd">DVD</option>
          <option id="Furniture" value="furniture">Furniture</option>
          <option id="Book" value="book">Book</option>
        </select>
      </div>

      {
        (data.type === 'dvd') ? (
          <div>
            <div className='input-container'>
              <label htmlFor="size">Size(MB):</label>
              <input id="size"type="text" value={data.info.size ? data.info.size : ''} onChange={(e) => setData({...data, info: {size: (e.target.value)}  })}/>
            </div>
            <p className='desc'>Please provide size in MB format</p>
          </div>
        ) : null
      }
      {
        (data.type === 'book') ? (
          <div>
            <div className='input-container'>
              <label htmlFor="weight">Weight(KG):</label>
              <input id="weight" type="text" value={data.info.weight ? data.info.weight : ''} onChange={(e) => setData({...data, info: {weight: (e.target.value)}  })}/>
            </div>
            <p className='desc'>Please provide weight in KG format</p>
          </div>
        ) : null
      }
      {
        (data.type === 'furniture') ? (
          <div>
            <div className='input-container'>
              <label htmlFor="height">Height(CM):</label>
              <input id="height" type="text" value={data.info.height ? data.info.height : ''} onChange={(e) => setData({...data, info: {...data.info, height: (e.target.value)} })}/>
            </div>

            <div className='input-container'>
              <label htmlFor="width">Width(CM):</label>
              <input id="width" type="text" value={data.info.width ? data.info.width : ''} onChange={(e) => setData({...data, info: {...data.info, width: (e.target.value)} })}/>
            </div>

            <div className='input-container'>
              <label htmlFor="length"> Length(CM):</label>
              <input id="length" type="text" value={data.info.length ? data.info.length : ''} onChange={(e) => setData({...data, info: {...data.info, length: (e.target.value)} })}/>
            </div>
            <p className='desc'>Please provide dimensions in HxWxL format</p>
          </div>
        ) : null
      }
    </form>
  );
}

export default AddForm;
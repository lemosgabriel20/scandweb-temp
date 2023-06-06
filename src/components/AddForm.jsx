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
    <form>
      <label>SKU:
      <input type="text" value={data.sku} onChange={ (e) => setData({...data, sku: e.target.value}) }/>
      </label>

      <label> Name:
      <input type="text" value={data.name} onChange={ (e) => setData({...data, name: e.target.value})}/>
      </label>

      <label> Price ($):
      <input type="text" value={data.price} onChange={ (e) => setData({...data, price: e.target.value}) } />
      </label>

      <label> Type Switcher
      <select onChange={(e) => setData({...data, type: e.target.value })} defaultValue="null">
        <option disabled value="null"></option>
        <option id="DVD" value="dvd">DVD</option>
        <option id="Furniture" value="furniture">Furniture</option>
        <option id="Book" value="book">Book</option>
      </select>
      </label>
      {
        (data.type === 'dvd') ? (
          <div>
            <label> Size(MB):
            <input type="text" value={data.info.size ? data.info.size : ''} onChange={(e) => setData({...data, info: {size: (e.target.value)}  })}/>
            </label>
          </div>
        ) : null
      }
      {
        (data.type === 'book') ? (
          <div>
            <label> Weight(KG):
            <input type="text" value={data.info.weight ? data.info.weight : ''} onChange={(e) => setData({...data, info: {weight: (e.target.value)}  })}/>
            </label>
          </div>
        ) : null
      }
      {
        (data.type === 'furniture') ? (
          <div>
            <label> Height(CM):
            <input type="text" value={data.info.height ? data.info.height : ''} onChange={(e) => setData({...data, info: {...data.info, height: (e.target.value)} })}/>
            </label>
            
            <label> Width(CM):
            <input type="text" value={data.info.width ? data.info.width : ''} onChange={(e) => setData({...data, info: {...data.info, width: (e.target.value)} })}/>
            </label>

            <label> Length(CM):
            <input type="text" value={data.info.length ? data.info.length : ''} onChange={(e) => setData({...data, info: {...data.info, length: (e.target.value)} })}/>
            </label>
          </div>
        ) : null
      }
    </form>
  );
}

export default AddForm;
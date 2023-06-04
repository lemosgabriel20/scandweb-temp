import TypeInput from './TypeInput';
import '../styles/AddForm.css'

function AddForm({ setData, data, setInfo, setType, type }) {
  const changeType = (evt) => {
    const { value } = evt.target.options[evt.target.selectedIndex];
    setType(value);
    setData({
      sku: '',
      name: '',
      price: 0,
    });
  }

  return(
    <form action="#" id='product_form'>
      <label>
        SKU
        <input
          type='text'
          id='sku'
          onChange={(evt) => setData({ ...data, sku: evt.target.value })}
        />
      </label>

      <label>
        Name
        <input
          type='text'
          id='name'
          onChange={(evt) => setData({ ...data, sku: evt.target.value })}
        />
      </label>

      <label>
        Price ($)
        <input
          type='number'
          step='0.05' 
          id='price'
          onChange={(evt) => setData({ ...data, price: Number(evt.target.value) })}
        />
      </label>

      <label>
        Type Switcher
        <select
          onChange={ changeType }
          defaultValue="null"
          required
        >
          <option disabled value='null'></option>
          <option id="DVD" value="dvd">DVD</option>
          <option id="Furniture" value="furniture">Furniture</option>
          <option id="Book" value="book">Book</option>
        </select>
      </label>
      <TypeInput type={ type } setInfo={ setInfo } />
    </form>
  );
}

export default AddForm;
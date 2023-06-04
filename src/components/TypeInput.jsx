import { useEffect, useState } from "react";
import '../styles/TypeInput.css';

function TypeInput ({ type, setInfo }) {
  const [display, setDisplay] = useState();
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [target, setTarget] = useState({ value: '' });
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    length: 0,
  });

  useEffect(() => {
    setDisplay(types[type]);
    target.value = '';
  }, [type]);

  useEffect(() => {
    if (type === 'furniture') {
      setInfo(dimensions);
    }
    if (type === 'book') {
      setInfo(weight);
    }
    if (type == 'dvd') {
      setInfo(size);
    }
  }, [type, dimensions, size, weight]);


  const types = {
    dvd: (
      <div>
        <label>
            Size (MB)
            <input
              id="size"
              type="number"
              onChange={ (evt) => setTarget(evt.target) }
              onInput={ (evt) => setSize(Number(evt.target.value))}
            />
        </label>
        <p>Please provide the size in MB format.</p>
      </div>
    ),

    book: (
      <div>
        <label>
          Weight (KG)
          <input
            id="weight"
            type="number"
            onChange={ (evt) => setTarget(evt.target) }
            onInput={ (evt) => setWeight(Number(evt.target.value)) }
          />
        </label>
        <p>Please provide the weight in KG format.</p>
      </div>
    ),

    furniture: (
      <div className="container">
        <label>
          Height (CM)
          <input
            id="height"
            type="number"
            onChange={ (evt) => setTarget(evt.target) }
            onInput={ (evt) => setDimensions({...dimensions, height: Number(evt.target.value)})}
          />
        </label>
        <label>
          Width (CM)
          <input
            id="width"
            type="number"
            onChange={ (evt) => setTarget(evt.target) }
            onInput={ (evt) => setDimensions({...dimensions, width: Number(evt.target.value)})}
          />
        </label>
        <label>
          Length (CM)
          <input
            id="length"
            type="number"
            onChange={ (evt) => setTarget(evt.target) }
            onInput={ (evt) => setDimensions({...dimensions, length: Number(evt.target.value)})}
          />
        </label>
        <p>Please provide dimensions in HxWxL format.</p>
      </div>)
  }


  return(
    <div>
      { display }
    </div>
  );
}

export default TypeInput;
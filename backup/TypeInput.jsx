import { useEffect, useState } from "react";
import '../styles/TypeInput.css';

function TypeInput ({ type, setInfo }) {
  const [display, setDisplay] = useState();
  const [weight, setWeight] = useState({ weight: 0 });
  const [size, setSize] = useState({ size: 0 });
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    setWeight({ weight: 0 });
    setSize({ size: 0 });
    setHeight(0);
    setWidth(0);
    setLength(0);
    setDisplay(types[type]);
  }, [type]);

  useEffect(() => {
    if (type === 'furniture') {
      const dimensions = {
        height,
        width,
        length
      };
      setInfo(dimensions);
    }
    if (type === 'book') {
      setInfo(weight);
    }
    if (type == 'dvd') {
      setInfo(size);
    }
  }, [type, height, width, length, size, weight]);

  const buceta = evt => {
    setSize({ size: Number(evt.target.value) })
    const a = 1;
    setVal((prev) => prev + a);
    console.log(val)
  }

  const types = {
    dvd: (
      <div>
        <label>
            Size (MB)
            <input
              id="size"
              type="number"
              onChange={ buceta }
              //value={ size.size }
            />
            {val}
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
            onInput={ (evt) => setWeight({ weight: Number(evt.target.value) }) }
            placeholder={ width.width }
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
            onInput={ (evt) => setHeight(Number(evt.target.value)) }
            placeholder={ height.height }
          />
        </label>
        <label>
          Width (CM)
          <input
            id="width"
            type="number"
            onInput={ (evt) => setWidth(Number(evt.target.value)) }
            placeholder={ width.width }
          />
        </label>
        <label>
          Length (CM)
          <input
            id="length"
            type="number"
            onInput={ (evt) => setLength(Number(evt.target.value)) }
            placeholder={ length.length }
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
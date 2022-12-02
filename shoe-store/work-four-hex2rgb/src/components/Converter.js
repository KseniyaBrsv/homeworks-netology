import { useState } from 'react';
import Color from 'color';

export const Converter = () => {
  const [value, setValue] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [bgColorResult, setBgColorResult] = useState('');
  const [error, setError] = useState(null);

  const checkColor = (str) => {
    const pattern = new RegExp('^#?([0-9a-f]{6}|[0-9a-f]{3})$');
    return pattern.test(str);
  };

  const hexToRGB = (str) => {
    const r = parseInt(str.slice(1, 3), 16);
    const g = parseInt(str.slice(3, 5), 16);
    const b = parseInt(str.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const onChangeHandler = (e) => {
    const {target: {value}} = e;
    setValue(value);
    if (value.length > 6) {
      if (checkColor(value)) {
        setError(null);
        setBgColor(hexToRGB(value));
        setBgColorResult(Color(value).darken(0.5));
      } else {
        setError('Ошибка!');
        setBgColor('#e94b35');
        setBgColorResult(Color('#e94b35').darken(0.5));
      }
    }
  };

 return (
   <div className='cont' style={{backgroundColor: bgColor}}>
     <form>
       <input type='text' value={value} onChange={onChangeHandler}/>
     </form>
     <div className='res' style={{backgroundColor: bgColorResult}}>
         {error ? error : bgColor}
     </div>
   </div>
 )
}

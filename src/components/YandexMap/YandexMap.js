import React, { useState } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './YandexMap.css';

const YandexMap = () => {

    const [arr,setArr] = useState(
        {
            name: 'aaa',
            id: 1,
            checked: false
        },
        {
            name: 'bbb',
            id: 2,
            checked: false 
        },
        {
            name: 'ccc',
            id: 3,
            checked: false 
        },
        {
            name: 'ddd',
            id: 4,
            checked: false 
        },
        {
            name: 'eee',
            id: 5,
            checked: false 
        }
    )

const  foo1= (i) => {
    console.log(i);
    arr[i].checked = !arr[i].checked 
}

return (
<div className="all">

<ul>
    {arr.map((el, i)=>(
  <li onClick={()=>foo1(i)} className = {el.checked ? "checked" : "unchecked"}>
{el.name}
  </li>
    ))}
  
</ul>


{/* <button className='btnSupport' id='btnSelect'>
    <label className='support'>Support type</label>
    <span className='icon'>&#8681;</span>
</button>
    
<div className="NestedSelect" id='select'>

  <label><input type="radio"/>
    <div className='checkbox'>
    <span>gyuxatntesutyun</span>
    <input type="checkbox" ></input>
    </div>
  </label>

  <div className='child'>
    <label><input type="radio" />
        <span>traktor</span>
    </label>
    <label><input type="radio" />
        <span>bah</span>
    </label>
    <label><input type="radio" />
        <span>vark</span>
    </label>
  </div>

  <label><input type="radio" />
  <div className='checkbox'>
    <span>ardyunaberutyun</span>
    <input type="checkbox" ></input>
  </div>
  </label>
  
  <div className='child'>
      <label><input type="radio" />
        <span>vark</span>
    </label>
      <label><input type="radio" />
        <span>dramashnorh</span>
    </label>
      <label><input type="radio" />
        <span>hipotek</span>
    </label>
  </div>
</div> */}

</div>
);
}

export default YandexMap;


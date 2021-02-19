import React, { useState } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './YandexMap.css';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import countries from './data';
import { filterBy } from '@progress/kendo-data-query';

const YandexMap = () => {

const [data, setData] = useState(countries.slice())

const mapData = {
center: [40.87877, 45.14851],
zoom: 9,
};

const coordinate1 = [
[40.87877, 45.14851]
];

const coordinate2 = [
    [40.12877, 45.54851]
    ];

   const filterChange = (event) => {
        const filter = event.filter;
        const allData = countries.slice();
        const newData = filter.value.length > 3 ?
            filterBy(allData, filter) : allData;

       setData(newData)
    }

return (
<div className="all">
    <div className="filters">
        <h1>Filters</h1>
    <div className="multiselect">
    <MultiSelect
                data={data}
                filterable={true}
                onFilterChange={filterChange}
            />
    </div>
    <div className="select">
    <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    </div>
<YMaps >
<Map className="map" defaultState={mapData}>
{coordinate1.map(coordinate =>
<Placemark geometry={coordinate}
modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
properties={{
hintContent: 'Marzpetaran 1',
balloonContentHeader: "Project 1",
balloonContent: "<div style='width: 250px'><p style='color: grey'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>"
}}
/>)}

{coordinate2.map(coordinate =>
<Placemark geometry={coordinate}
modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
properties={{
hintContent: 'Marzpetaran 2',
balloonContentHeader: "Project 2",
balloonContent: "<div style='width: 250px'><p style='color: grey'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>"
}}
/>)}
</Map>
</YMaps>
</div>
);
}

export default YandexMap;


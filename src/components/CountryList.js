import React from 'react';
import { useSelector } from 'react-redux';
import CountryComponent from './CountryComponent';

const CountryList = () => {
    const countries = useSelector((state) => state);
    console.log(countries);

    return(
        <div>
            <CountryComponent/>
        </div>
    );
};

export default CountryList;
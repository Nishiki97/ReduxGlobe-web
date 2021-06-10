import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryComponent from './CountryComponent';
import { setCountries } from '../redux/actions/countriesAction'
import axios from 'axios';

const CountryList = () => {
    const countries = useSelector((state) => state);
    const disptach = useDispatch();

    const fetchCountries = async () => {
        const response = await axios
        .get('https://restcountries.eu/rest/v2/all')
        .catch((err) => {
            console.log("Error", err)
        });
        disptach(setCountries(response.data));
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    console.log("countries: ", countries);

    return(
        <div>
            <CountryComponent/>
        </div>
    );
};

export default CountryList;
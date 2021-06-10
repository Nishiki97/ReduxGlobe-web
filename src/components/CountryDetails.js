import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {selectCountries} from '../redux/actions/countriesAction';
import { useSelector } from 'react-redux';

const CountryDetails = () => {

    const country = useSelector((state) => state.countries);

    const {countryName} = useParams();

    const dispatch = useDispatch();

    console.log(countryName);

    const detchCountryDetails = async () => {
        const response = await axios
        .get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
        .catch((err) => {
            console.log("Error", err)
        });
        dispatch(selectCountries(response.data));
    };
    

    return(
        <div>
            <h2>Country Details</h2>
        </div>
    )
}

export default CountryDetails;
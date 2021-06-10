import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {searchCountries} from '../redux/actions/countriesAction';


const SearchInput = () => {
    const filteredcountries = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchFilteredCountries = async () => {
        const response = await axios
        .get(`https://restcountries.eu/rest/v2/name/{name}`)
        .catch((err) => {
            console.log("Error", err)
        })
    };

    const onClick = (e) => {
        
    }

    return(
        <div>
            <h2 style={{marginTop: 30}}>Search for a country</h2>
            <InputGroup className="mb-3" style={{marginTop: 20, paddingLeft: 100, paddingRight: 100}}>
                <FormControl
                placeholder="Enter country name here"
                aria-label="country name"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="outline-primary" onClick={onClick}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchInput;
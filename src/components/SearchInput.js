import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchInput = () => {
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
                <Button variant="outline-primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchInput;
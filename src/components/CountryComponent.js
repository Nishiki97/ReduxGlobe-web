import React from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CountryComponent = () => {
    const countries = useSelector((state) => state.allcountries.countries);

    const renderList = countries.map((country) => {

        const {name, nativeName, capital, flag} = country;

        return(
            <Card style={{ width: '25rem', marginLeft: 20, marginTop: 10 }} key={name} className="box">
            <Card.Img variant="top" src={flag}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{nativeName}</Card.Text>
                <Card.Text>Captial of {name} : {capital}</Card.Text>
                <Button variant="primary" href={`/countries/${name}`}>More Information</Button>
            </Card.Body>
            </Card>
        );
    })

    return(
       <div className="grid">
           <CardColumns>
           {renderList}
           </CardColumns>
        </div>
    );
};

export default CountryComponent;

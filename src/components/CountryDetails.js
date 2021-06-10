import React, {useEffect} from 'react';
import axios  from 'axios';
import {useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selectCountries} from '../redux/actions/countriesAction';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const CountryDetails = () => {
    const country = useSelector((state) => state.country);
    const {flag, name, nativeName, captial} = country;

    const {countryName} = useParams();

    const dispatch = useDispatch();

    console.log(country);
    console.log(flag);

    const fetchCountryDetails = async () => {
        const response = await axios
        .get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
        .catch((err) => {
            console.log("Error", err)
        });
        dispatch(selectCountries(response.data));
    };

    useEffect(() => {
        if(countryName && countryName !== "")
        fetchCountryDetails();

    }, [countryName]);

    return(
        <div>
           {Object.keys(country).length === 0 ? (
                <div>Loading.....</div>
            ) : (
            <Container>
                <h3>{countryName}</h3>
                <Row>
                    <Col xs={6} md={4}>
                    </Col>
                    <Col xs={6} md={4}>
                    <Image src={flag} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
            
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                            <Card.Text></Card.Text>
                        </Card.Body>
                </Card>

            </Container>
            )} 

        </div>
    )
}

export default CountryDetails;

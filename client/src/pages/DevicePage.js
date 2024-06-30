import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/Star.png'

const DevicePage = () => {
    const device =   { id: 1, name: "Iphone 12 pro", price: 1000, rating: 5, img: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5860220/Smartfon-APPLE-iPhone-15-128GB-5G-6-1-Czarny-front-tyl-3.jpg'}
    const description = [
        {id:1, title: 'Memory', description: '128 gb'},
        {id:2, title: 'Camera', description: '48 mpx'},
        {id:3, title: 'Processor', description: 'intel 7i'},
        {id:4, title: 'Battery', description: '4000'},
    ]
    return (
        <Container className="mt-3">
            <Row >
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center "
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 220, height: 220, backgroundSize: 'cover', fontSize: 48}}
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width:300, height:300, fontSize: 32, border: '3px solid lightgrey'}}
                    >
                        <h3>From: {device.price}$</h3>
                        <Button variant={"outline-dark"}>Add to bag</Button>
                    </Card>

                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Characteristics</h2>
                {description.map((info, index) =>
                    <Row
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
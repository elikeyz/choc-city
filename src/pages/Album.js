import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './Artists.css';

class Album extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}/photos`)
            .then((response) => {
                if (response.status === 200) {
                    const photos = response.data.filter(photo => photo.albumId === Number(this.props.match.params.id));
                    this.setState({
                        photos: [...photos]
                    });
                }
            });
    }

    render() {
        return (
            <main>
                <Container>
                    <h1>Album</h1>
                    <Row>
                        { this.state.photos.map(photo => (
                            <Col key={photo.id} md={4} sm={6} xs={12}>
                                <Card className="my-3">
                                    <Card.Img variant="top" src={photo.url} />
                                    <Card.Title>{photo.title}</Card.Title>
                                </Card>
                            </Col>
                        )) }
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Album
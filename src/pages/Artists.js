import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Artists.css';

class Artists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        artists: [...response.data]
                    });
                }
            })
    }

    render() {
        return (
            <main>
                <Container className="my-5">
                    <h1>Artists</h1>
                    <hr />
                    { this.state.artists.map((artist) => {
                        const childLink = `/artists/${artist.id}`;
                        return (
                        <Link key={ artist.id } to={childLink}>
                            <Card bg="secondary" text="white" className="my-2">
                                <Card.Body>
                                    <Card.Title>{ artist.name }</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    );
                    })}
                </Container>
            </main>
        );
    }
}

export default Artists;
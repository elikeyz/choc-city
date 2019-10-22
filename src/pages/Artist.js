import React, { Component } from 'react';
import { Container, Card, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Artists.css';

class Artist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artist: {},
            albums: [],
            tweets: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (response.status === 200) {
                    const artist = response.data.find(artist => artist.id === Number(this.props.match.params.id));
                    this.setState({
                        artist
                    });
                    
                    axios.get('https://jsonplaceholder.typicode.com/albums')
                        .then((albumResponse) => {
                            if (albumResponse.status === 200) {
                                const albums = albumResponse.data.filter(album => album.userId === this.state.artist.id);
                                this.setState({
                                    albums: [...albums]
                                });
                            }
                        });

                    axios.get('https://jsonplaceholder.typicode.com/comments')
                        .then((tweetResponse) => {
                            if (tweetResponse === 200) {
                                const tweets = tweetResponse.data.filter(tweet => tweet.email === this.state.artist.email);
                                this.setState({
                                    tweets: [...tweets]
                                });
                            }
                        })
                }
            });
    }

    render() {
        return (
            <main>
                <Container>
                    <h1>{this.state.artist.name}</h1>
                    <p>@{this.state.artist.username}</p>
                    <Card>
                    <Card.Body>
                        <Card.Text><strong>Email: </strong>{this.state.artist.email}</Card.Text>
                        { this.state.artist.address && <Card.Text><strong>Address: </strong>{this.state.artist.address.suite}, {this.state.artist.address.street}, {this.state.artist.address.city} ({this.state.artist.address.zipcode})</Card.Text> }
                    </Card.Body>
                    </Card>
                    <hr />
                    <Tabs defaultActiveKey="albums">
                        <Tab eventKey="albums" title="Albums">
                            <h2>Albums</h2>
                            { this.state.albums.map((album) => {
                            const childLink = `/albums/${album.id}`;
                            return (
                                <Link key={album.id} to={childLink}>
                                    <Card className="my-3" bg="secondary" text="white">
                                        <Card.Body>
                                            <Card.Text><strong>{ album.title }</strong></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            )}) }
                        </Tab>
                        <Tab eventKey="tweets" title="Tweets">
                            <h2>Tweets</h2>
                        </Tab>
                    </Tabs>
                </Container>
            </main>
        );
    }
}

export default Artist;
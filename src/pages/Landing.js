import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
    return (
        <main className="landing-page-content">
            <Container>
                <h1>Welcome to Chocolate City</h1>
                <h3>Check out our amazing artists and albums here</h3>
                <Link to="/artists"><Button size="lg" variant="dark">Explore</Button></Link>
            </Container>
        </main>
    );
}

export default Landing;
import React, { Component } from 'react';

class Album extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        }
    }

    render() {
        return (
            <h1>Album</h1>
        );
    }
}

export default Album
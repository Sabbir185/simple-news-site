import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const TopHeading = () => {
    return (
        
        <Jumbotron className='container'>
            <h1>Breaking News!</h1>
            <p>
                call api , show 5 title
            </p>
            <p>
                <Button variant="primary">Read More</Button>
            </p>
        </Jumbotron>
    );
};

export default TopHeading;
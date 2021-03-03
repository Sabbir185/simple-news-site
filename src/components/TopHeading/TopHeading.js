import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const TopHeading = (props) => {

    const articles = props.article;

    return (

        <Jumbotron className='container'>
            <h1>Breaking News!</h1>
            {
                articles.map(article => <li>{article.title}</li>)
            }
            <p>
                <Button variant="primary">Read More</Button>
            </p>
        </Jumbotron>
    );
};

export default TopHeading;
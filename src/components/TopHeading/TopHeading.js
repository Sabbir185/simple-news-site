import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const TopHeading = (props) => {
    const articles = props.articles;
    return (

        <Jumbotron className='container'>
            <h1>Breaking News!</h1>
            <p>
                {
                    articles.map(article => <li>{article.title}</li>)
                }
            </p>
            <p>
                <Button variant="primary">Read More</Button>
            </p>
        </Jumbotron>
    );
};

export default TopHeading;
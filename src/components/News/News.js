import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
    const {title, description, urlToImage} = props.article;
    
    return (
        <div className='container mb-5'>
            <Card>
                <Card.Header>News420</Card.Header>
                <Card>
                    <Card.Img className='w-75 d-block m-auto pt-3 pb-2' variant="top" src={urlToImage} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>

                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button className='ml-4' variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
                
            </Card>
        </div>
    );
};

export default News;
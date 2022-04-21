import React from 'react';
import { Card, Button, CardGroup, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ModalVideo from 'react-modal-video'
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import ReactPlayer from 'react-player';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb, strYoutube } = props.meal;
    console.log(props.meal)

    return (
        <div>


            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 100)}
                        </Card.Text>

                        <Button variant="primary">  Click Watch video</Button>{' '}

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;
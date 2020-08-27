import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Subject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Subject = (props) => {
    console.log(props)
    const { name, price, image, instructor } = props.topics;
    return (
        <div className="card-deck">
            <div className="col-md-3 ">
                <Card className="card-shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="title">{name}</Card.Title>
                        <Card.Text className="text">
                            <h4>${price}</h4>
                            <p className="instructor">Instructor: <i>{instructor}</i> </p>
                        </Card.Text>
                        <Button
                            variant="primary"
                            className="button"
                            onClick={() => props.handleAddSubject(props.topics)}

                        >
                            <FontAwesomeIcon icon={faBookOpen} className="icon" />Enroll Now
                </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>


    );
};

export default Subject;
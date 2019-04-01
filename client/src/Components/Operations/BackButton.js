import React from "react";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BackButton extends React.Component {

    render() {
        return (
            <Link className="" to={'/'}>
                    <Button className="btn btn-secondary" style={{marginBottom: '10px'}}>
                        Back
                    </Button>
            </Link>
        )
    }
}

                
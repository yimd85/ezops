import React from "react";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BackButton extends React.Component {

    render() {
        return (
            <Link style={{ color: '#337ab7' }} className="" to={'/'}>
                    <Button style={{marginBottom: '10px'}}>
                        Go Back
                    </Button>
            </Link>
        )
    }
}

                
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Link} from "react-router-dom";
import "./Navigation2.css";

export default function Navigation2() {

    return (
        <div className="nav2">
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
                <Button><Link to="/">Home</Link></Button>
                <Button><Link to="/sheet">Sheet</Link></Button>
            </ButtonGroup>
        </div>
    );
}
import React, {useEffect, useState} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#50E3C2',
    },
}));

export default function Loading(props) {

    let [loading, setLoading] = useState(props.loading);
    let [color, setColor] = useState("#50E3C2");

    useEffect(() => {
        console.log("loading", props);
    }, [loading]);

    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={loading}>
            <HashLoader color="#4A90E2" size={100} />
        </Backdrop>
        // <div className="sweet-loading">
        //     <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        //     <input
        //         value={color}
        //         onChange={(input) => setColor(input.target.value)}
        //         placeholder="Color of the loader"
        //     />
        //
        //     <HashLoader color="#4A90E2" loading={loading} css={override} size={100} />
        // </div>
    );
}
import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <lablel html for={props.input.id}>{props.lable}</lablel>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;
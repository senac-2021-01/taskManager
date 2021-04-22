/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Input as KittenInput } from '@ui-kitten/components';

const Input = forwardRef((props, ref) => {
    const {
        defaultValue,
        ...other
    } = props;

    const [value, setValue] = useState(defaultValue || '');

    const getValue = () => {
        return value;
    };

    useImperativeHandle(ref, () => ({
        getValue,
    }));

    return (
        <KittenInput
            {...other}
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
        />
    );
});

Input.displayName = 'Input';

export default Input;

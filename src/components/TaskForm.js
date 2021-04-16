/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */

import React, { createRef } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import {
    Button,
} from '@ui-kitten/components';

import Input from './common/Input';

function TaskForm() {
    const inputNameRef = createRef();

    const getIputNameRef = () => {
        return inputNameRef.current;
    };

    const handleOnSaveButtonPress = async () => {
        await axios.post('https://parseapi.back4app.com/classes/Task', {
            Name: getIputNameRef().getValue(),
        }, {
            headers: {
                'X-Parse-Application-Id': 'wpPi20JkWCYZ1wTsEnfZNWnqqVOOhJTo2kk3jagc',
                'X-Parse-REST-API-Key': 'FRtAa3gHvLK57PfDvE6WWKRu1OknYwc5g1DFaC7N',
            },
        });
    };

    return (
        <View>
            <Input
                ref={inputNameRef}
                placeHolder='Informe a tarefa'
            />
            <Button onPress={handleOnSaveButtonPress}>
                Salvar
            </Button>
        </View>
    );
}

export default TaskForm;

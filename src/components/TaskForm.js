/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */

import React, { createRef } from 'react';
import axios from 'axios';
import {
    View,
    StyleSheet,
} from 'react-native';
import {
    Button,
} from '@ui-kitten/components';

import Input from './common/Input';

function TaskForm(props) {
    const {
        task,
        showTaskList,
    } = props;

    const inputNameRef = createRef();

    const getIputNameRef = () => {
        return inputNameRef.current;
    };

    const handleOnBackButtonPress = () => {
        showTaskList();
    };

    const handleOnSaveButtonPress = async () => {
        if (task) {
            await axios.put(`https://parseapi.back4app.com/classes/Task/${task.objectId}`, {
                Name: getIputNameRef().getValue(),
            }, {
                headers: {
                    'X-Parse-Application-Id': 'wpPi20JkWCYZ1wTsEnfZNWnqqVOOhJTo2kk3jagc',
                    'X-Parse-REST-API-Key': 'FRtAa3gHvLK57PfDvE6WWKRu1OknYwc5g1DFaC7N',
                },
            });
        } else {
            await axios.post('https://parseapi.back4app.com/classes/Task', {
                Name: getIputNameRef().getValue(),
            }, {
                headers: {
                    'X-Parse-Application-Id': 'wpPi20JkWCYZ1wTsEnfZNWnqqVOOhJTo2kk3jagc',
                    'X-Parse-REST-API-Key': 'FRtAa3gHvLK57PfDvE6WWKRu1OknYwc5g1DFaC7N',
                },
            });
        }

        showTaskList();
    };

    const styles = StyleSheet.create({
        mainView: {
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
        },
        inputView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
        },
        buttonView: {
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
        },
        buttonBack: {
            marginRight: 10,
        },
    });

    return (
        <View style={styles.mainView}>
            <View style={styles.inputView}>
                <Input
                    ref={inputNameRef}
                    label='Nome'
                    defaultValue={task ? task.Name : ''}
                />
            </View>
            <View style={styles.buttonView}>
                <Button
                    style={styles.buttonBack}
                    onPress={handleOnBackButtonPress}
                >
                    Voltar
                </Button>
                <Button onPress={handleOnSaveButtonPress}>
                    Salvar
                </Button>
            </View>
        </View>
    );
}

export default TaskForm;

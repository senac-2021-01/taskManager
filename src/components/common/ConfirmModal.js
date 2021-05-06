/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */

import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Card,
    Modal,
    Text,
    Button,
} from '@ui-kitten/components';

const ConfirmModal = forwardRef((props, ref) => {
    const [state, setState] = useState({
        visible: false,
        message: '',
        onYes: () => { },
        onNo: () => { },
    });

    const show = ({
        message,
        onYes,
        onNo,
    }) => {
        setState({
            ...state,
            visible: true,
            message: message,
            onYes: onYes,
            onNo: onNo,
        });
    };

    const hide = () => {
        setState({
            ...state,
            visible: false,
        });
    };

    const handleOnBackdropPress = () => {
        hide();
    };

    const handleOnYesButtonPress = () => {
        hide();

        state.onYes();
    };

    const handleOnNoButtonPress = () => {
        hide();

        state.onNo();
    };

    useImperativeHandle(ref, () => ({
        show,
        hide,
    }));

    const styles = StyleSheet.create({
        backdrop: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        buttonView: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
        },
        buttonYes: {
            marginRight: 10,
        },
    });

    const {
        visible,
        message,
    } = state;

    return (
        <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={handleOnBackdropPress}
        >
            <Card disabled={true}>
                <Text>{message}</Text>
                <View style={styles.buttonView}>
                    <Button
                        size='tiny'
                        style={styles.buttonYes}
                        onPress={handleOnYesButtonPress}
                    >
                        Sim
                    </Button>
                    <Button
                        size='tiny'
                        onPress={handleOnNoButtonPress}
                    >
                        Não
                    </Button>
                </View>
            </Card>
        </Modal>
    );
});

ConfirmModal.displayName = 'ConfirmModal';

export default ConfirmModal;

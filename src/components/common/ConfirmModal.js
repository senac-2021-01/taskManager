/* eslint-disable prettier/prettier */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    Card,
    Modal,
    Text,
} from '@ui-kitten/components';

const ConfirmModal = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    const handleOnBackdropPress = () => {
        hide();
    };

    useImperativeHandle(ref, () => ({
        show,
        hide,
    }));

    const styles = StyleSheet.create({
        backdrop: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    });

    return (
        <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={handleOnBackdropPress}
        >
            <Card disabled={true}>
                <Text>Welcome to UI Kitten 😻</Text>
            </Card>
        </Modal>
    );
});

ConfirmModal.displayName = 'ConfirmModal';

export default ConfirmModal;

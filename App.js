/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet } from 'react-native';
import {
    ApplicationProvider,
    IconRegistry,
    Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import TaskList from './src/components/TaskList';

export default () => (
    <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={styles.container}>
                <TaskList />
            </Layout>
        </ApplicationProvider>
    </>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
    likeButton: {
        marginVertical: 16,
    },
});

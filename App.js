/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    ApplicationProvider,
    IconRegistry,
    Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import TaskList from './src/components/TaskList';
import TaskForm from './src/components/TaskForm';

function App() {
    const [content, setContent] = useState('TASK-LIST');
    const [selectedTask, setSelectedTask] = useState(null);

    const showTaskForm = task => {
        setSelectedTask(task);
        setContent('TASK-FORM');
    };

    const showTaskList = () => {
        setSelectedTask(null);
        setContent('TASK-LIST');
    };

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

    const renderContent = () => {
        switch (content) {
            case 'TASK-LIST':
                return (
                    <TaskList
                        showTaskForm={showTaskForm}
                    />
                );
            case 'TASK-FORM':
                return (
                    <TaskForm
                        task={selectedTask}
                        showTaskList={showTaskList}
                    />
                );
            default:
                return (
                    <TaskList
                        showTaskForm={showTaskForm}
                    />
                );
        }
    };

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.container}>
                    {renderContent()}
                </Layout>
            </ApplicationProvider>
        </>
    );
}

export default App;

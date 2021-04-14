/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem } from '@ui-kitten/components';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const styles = StyleSheet.create({
        container: {
            minWidth: '100%',
        },
    });

    const renderItem = ({ item }) => (
        <ListItem title={item.Name} />
    );

    useEffect(() => {
        const getTasks = async () => {
            const { data } = await axios.get('https://parseapi.back4app.com/classes/Task', {
                headers: {
                    'X-Parse-Application-Id': 'wpPi20JkWCYZ1wTsEnfZNWnqqVOOhJTo2kk3jagc',
                    'X-Parse-REST-API-Key': 'FRtAa3gHvLK57PfDvE6WWKRu1OknYwc5g1DFaC7N',
                },
            });

            setTasks(data.results);
        };

        getTasks();
    }, []);

    return (
        <List
            style={styles.container}
            data={tasks}
            renderItem={renderItem}
        />
    );
}

export default TaskList;

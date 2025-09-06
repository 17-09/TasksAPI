import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { Provider, defaultTheme, View, Flex, Heading } from '@adobe/react-spectrum';
import { RelayEnvironment } from './relay/environment';
import TaskPage from './components/TaskPage';

export default function App() {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Provider theme={defaultTheme} colorScheme="light">
                <View padding="size-300" maxWidth="900px" marginX="auto">
                    <Flex direction="column" gap="size-200">
                        <Heading level={2}>Task Manager</Heading>
                        <TaskPage />
                    </Flex>
                </View>
            </Provider>
        </RelayEnvironmentProvider>
    );
}
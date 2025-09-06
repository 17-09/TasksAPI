import React from 'react';
import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
  StatusLight,
  ActionButton,
  Flex,
  View,
} from '@adobe/react-spectrum';
import { graphql, useMutation } from 'react-relay';
import type { TaskList_UpdateTaskStatus_Mutation } from '../__generated__/TaskList_UpdateTaskStatus_Mutation.graphql';

const UpdateMutation = graphql`
  mutation TaskList_UpdateTaskStatus_Mutation($id: UUID!, $status: TaskStatus!) {
    updateTaskStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;

type Task = {
  id: string;
  title: string;
  description?: string | null;
  status: 'PENDING' | 'COMPLETED';
};

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const [commit, isInFlight] = useMutation<TaskList_UpdateTaskStatus_Mutation>(UpdateMutation);

  const toggle = (task: Task) => {
    const next = task.status === 'PENDING' ? 'COMPLETED' : 'PENDING';
    commit({
      variables: { id: task.id, status: next },
      optimisticResponse: {
        updateTaskStatus: { id: task.id, status: next },
      },
    });
  };

  return (
    <View borderWidth="thin" borderColor="dark" borderRadius="medium" padding="size-200">
      <TableView aria-label="Tasks" selectionMode="none" density="spacious">
        <TableHeader>
          <Column width={220}>Title</Column>
          <Column>Description</Column>
          <Column width={140}>Status</Column>
          <Column width={140}>Action</Column>
        </TableHeader>
        <TableBody>
          {tasks.map(t => (
            <Row key={t.id}>
              <Cell>{t.title}</Cell>
              <Cell>{t.description || '-'}</Cell>
              <Cell>
                <StatusLight variant={t.status === 'COMPLETED' ? 'positive' : 'neutral'}>
                  {t.status}
                </StatusLight>
              </Cell>
              <Cell>
                <Flex>
                  <ActionButton isDisabled={isInFlight} onPress={() => toggle(t)}>
                    {t.status === 'PENDING' ? 'Mark Completed' : 'Mark Pending'}
                  </ActionButton>
                </Flex>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </View>
  );
}
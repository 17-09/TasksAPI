import React, { useState } from 'react';
import { Flex, TextField, TextArea, Button, View } from '@adobe/react-spectrum';
import { graphql, useMutation } from 'react-relay';
import type { CreateTaskForm_CreateTask_Mutation } from '../__generated__/CreateTaskForm_CreateTask_Mutation.graphql';

const CreateMutation = graphql`
  mutation CreateTaskForm_CreateTask_Mutation($title: String!, $description: String) {
    createTask(title: $title, description: $description) {
      id
      title
      description
      status
    }
  }
`;

export default function CreateTaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [commit, isInFlight] = useMutation<CreateTaskForm_CreateTask_Mutation>(CreateMutation);

  const onSubmit = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    commit({
      variables: { title: trimmed, description: description?.trim() || null },
      onCompleted: () => {
        setTitle('');
        setDescription(undefined);
      },
    });
  };

  return (
    <View borderWidth="thin" borderColor="dark" borderRadius="medium" padding="size-200">
      <Flex direction="row" gap="size-200" alignItems="end" wrap>
        <TextField
          label="Title"
          value={title}
          onChange={setTitle}
          width="size-3600"
          isRequired
        />
        <TextArea
          label="Description"
          value={description ?? ''}
          onChange={setDescription}
          width="size-6000"
        />
        <Button
          variant="cta"
          isDisabled={!title.trim() || isInFlight}
          onPress={onSubmit}
        >
          Add Task
        </Button>
      </Flex>
    </View>
  );
}
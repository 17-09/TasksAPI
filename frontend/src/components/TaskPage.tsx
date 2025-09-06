import React, { useEffect } from 'react';
import { graphql, requestSubscription, useLazyLoadQuery } from 'react-relay';
import type { GraphQLSubscriptionConfig } from 'relay-runtime';
import { RelayEnvironment } from '../relay/environment';
import TaskList from './TaskList';
import CreateTaskForm from './CreateTaskForm';
import type { TaskPageQuery } from '../__generated__/TaskPageQuery.graphql';

const TasksQuery = graphql`
  query TaskPageQuery {
    allTasks {
      id
      title
      description
      status
    }
  }
`;

const TaskCreatedSub = graphql`
  subscription TaskPage_TaskCreated_Subscription {
    taskCreated {
      id
      title
      description
      status
    }
  }
`;

const TaskUpdatedSub = graphql`
  subscription TaskPage_TaskUpdated_Subscription {
    taskUpdated {
      id
      status
    }
  }
`;

export default function TaskPage() {
  const data = useLazyLoadQuery<TaskPageQuery>(TasksQuery, {}, { fetchPolicy: 'store-and-network' });

  useEffect(() => {
    const createdCfg: GraphQLSubscriptionConfig<any> = {
      subscription: TaskCreatedSub,
      variables: {},
      updater: (store) => {
        const payload = store.getRootField('taskCreated');
        if (!payload) return;

        // Ensure record exists in the store
        const newId = payload.getValue('id') as string;
        const root = store.getRoot();
        const existing = root.getLinkedRecords('allTasks') || [];
        const exists = existing.some(r => r?.getDataID() === newId);
        if (!exists) {
          root.setLinkedRecords([...existing, payload], 'allTasks');
        }
      },
    };

    const updatedCfg: GraphQLSubscriptionConfig<any> = {
      subscription: TaskUpdatedSub,
      variables: {},
      updater: (store) => {
        const payload = store.getRootField('taskUpdated');
        if (!payload) return;
        const id = payload.getValue('id') as string;
        const status = payload.getValue('status') as string;
        const rec = store.get(id);
        if (rec) rec.setValue(status, 'status');
      },
    };

    const d1 = requestSubscription(RelayEnvironment, createdCfg);
    const d2 = requestSubscription(RelayEnvironment, updatedCfg);
    return () => {
      d1.dispose();
      d2.dispose();
    };
  }, []);

  return (
    <>
      <CreateTaskForm />
      <TaskList tasks={data.allTasks} />
    </>
  );
}
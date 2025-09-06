/**
 * @generated SignedSource<<892d7bb35dd43624fc34603b2b319b41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type TaskPage_TaskCreated_Subscription$variables = Record<PropertyKey, never>;
export type TaskPage_TaskCreated_Subscription$data = {
  readonly taskCreated: {
    readonly description: string | null | undefined;
    readonly id: any;
    readonly status: TaskStatus;
    readonly title: string;
  };
};
export type TaskPage_TaskCreated_Subscription = {
  response: TaskPage_TaskCreated_Subscription$data;
  variables: TaskPage_TaskCreated_Subscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TaskEntity",
    "kind": "LinkedField",
    "name": "taskCreated",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskPage_TaskCreated_Subscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TaskPage_TaskCreated_Subscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "dff6be710b6bdd46e9a03e995406d992",
    "id": null,
    "metadata": {},
    "name": "TaskPage_TaskCreated_Subscription",
    "operationKind": "subscription",
    "text": "subscription TaskPage_TaskCreated_Subscription {\n  taskCreated {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "5008b25acf3ff21c9ecae1cf48ec0fff";

export default node;

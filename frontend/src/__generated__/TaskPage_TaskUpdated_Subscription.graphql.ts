/**
 * @generated SignedSource<<5e6f09d6ba4032455edf5d045dd1e2a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type TaskPage_TaskUpdated_Subscription$variables = Record<PropertyKey, never>;
export type TaskPage_TaskUpdated_Subscription$data = {
  readonly taskUpdated: {
    readonly id: any;
    readonly status: TaskStatus;
  };
};
export type TaskPage_TaskUpdated_Subscription = {
  response: TaskPage_TaskUpdated_Subscription$data;
  variables: TaskPage_TaskUpdated_Subscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TaskEntity",
    "kind": "LinkedField",
    "name": "taskUpdated",
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
    "name": "TaskPage_TaskUpdated_Subscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TaskPage_TaskUpdated_Subscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "34e48a9c735594257b89f1e06c4e0ce0",
    "id": null,
    "metadata": {},
    "name": "TaskPage_TaskUpdated_Subscription",
    "operationKind": "subscription",
    "text": "subscription TaskPage_TaskUpdated_Subscription {\n  taskUpdated {\n    id\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "e2983603e14e213eb1c3dfc16e0d0d19";

export default node;

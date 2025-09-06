/**
 * @generated SignedSource<<8dc04b928c5d1e6da0245da8858be5c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type TaskList_UpdateTaskStatus_Mutation$variables = {
  id: any;
  status: TaskStatus;
};
export type TaskList_UpdateTaskStatus_Mutation$data = {
  readonly updateTaskStatus: {
    readonly id: any;
    readonly status: TaskStatus;
  };
};
export type TaskList_UpdateTaskStatus_Mutation = {
  response: TaskList_UpdateTaskStatus_Mutation$data;
  variables: TaskList_UpdateTaskStatus_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "status"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      }
    ],
    "concreteType": "TaskEntity",
    "kind": "LinkedField",
    "name": "updateTaskStatus",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskList_UpdateTaskStatus_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TaskList_UpdateTaskStatus_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "59900193bfc1b74561ffbafffa92d7a3",
    "id": null,
    "metadata": {},
    "name": "TaskList_UpdateTaskStatus_Mutation",
    "operationKind": "mutation",
    "text": "mutation TaskList_UpdateTaskStatus_Mutation(\n  $id: UUID!\n  $status: TaskStatus!\n) {\n  updateTaskStatus(id: $id, status: $status) {\n    id\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "ca2dfd178a3419e187f98933a69487f8";

export default node;

/**
 * @generated SignedSource<<14c9d0fca46126452ff3716ea7acfc87>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type CreateTaskForm_CreateTask_Mutation$variables = {
  description?: string | null | undefined;
  title: string;
};
export type CreateTaskForm_CreateTask_Mutation$data = {
  readonly createTask: {
    readonly description: string | null | undefined;
    readonly id: any;
    readonly status: TaskStatus;
    readonly title: string;
  };
};
export type CreateTaskForm_CreateTask_Mutation = {
  response: CreateTaskForm_CreateTask_Mutation$data;
  variables: CreateTaskForm_CreateTask_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "TaskEntity",
    "kind": "LinkedField",
    "name": "createTask",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateTaskForm_CreateTask_Mutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateTaskForm_CreateTask_Mutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "7687ed4149baa8ec470dd9856f0d3321",
    "id": null,
    "metadata": {},
    "name": "CreateTaskForm_CreateTask_Mutation",
    "operationKind": "mutation",
    "text": "mutation CreateTaskForm_CreateTask_Mutation(\n  $title: String!\n  $description: String\n) {\n  createTask(title: $title, description: $description) {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "c90a03450cf5ee258440e92fb1c2c754";

export default node;

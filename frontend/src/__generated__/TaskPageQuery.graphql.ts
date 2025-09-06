/**
 * @generated SignedSource<<5465fef6374d3e026f72a6be166ed826>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type TaskPageQuery$variables = Record<PropertyKey, never>;
export type TaskPageQuery$data = {
  readonly allTasks: ReadonlyArray<{
    readonly description: string | null | undefined;
    readonly id: any;
    readonly status: TaskStatus;
    readonly title: string;
  }>;
};
export type TaskPageQuery = {
  response: TaskPageQuery$data;
  variables: TaskPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TaskEntity",
    "kind": "LinkedField",
    "name": "allTasks",
    "plural": true,
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
    "name": "TaskPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TaskPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "208cdcde269a602f59c27f833d7ada2d",
    "id": null,
    "metadata": {},
    "name": "TaskPageQuery",
    "operationKind": "query",
    "text": "query TaskPageQuery {\n  allTasks {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "4d5195ed461cd54d0c9d8cad25682bf6";

export default node;

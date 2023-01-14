import {
  TProductBulkMutationFns,
  TProductBulkQueryFns,
} from "../mugstech-shopify";

export interface IBulkOperationMutationEvent {
  bucket: string;
  bulkFn: TProductBulkMutationFns;
  operationType: "mutation";
  variablesKey: string;
}

export interface IBulkOperationQueryEvent {
  bucket: string;
  bulkFn: TProductBulkQueryFns;
  operationType: "query";
}

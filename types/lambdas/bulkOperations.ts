import {
  TProductBulkMutationFns,
  TProductBulkQueryFns,
} from "../mugstech-shopify";
import { TCSVFormatFnNames, TJSONFormatFnNames } from "../mugstech-utils";

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

export interface IGetBulkOperationDataEvent {
  bucket: string;
  destinationKey: string;
  operationType: "mutation" | "query";
  extension: ("JSON" | "JSONL" | "CSV")[];
  jsonDataFormatFn?: TJSONFormatFnNames;
  jsonType?: "ARRAY" | "OBJECT";
  csvDataFormatFn?: TCSVFormatFnNames;
}

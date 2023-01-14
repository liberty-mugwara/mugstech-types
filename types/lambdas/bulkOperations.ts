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

export interface IGetBulkOperationDataEventJSON {
  extension: "JSON"[];
  jsonDataFormatFn: TJSONFormatFnNames;
  jsonType: "ARRAY" | "OBJECT";
}

export interface IGetBulkOperationDataEventCSV {
  extension: "CSV"[];
  csvDataFormatFn: TCSVFormatFnNames;
}

export interface IGetBulkOperationDataEventJSONL {
  extension: "JSONL"[];
}

export type TGetBulkOperationDataEvent = {
  bucket: string;
  destinationKey: string;
  extension: ("JSON" | "JSONL" | "CSV")[];
  operationType: "mutation" | "query";
  jsonDataFormatFn?: TJSONFormatFnNames;
  jsonType?: "ARRAY" | "OBJECT";
  csvDataFormatFn?: TCSVFormatFnNames;
};

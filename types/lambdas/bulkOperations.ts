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

export interface IGetBulkOperationDataEventJSONandCSV {
  extension: ("JSON" | "CSV")[];
  jsonDataFormatFn: TJSONFormatFnNames;
  jsonType: "ARRAY" | "OBJECT";
  csvDataFormatFn: TCSVFormatFnNames;
}

export interface IGetBulkOperationDataEventJSONandJSONL {
  extension: ("JSON" | "JSONL")[];
  jsonDataFormatFn: TJSONFormatFnNames;
  jsonType: "ARRAY" | "OBJECT";
  csvDataFormatFn: TCSVFormatFnNames;
}

export interface IGetBulkOperationDataEventCSVandJSONL {
  extension: ("CSV" | "JSONL")[];
  csvDataFormatFn: TCSVFormatFnNames;
}

export interface IGetBulkOperationDataEventALL {
  extension: ("JSON" | "JSONL" | "CSV")[];
  jsonDataFormatFn: TJSONFormatFnNames;
  jsonType: "ARRAY" | "OBJECT";
  csvDataFormatFn: TCSVFormatFnNames;
}

export type TGetBulkOperationDataEvent = {
  bucket: string;
  destinationKey: string;
  operationType: "mutation" | "query";
} & (
  | IGetBulkOperationDataEventALL
  | IGetBulkOperationDataEventCSV
  | IGetBulkOperationDataEventCSVandJSONL
  | IGetBulkOperationDataEventJSON
  | IGetBulkOperationDataEventJSONL
  | IGetBulkOperationDataEventJSONandJSONL
  | IGetBulkOperationDataEventJSONandCSV
);

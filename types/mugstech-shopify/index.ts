export type TProductBulkMutationFns =
  | "bulkCreateProducts"
  | "bulkUpdateProductsImages"
  | "bulkAppendProductsImages"
  | "bulkUpdateProductsTags";

export type TProductBulkQueryFns =
  | "getAllProductVariantIds"
  | "getAllProductImages"
  | "getVariantsData";

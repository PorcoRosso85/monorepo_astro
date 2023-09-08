import { trpcData } from "./TrpcClient";

export const getIndex = async (index: undefined) => {
  const data = await trpcData(index);
  return {
    metadata: data.metadata,
    external_symbol: data.external_symbols,
    documents: data.documents,
  };
};

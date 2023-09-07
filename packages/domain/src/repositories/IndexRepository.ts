import { scip } from "../models/ScipBindings";

export interface IndexRepository {
  findById(id: string): Promise<scip.Index>;
  save(index: scip.Index): Promise<void>;
}

import { IndexRepositoryImpl } from "../../repositories/IndexRepositoryImpl";

const path = "../data/index.scip";
const repo = new IndexRepositoryImpl(path);
const index = await repo.findById("1234");
await repo.save(index);

export const indexObject = await repo.findById("1234");

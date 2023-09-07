import { scip } from "../../../scip-typescript/src/scip";
import { IndexRepository } from "../../../domain/src/repositories/IndexRepository";
import fs from "fs";
import path from "path";

export class IndexRepositoryImpl implements IndexRepository {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async findById(id: string): Promise<scip.Index> {
    // ファイルからデータを読み取る
    const fullPath = path.join(this.filePath, `${id}.bin`); // 拡張子は適宜変更してください
    const rawData = fs.readFileSync(fullPath);

    // データをデシリアライズしてIndexオブジェクトを生成
    return scip.Index.deserialize(new Uint8Array(rawData));
  }

  async save(index: scip.Index): Promise<void> {
    // Indexオブジェクトをシリアライズ
    const serializedData = index.serializeBinary();

    // データをファイルに保存
    const fullPath = path.join(this.filePath, `${index.metadata}.bin`); // index.idと拡張子は適宜変更してください
    fs.writeFileSync(fullPath, serializedData);
  }
}

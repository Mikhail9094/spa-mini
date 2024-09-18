import { ColumnType } from "../types";

export interface EmptyRowTableProps<T> {
  columns: ColumnType<T>[];
  deleteRow(): void;
  createRowOnServer(data: Record<keyof T, string>): void;
}

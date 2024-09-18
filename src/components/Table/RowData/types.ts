import { ColumnType } from "../types";

export interface RowProps<T> {
  row: T;
  columns: ColumnType<T>[];
  selectedItems: (number | string)[];
  setSelectedItems: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  changeContract(data: T): void;
}

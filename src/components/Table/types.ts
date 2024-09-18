export interface TableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  emptyRow?: boolean;
  actionTable: IActionTable<T>;
  selectedItems: (number | string)[];
  setSelectedItems: React.Dispatch<React.SetStateAction<(string | number)[]>>;
}

interface IActionTable<T> {
  deleteEmptyRow(): void;
  createRowOnServer(data: Record<keyof T, string>): void;
  changeContract(data: T): void;
}

export interface ColumnType<T> {
  title: string;
  value: keyof T;
  render?: (item: T) => string;
}

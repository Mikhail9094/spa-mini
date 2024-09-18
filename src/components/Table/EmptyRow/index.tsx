import styles from "./emptyRow.module.scss";
import { useState } from "react";
import { EmptyRowTableProps } from "./types";
import ActionButton from "../../ActionButton";
import { isDate } from "../helpers";

function EmptyRow<T>({ columns, deleteRow, createRowOnServer }: EmptyRowTableProps<T>) {
  const [rowData, setRowData] = useState<Record<keyof T, string>>({} as Record<keyof T, string>);
  console.log("rowData", rowData);
  const handleCreateRowOnServer = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      createRowOnServer(rowData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof T) => {
    const { value } = e.target;
    setRowData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <tr className={styles.wrapper}>
      <td className={styles.buttons}>
        <ActionButton img="/img/action/trashFill.svg" alt="удалить" onClick={deleteRow} />
      </td>
      {columns.map((col) => (
        <td key={col.title}>
          {isDate(col.value as string) ? (
            <input
              type="date"
              className={styles.input}
              value={rowData[col.value] || ""}
              onChange={(e) => handleChange(e, col.value)}
              onKeyDown={(e: React.KeyboardEvent) => handleCreateRowOnServer(e)}
            />
          ) : (
            <input
              type="text"
              className={styles.input}
              value={rowData[col.value] || ""}
              onChange={(e) => handleChange(e, col.value)}
              onKeyDown={(e: React.KeyboardEvent) => handleCreateRowOnServer(e)}
            />
          )}
        </td>
      ))}
    </tr>
  );
}

export default EmptyRow;

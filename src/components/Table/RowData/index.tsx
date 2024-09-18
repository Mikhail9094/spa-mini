import styles from "./rowData.module.scss";
import { useState } from "react";
import { RowProps } from "./types";
import { isISOFormat } from "../helpers";

const RowData = <T extends { id: number | string }>({
  row,
  columns,
  changeContract,
  selectedItems,
  setSelectedItems,
}: RowProps<T>) => {
  const [edit, setEdit] = useState(false);
  const [rowData, setRowData] = useState(row);

  const isSelected = selectedItems.includes(row.id);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setSelectedItems((prevSelectedItems) => {
      if (isChecked) {
        return [...prevSelectedItems, row.id];
      } else {
        return prevSelectedItems.filter((id) => id !== row.id);
      }
    });
  };

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      changeContract(rowData);
      setEdit(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof T) => {
    const { value } = e.target;
    setRowData({ ...rowData, [key]: value });
  };

  return (
    <tr className={styles.wrapper} onDoubleClick={() => setEdit(true)}>
      <td className={styles.checkbox}>
        <input type="checkbox" onChange={handleCheckboxChange} checked={isSelected} />
      </td>
      {columns.map((col) => (
        <td key={col.title}>
          {edit ? (
            isISOFormat(col.value as string, rowData[col.value] as string) ? (
              <input
                type="date"
                className={styles.input}
                value={rowData[col.value] as string}
                onChange={(e) => handleChange(e, col.value)}
                onKeyDown={(e: React.KeyboardEvent) => onEnter(e)}
              />
            ) : (
              <input
                type="text"
                className={styles.input}
                value={
                  !col.render ? (rowData[col.value] as string) : (col.render(rowData) as string)
                }
                onChange={(e) => handleChange(e, col.value)}
                onKeyDown={(e: React.KeyboardEvent) => onEnter(e)}
              />
            )
          ) : (
            <>{!col.render ? (rowData[col.value] as string) : (col.render(rowData) as string)}</>
          )}
        </td>
      ))}
    </tr>
  );
};

export default RowData;

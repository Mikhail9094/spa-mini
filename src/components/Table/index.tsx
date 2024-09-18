import { TableProps } from "./types";
import styles from "./styles.module.scss";
import RowData from "./RowData";
import EmptyRow from "./EmptyRow";
import { useState } from "react";

const Table = <T extends { id: number | string }>({
  data,
  columns,
  emptyRow,
  actionTable,
  selectedItems,
  setSelectedItems,
}: TableProps<T>) => {
  const [selectedAll, isSelectedAll] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    isSelectedAll(isChecked);

    if (isChecked) {
      const allIds = data.map((item) => item.id);
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>
            <input type="checkbox" onChange={handleCheckboxChange} checked={selectedAll} />
          </th>
          {columns.map((column) => (
            <th key={column.title}>{column.title}</th>
          ))}
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {data.map((item, i) => (
          <RowData<T>
            row={item}
            columns={columns}
            key={item.id}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            changeContract={actionTable.changeContract}
          />
        ))}

        {emptyRow && (
          <EmptyRow
            columns={columns}
            deleteRow={actionTable.deleteEmptyRow}
            createRowOnServer={actionTable.createRowOnServer}
          />
        )}
      </tbody>
    </table>
  );
};

export default Table;

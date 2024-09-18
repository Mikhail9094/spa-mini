import Table from "../../components/Table";
import styles from "./item.module.scss";
import { columns } from "./constants";
import Loading from "../../components/Loading";
import { useState } from "react";
import ActionButton from "../../components/ActionButton";
import { IContract } from "./types";
import { useGetContracts } from "../../hooks/contracts/useGetContracts";
import { useCreateContract } from "../../hooks/contracts/useCreateContract";
import { useDeleteContracts } from "../../hooks/contracts/useDeleteContracts";
import { useChangeContract } from "../../hooks/contracts/useChangeContract";

const Contracts = () => {
  const [selectedItems, setSelectedItems] = useState<(number | string)[]>([]);
  const [isEmptyRow, setIsEmptyRow] = useState(false);
  const { data = [], isLoading } = useGetContracts();
  const { mutate: createRow } = useCreateContract();
  const { mutate: deleteContracts } = useDeleteContracts();
  const { mutate: changeContract } = useChangeContract();

  const addEmptyRow = () => {
    setIsEmptyRow(true);
  };
  const deleteEmptyRow = () => {
    setIsEmptyRow(false);
  };

  const handleDeleteContracts = async (items: (string | number)[]) => {
    await deleteContracts(items);
    setSelectedItems([]);
  };

  const createRowOnServer = (data: Omit<IContract, "id">) => {
    setIsEmptyRow(false);
    createRow(data);
  };

  return (
    <>
      <div className={styles["header-table"]}>
        <h1>Договора</h1>
        <div className={styles.buttons}>
          <ActionButton img="/img/action/add-file.svg" alt="добавить" onClick={addEmptyRow} />
          {selectedItems.length > 0 && (
            <ActionButton
              img="/img/action/trashFill.svg"
              alt="удалить"
              onClick={() => handleDeleteContracts(selectedItems)}
            />
          )}
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <Table
          data={data}
          columns={columns}
          emptyRow={isEmptyRow}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          actionTable={{ deleteEmptyRow, createRowOnServer, changeContract }}
        />
      )}
    </>
  );
};

export default Contracts;

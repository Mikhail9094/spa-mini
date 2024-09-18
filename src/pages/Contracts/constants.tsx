import { ColumnType } from "../../components/Table/types";
import { formatDate } from "./helpers";
import { IContract } from "./types";

export const columns: ColumnType<IContract>[] = [
  {
    title: "Компания",
    value: "companySignatureName",
  },
  {
    title: "Документ",
    value: "documentName",
  },
  {
    title: "статус",
    value: "documentStatus",
  },
  {
    title: "тип документа",
    value: "documentType",
  },
  {
    title: "номер сотрудника",
    value: "employeeNumber",
  },
  {
    title: "Дата создания",
    value: "companySigDate",
    render: (item) => formatDate(item.companySigDate),
  },
  {
    title: "дата подписания",
    value: "employeeSigDate",
    render: (item) => formatDate(item.employeeSigDate),
  },
  {
    title: "Подписал",
    value: "employeeSignatureName",
  },
];

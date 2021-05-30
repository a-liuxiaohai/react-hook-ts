import React from "react";
import "./table.css";
import { User } from "./serch";

// 定义数据类型
interface ItableList {
  id: number;
  name: string;
  organization: string;
  personId: number;
}

interface ListProps {
  //结构的值的类型
  tableList: ItableList[];
  user: User[];
}

const TableComponent = ({ tableList, user }: ListProps) => {
  return (
    <table style={{ width: "220px" }}>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {tableList.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                {user.find((use) => use.id === item.personId)?.name || "未知"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;

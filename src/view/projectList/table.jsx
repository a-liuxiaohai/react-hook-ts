import React from "react";
import "./table.css";

const TableComponent = ({ tableList, user }) => {
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

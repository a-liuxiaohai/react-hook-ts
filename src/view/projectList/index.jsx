import React, { Fragment, useEffect, useState } from "react";
import SerchComponent from "./serch";
import TableComponnet from "./table";
import qs from "qs";
import { cleatEmpty } from "../../utils";
let userUrl = process.env.REACT_APP_USERURL; // 读取了本地环境变量设置的user地址

const App = () => {
  const [param, setparam] = useState({ name: "", personId: "" });
  const [tableList, settableList] = useState([]);
  const [user, setuser] = useState([]); // 初始化下拉选择的用户信息

  useEffect(() => {
    fetch(`${userUrl}/users`).then(async (res) => {
      if (res.ok) {
        //请求成功之后，需要把table的列表数据保存起来，所以又需要定义一个变量
        setuser(await res.json());
      }
    });
  }, []); // 当param发生变化的时候，去请求接口

  useEffect(() => {
    fetch(`${userUrl}/projects?${qs.stringify(cleatEmpty(param))}`).then(
      async (res) => {
        if (res.ok) {
          settableList(await res.json());
        }
      }
    );
  }, [param]);

  return (
    <Fragment>
      <SerchComponent
        param={param}
        setparam={setparam}
        user={user}
      ></SerchComponent>
      <TableComponnet tableList={tableList} user={user}></TableComponnet>
    </Fragment>
  );
};

export default App;

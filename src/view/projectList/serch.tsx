import React from "react";

export interface User {
  //其他组件也用到了，可以用export导出，这样其他组件也可以使用
  id: number;
  name: string;
}
// 用接口定义数据类型
interface SerchInputParams {
  user: User[];
  param: {
    name: string;
    personId: string;
  };
  setparam: (param: SerchInputParams["param"]) => void;
}

const SerchInput = ({ param, setparam, user }: SerchInputParams) => {
  return (
    <form>
      <input
        type="text"
        placeholder="项目名"
        value={param.name}
        onChange={(e) => setparam({ ...param, name: e.target.value })}
      />
      <select
        name=""
        id=""
        value={param.personId}
        onChange={(e) => setparam({ ...param, personId: e.target.value })}
      >
        <option value="">负责人</option>
        {user.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SerchInput;

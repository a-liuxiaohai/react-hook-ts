import React from "react";

const SerchInput = ({ param, setparam, user }) => {
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

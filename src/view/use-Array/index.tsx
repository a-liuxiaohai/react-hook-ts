import React from "react";
import { useArray, useMount } from "../../utils/index";
const Isarray = () => {
  // person类型是 {name:"jack",age:25}[] 对象结构里面的数组
  const person: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 20 },
  ];
  const { value, setvalue, add, remove, removeIndex } = useArray(person);

  // useMount(() => {
  //   add
  // });
  return (
    <>
      <div>
        <span onClick={() => add({ name: "liuxiaohai", age: 27 })}>添加</span>
        <span onClick={() => removeIndex(0)}>删除</span>
        <span onClick={() => remove()}>清空</span>
      </div>
      <div>
        {value.map((item, index) => (
          <p key={index}>
            <span>{item.name}</span>----<span>{item.age}</span>
          </p>
        ))}
      </div>
    </>
  );
};

export default Isarray;

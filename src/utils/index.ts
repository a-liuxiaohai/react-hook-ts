import { useEffect, useState } from "react";

// 将value===0的返回为true
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

// 将对象里面的key值为空的删除，封装的函数，切记不要去改变传入进来的对象
export const cleatEmpty = (obj: object) => {
  const copyObj = { ...obj };
  Object.keys(copyObj).forEach((key) => {
    // @ts-ignore
    const value = copyObj[key];
    if (isFalsy(value)) {
      //如果key的值为空，则删除该属性，有一种情况是value=0 希望是不被删除的
      // @ts-ignore
      delete copyObj[key];
    }
  });
  console.log(copyObj, 1111);
  return copyObj;
};

// 自定义hooks，当页面中用到useEffect的替换成自定义的hooks
export const useMount = (callBack: () => void) => {
  useEffect(() => {
    callBack();
  }, []); // 如果是空数组，则代表只请求一次
};

// 函数防抖
// export const debounce = (fn, delay = 2000) => {
//   let timeoutId;
//   return () => {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }

//     timeoutId = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };

// useDebounce(param,2000)
export const useDebounce = (value: any, delay?: number) => {
  const [debounceValue, setdebounceValue] = useState(value); //初始化debounce的值

  useEffect(() => {
    const timeoutId = setTimeout(() => setdebounceValue(value), delay); //新增了定时器ID
    return () => clearTimeout(timeoutId); // 每次在上一个useEffect处理完在运行
  }, [value, delay]); //当传进来的参数发生改变时，会触发effect更新
  return debounceValue;
};

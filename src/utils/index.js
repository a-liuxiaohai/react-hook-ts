// 将对象里面的key值为空的删除，封装的函数，切记不要去改变传入进来的对象

export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleatEmpty = (obj) => {
  const copyObj = { ...obj };
  Object.keys(copyObj).forEach((key) => {
    const value = copyObj[key];
    if (isFalsy(value)) {
      //如果key的值为空，则删除该属性，有一种情况是value=0 希望是不被删除的
      delete copyObj[key];
    }
  });
  console.log(copyObj, 1111);
  return copyObj;
};

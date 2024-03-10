export const isExist = (array, name) => {
  return array.some(el => el.name.toLowerCase() === name.toLowerCase());
};

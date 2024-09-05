const localStorageForTotalPage = () => {
  let total = JSON.parse(localStorage.getItem("totalPage") as string);
  return total;
};

export default localStorageForTotalPage;

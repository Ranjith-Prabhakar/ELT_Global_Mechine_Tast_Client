const localStorageForTotalPage = () => {
  let total = JSON.parse(localStorage.getItem("totalPage") as string);
  console.log("total", total);
  return total;
};

export default localStorageForTotalPage;

export const logout = function () {
  localStorage.removeItem("ELTToken");
  localStorage.removeItem("ELTUser");
  return true;
};

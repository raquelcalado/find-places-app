export const isValidEmail = (str) => {
  if (!str) return false;
  const email = str.match(/\w+@\w+\.{1}[a-zA-Z]{2,}(.{1}[a-zA-Z]{2})?/g);

  if (email == null) return false;

  return true;
};

export const isEmptyField = (str) => {
  if (str !== '') return false;
  return true;
};

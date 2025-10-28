export const fetchWithError = async (url, options = {}) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Error smiles");
  }

  return res.json();
};

export const filterWinner = (array) => {
  return array.reduce((acc, current) => {
    return acc?.votes < current?.votes ? current : acc;
  });
};

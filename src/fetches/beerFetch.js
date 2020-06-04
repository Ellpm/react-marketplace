export const beerFetch = async () => {
  let response = await fetch(
    `https://getdrinks.ru:2998/api/products/v01/pivo`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );

  let result = await response.json();
  return result;
};

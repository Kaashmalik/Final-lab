export const fetchCategories = async () => {
    const response = await fetch('https://emojihub.herokuapp.com/api/categories');
    const data = await response.json();
    return data;
  };

  export const fetchDetails = async (category) => {
    const response = await fetch(`https://emojihub.herokuapp.com/api/details/${category}`);
    const data = await response.json();
    return data;
  };

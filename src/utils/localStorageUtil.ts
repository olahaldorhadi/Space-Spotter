const LIST_KEY = "stringList";

export const addString = (value: string) => {
  try {
    const existingList = getList() || [];
    if(!existingList.includes(value)){
      existingList.push(value);
      localStorage.setItem(LIST_KEY, JSON.stringify(existingList));
      return true;
    } 
    else {
      return false;
    }
  } catch (error) {
    console.error("Error adding string to localStorage list:", error);
  }
};

export const getList = (): string[] | null => {
  try {
    const value = localStorage.getItem(LIST_KEY);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting string list from localStorage:", error);
    return null;
  }
};

export const removeString = (value: string) => {
  try {
    const existingList = getList() || [];
    const index = existingList.indexOf(value);
    if (index !== -1) {
      existingList.splice(index, 1);
      localStorage.setItem(LIST_KEY, JSON.stringify(existingList));
    }
  } catch (error) {
    console.error("Error removing string from localStorage list:", error);
  }
};

export const clearList = () => {
  try {
    localStorage.removeItem(LIST_KEY);
  } catch (error) {
    console.error("Error clearing string list from localStorage:", error);
  }
};

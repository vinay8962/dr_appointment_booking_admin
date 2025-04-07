import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const caltulateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
  };
  const currency = "$";
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const slotDateFormat = (slotDate) => {
    if (!slotDate || typeof slotDate !== "string" || !slotDate.includes("_")) {
      return "Invalid Date";
    }

    const dateArray = slotDate.split("_"); // [day, month, year]

    if (dateArray.length !== 3) return "Invalid Date";

    const day = dateArray[0];
    const month = months[Number(dateArray[1]) - 1]; // Adjust for 0-based index
    const year = dateArray[2];
    return `${day} ${month} ${year}`;
  };
  const value = {
    caltulateAge,
    slotDateFormat,
    currency,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

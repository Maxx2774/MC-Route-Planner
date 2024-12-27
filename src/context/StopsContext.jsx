import { useContext, createContext, useState, ReactNode } from "react";

const StopsContext = createContext();

export function StopsProvider({ children }) {
  const [stops, setStops] = useState([
    {
      order: 2,
      location: "Köpenhamn",
      distance: 649,
      estTime: 409,
    },
    {
      order: 3,
      location: "Hamburg",
      distance: 336,
      estTime: 256,
    },
    {
      order: 4,
      location: "Stuttgart",
      distance: 655,
      estTime: 402,
    },
    {
      order: 5,
      location: "Zürich",
      distance: 218,
      estTime: 139,
    },
  ]);

  const addStop = (stop) => {
    setStops((prev) => [...prev, stop]);
  };

  const removeStop = (index) => {
    setStops((prev) => prev.filter((_, i) => i !== index));
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}min`;
  };

  return (
    <StopsContext.Provider value={{ stops, addStop, removeStop, formatTime }}>
      {children}
    </StopsContext.Provider>
  );
}

export function useStopsContext() {
  const context = useContext(StopsContext);
  if (!context) {
    throw new Error("Error with stops context");
  }
  return context;
}

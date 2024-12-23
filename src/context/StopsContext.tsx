import { useContext, createContext, useState, ReactNode } from "react";

type StopsContextType = {
  stops: Stop[];
  addStop: (stop: Stop) => void;
  removeStop: (index: number) => void;
  formatTime: (minutes: number) => string;
};

type Stop = {
  order: number;
  location: string;
  distance: number;
  estTime: number;
};

const StopsContext = createContext<StopsContextType | null>(null);

type StopsProviderProps = {
  children: ReactNode;
};

export function StopsProvider({ children }: StopsProviderProps) {
  const [stops, setStops] = useState<Stop[]>([
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

  const addStop = (stop: Stop) => {
    setStops((prev) => [...prev, stop]);
  };

  const removeStop = (index: number) => {
    setStops((prev) => prev.filter((_, i) => i !== index));
  };

  const formatTime = (minutes: number): string => {
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

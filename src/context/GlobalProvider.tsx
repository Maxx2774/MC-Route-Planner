import { ReactNode } from "react";
import { StopsProvider } from "./StopsContext";
type GlobalProviderProps = {
  children: ReactNode;
};
export function GlobalProvider({ children }: GlobalProviderProps) {
  return <StopsProvider>{children}</StopsProvider>;
}

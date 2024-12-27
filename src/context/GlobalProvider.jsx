import { StopsProvider } from "./StopsContext";
import { AuthProvider } from "./AuthProvider";

export function GlobalProvider({ children }) {
  return (
    <AuthProvider>
      <StopsProvider>{children}</StopsProvider>
    </AuthProvider>
  );
}

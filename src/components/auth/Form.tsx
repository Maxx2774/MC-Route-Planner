import { useLocation } from "react-router-dom";
export default function Form() {
  const location = useLocation();
  const signIn = location.pathname === "/signin";
  return (
    <section>
      <form action="" className="flex flex-col gap-[10px]">
        <input
          type="text"
          placeholder="Username"
          required
          className="p-[10px] rounded-[6px]"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-[10px] rounded-[6px]"
        />
        <input type="submit" value={signIn ? "Sign in" : "Register"} />
      </form>
    </section>
  );
}

// const validForm = () => {
//   const usernameValid = "";
//   const passwordValid = password.length > 8;
//   return usernameValid && passwordValid;
// };

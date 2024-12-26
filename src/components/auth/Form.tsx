import { useLocation } from "react-router-dom";
export default function Form() {
  const location = useLocation();
  const signIn = location.pathname === "/signin";
  return (
    <section className="flex w-[100%] justify-center">
      <form action="" className="flex items-center flex-col gap-[10px] w-[90%]">
        <input
          type="text"
          placeholder="Username"
          required
          className="p-[10px] rounded-[6px] min-w-[200px] max-w-[300px] w-[100%]"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-[10px] rounded-[6px] min-w-[200px] max-w-[300px] w-[100%]"
        />

        {!signIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="p-[10px] rounded-[6px] min-w-[200px] max-w-[300px] w-[100%]"
          />
        )}
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

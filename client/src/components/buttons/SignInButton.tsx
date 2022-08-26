import { useContext } from "react";
import { AppContext, COLORS } from "../../App";

export default function SignInButton() {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <div>
      <button
        className={`px-8 py-2 ${COLORS[theme].bg_top} rounded-full text-lg font-semibold text-white border-4 border-[#E9FEFF] cursor-default`}
      >
        Sign In
      </button>
    </div>
  );
}

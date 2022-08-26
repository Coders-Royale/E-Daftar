import React, { MouseEventHandler, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, COLORS } from "../../App";

export interface SignInButtonProps {
  text: string;
  toUrl: string;
}

export default function RegistrationButton({ toUrl, text }: SignInButtonProps) {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <div>
      <button
        className={`${COLORS[theme].class} text-white py-2 w-full rounded-lg font-semibold`}
      >
        {text}
      </button>
    </div>
  );
}

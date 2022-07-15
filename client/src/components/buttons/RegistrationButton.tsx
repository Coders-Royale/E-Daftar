import React from "react";
import { useNavigate } from "react-router-dom";

export interface SignInButtonProps {
  text: string;
  toUrl: string;
  validate?: Function;
}

export default function RegistrationButton({
  toUrl: toUrl,
  text: text,
  validate: validate,
}: SignInButtonProps) {
  const navigate = useNavigate();

  function wrapValidate() {
    return validate ? validate() : console.log('nothing');
  }

  return (
    <div>
        <button className="bg-gradient-to-r from-blue-450 to-blue-150 text-white py-2 w-full rounded-lg font-semibold"
        onClick={(e) => {
            wrapValidate() && navigate(`${toUrl}`)
        }}>
          {text}
        </button>
    </div>
  );
}

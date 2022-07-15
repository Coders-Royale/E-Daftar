import React from "react";
import { Link } from "react-router-dom";

export interface SignInButtonProps {
  text: string;
  toUrl: string;
}

export default function RegistrationButton({
  toUrl: toUrl,
  text: text,
}: SignInButtonProps) {
  return (
    <div>
      <Link to={toUrl}>
        <button className="bg-gradient-to-r from-blue-450 to-blue-150 text-white py-2 w-full rounded-lg font-semibold">
          {text}
        </button>
      </Link>
    </div>
  );
}

import { useContext } from "react";
import { AppContext, COLORS } from "../App";

export default function Loader() {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";
  const { theme, setTheme } = useContext(AppContext);

  return (
    <div
      className={`flex items-center justify-center w-full h-screen ${
        theme === "Dark" ? "bg-gray-850" : ""
      }`}
    >
      <div
        className={`flex ${
          theme === "Dark" ? "text-gray-150" : "text-blue-350"
        }`}
      >
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
}

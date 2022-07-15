import SignInButton from "../../components/buttons/SignInButton";
import SideBg from "../../components/SideBg";
import TextField from "@mui/material/TextField";
import RegistrationButton from "../../components/buttons/RegistrationButton";
import RegistrationBackButton from "../../components/buttons/RegistrationBackButton";

const ForgotPassword = () => {
  return (
    <div className="flex gap-32 items-center h-screen px-32 bg-gray-250">
      <div className="w-2/5">
        <SideBg />
      </div>
      <div className="w-3/5 bg-white shadow-xl py-16 px-24 rounded-2xl">
        <SignInButton />
        <p className="mt-8 mb-4 h-5 text-gray-750 font-medium">
          Forgot Password
        </p>
        <TextField label="Email" id="email" fullWidth size="small" />
        <RegistrationBackButton toUrl="/sign-in" />
        <RegistrationButton toUrl="/new-password" text="Reset Password" />
      </div>
    </div>
  );
};

export default ForgotPassword;

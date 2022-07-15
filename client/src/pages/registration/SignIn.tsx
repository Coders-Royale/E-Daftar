import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBg from "../../components/SideBg";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import SignInButton from "../../components/buttons/SignInButton";
import DiveIn from "../../components/buttons/RegistrationButton";

export default function SignIn() {
  const [password, setPassword] = useState("");
  const [empId, setEmpId] = useState("");
  const [role, setRole] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  interface Error { 
   type: string, 
   message: string
  }
  const [errors, setErrors] = useState<Error[]>([]);

  var errLength = 0;

  const validate = () => {
    errLength = 0;
    setErrors([]);

    if(empId === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "employeeId", message: "Employee ID is required" },
      ]);
      errLength++;
    }

    if(role === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "role", message: "Role is required" },
      ]);
      errLength++;
    }

    if (password === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "password", message: "Password is required" },
      ]);
      errLength++;
    }
    if (password.length > 0 && password.length < 8) {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "password", message: "Password must be atleast 8 characters" },
      ]);
      errLength++;
    }
    if (password.length > 0 && password.match(/[a-z]/g) === null) {
      setErrors((errors: Error[]) => [
        ...errors,
        {
          type: "password",
          message: "Password must contain atleast one lowercase letter",
        },
      ]);
      errLength++;
    }
    if (password.length > 0 && password.match(/[A-Z]/g) === null) {
      setErrors((errors: Error[]) => [
        ...errors,
        {
          type: "password",
          message: "Password must contain atleast one uppercase letter",
        },
      ]);
      errLength++;
    }
    if (password.length > 0 && password.match(/[0-9]/g) === null) {
      setErrors((errors: Error[]) => [
        ...errors,
        {
          type: "password",
          message: "Password must contain atleast one number",
        },
      ]);
      errLength++;
    }
    if (
      password.length > 0 &&
      password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) === null
    ) {
      setErrors((errors: Error[]) => [
        ...errors,
        {
          type: "password",
          message: "Password must contain atleast one special character",
        },
      ]);
      errLength++;
    }

    if(errLength == 0)
      return true;

    return false;
  }

  return (
    <div className="flex gap-32 items-center h-screen px-32 bg-gray-250">
      <div className="w-2/5">
        <SideBg />
      </div>
      <div className="w-3/5 bg-white shadow-xl py-16 px-24 rounded-2xl">
        <SignInButton />
        <div className="flex pt-8 gap-4">
          <TextField
            label="Employee ID"
            id="employee-id"
            fullWidth
            size="small"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="select-role-label" size="small">
              Role
            </InputLabel>
            <Select
              id="select-role"
              label="Role"
              size="small"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={"Employee"}>Employee</MenuItem>
              <MenuItem value={"Admin"}>Admin</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="grid grid-cols-2 gap-4">
        <div className="mt-1 mb-1 text-left">
            {errors.length > 0
              ? errors.map((item, index) => {
                if (item.type === "employeeId") {
                  return (
                    <p className="text-red-500 text-xs" key={index}>
                      {item.message}
                    </p>
                  );
                }
              })
              : null}
          </div>
          <div className="mt-1 mb-1 text-left">
            {errors.length > 0
              ? errors.map((item, index) => {
                if (item.type === "role") {
                  return (
                    <p className="text-red-500 text-xs" key={index}>
                      {item.message}
                    </p>
                  );
                }
              })
              : null}
          </div>
        </div>

        <div className="pt-4">
          <FormControl variant="outlined" fullWidth size="small">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div className="mt-1 mb-1 text-left">
            {errors.length > 0
              ? errors.map((item, index) => {
                if (item.type === "password") {
                  return (
                    <p className="text-red-500 text-xs" key={index}>
                      {item.message}
                    </p>
                  );
                }
              })
              : null}
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex flex-row items-center">
            <Checkbox
              size="small"
              value={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <p className="text-gray-450 text-xs">Remember Me</p>
          </div>
          <Link
            to="/forgot-password"
            className="text-gray-450 text-xs pr-2 h-4"
          >
            Forgot Password?
          </Link>
        </div>
        <DiveIn text={"Dive In !!!"} toUrl="/" validate={validate} />
      </div>
    </div>
  );
}

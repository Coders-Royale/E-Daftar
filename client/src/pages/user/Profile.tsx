import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import TextField from "@mui/material/TextField";
import RegistrationButton from "../../components/buttons/RegistrationButton";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import Dp from "../../images/profile_page_dp.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  selected: number;
  setSelected: (selected: number) => void;
}
const Profile = ({ selected, setSelected }: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailId, setEmailId] = useState<string>("");
  const [employeeCode, setEmployeeCode] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [mobileNo, setMobileNo] = useState<string>("");
  const [officeBranch, setOfficeBranch] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [match, setMatch] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const clearInputs = () => {
    (document.getElementById("firstName") as HTMLInputElement)!.value = "";
    (document.getElementById("lastName") as HTMLInputElement)!.value = "";
    (document.getElementById("employeeCode") as HTMLInputElement)!.value = "";
    (document.getElementById("gender") as HTMLInputElement)!.value = "";
    (document.getElementById("dob") as HTMLInputElement)!.value = "";
    (document.getElementById("address") as HTMLInputElement)!.value = "";
    (document.getElementById("emailid") as HTMLInputElement)!.value = "";
    (document.getElementById("mobileno") as HTMLInputElement)!.value = "";
    (document.getElementById("department") as HTMLInputElement)!.value = "";
    (document.getElementById("officeBranch") as HTMLInputElement)!.value = "";
    (document.getElementById("oldPassword") as HTMLInputElement)!.value = "";
    (document.getElementById("newPassword") as HTMLInputElement)!.value = "";
    (document.getElementById("confirmPassword") as HTMLInputElement)!.value =
      "";
  };

  interface Error {
    type: string;
    message: string;
  }
  const [errors, setErrors] = useState<Error[]>([]);

  var errLength = 0;

  const validate = () => {
    errLength = 0;
    setErrors([]);

    if (firstName === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "firstName", message: "First Name is required" },
      ]);
      errLength++;
    }

    if (lastName === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "lastName", message: "Last Name is required" },
      ]);
      errLength++;
    }

    if (emailId === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "emailId", message: "Email is required" },
      ]);
      errLength++;
    }
    if (
      emailId.length > 0 &&
      emailId.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null
    ) {
      setErrors((errors: Error[]) => [
        ...errors,
        {
          type: "emailId",
          message: "Must be a valid email",
        },
      ]);
      errLength++;
    }

    if (mobileNo === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "mobileNo", message: "Mobile No is required" },
      ]);
      errLength++;
    }

    if (employeeCode === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "employeeCode", message: "Employee Code is required" },
      ]);
      errLength++;
    }

    if (gender === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "gender", message: "Gender is required" },
      ]);
      errLength++;
    }

    if (department === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "department", message: "Department is required" },
      ]);
      errLength++;
    }

    if (officeBranch === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "officeBranch", message: "Office Branch is required" },
      ]);
      errLength++;
    }

    if (dob === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "dob", message: "Date of Birth is required" },
      ]);
      errLength++;
    }

    if (address === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "address", message: "Address is required" },
      ]);
      errLength++;
    }

    if (errLength === 0) return true;

    return false;
  };

  const validateNewPassword = (newPassword: string) => {
    if (newPassword.length > 8) {
      setMatch(true);
    }
    if (newPassword.length <= 8) {
      setMatch(false);
    }
    if (newPassword.match(/[A-Z]/)) {
      setUppercase(true);
    }
    if (!newPassword.match(/[A-Z]/)) {
      setUppercase(false);
    }
    if (newPassword.match(/[0-9]/)) {
      setNumber(true);
    }
    if (!newPassword.match(/[0-9]/)) {
      setNumber(false);
    }
    if (newPassword.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
      setSpecial(true);
    }
    if (!newPassword.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
      setSpecial(false);
    }
    if (newPassword.match(/[a-z]/)) {
      setLowercase(true);
    }
    if (!newPassword.match(/[a-z]/)) {
      setLowercase(false);
    }
  };

  useEffect(() => {
    validateNewPassword(newPassword);
  }, [newPassword]);

  return (
    <div className="h-screen flex bg-gray-350 overflow-hidden">
      <div className="w-1/4">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>
      <div className="w-full px-10 overflow-scroll">
        <h1 className="mt-12 mb-4 text-lg font-medium tracking-widest text-black">
          PROFILE
        </h1>

        <div className="flex flex-row gap-6">
          <img src={Dp} alt="profile_dp" className="w-50 h-50" />
          <div className="flex flex-col justify-end">
            <button className="bg-gradient-to-r from-blue-450 to-blue-150 text-white px-4 py-2 mb-3 w-full rounded-lg font-semibold">
              <h1 className="font-medium text-sm text-gray-150">
                <span className="pr-2">
                  <KeyboardTabIcon />
                </span>
                Choose an image
              </h1>
            </button>
            <h1 className="mb-1 text-xs font-medium text-gray-650 tracking-widest">
              Acceptable format .jpg, .png only
            </h1>
            <h1 className="text-xs font-medium text-gray-650 tracking-widest">
              Max. file size is 500Kb and min. file size is 70Kb.
            </h1>
          </div>
        </div>

        <div className="mt-16">
          <h1 className="mt-12 mb-4 text-lg font-medium tracking-widest text-gray-750">
            ACCOUNT INFORMATION
          </h1>

          <div className="mt-6 grid grid-cols-2 gap-20">
            <div>
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  First Name
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="text"
                  placeholder="Enter First Name"
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "firstName") {
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
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Email ID
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="text"
                  placeholder="Enter Email ID"
                  id="emailid"
                  onChange={(e) => setEmailId(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "emailId") {
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
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Employee Code
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="text"
                  placeholder="Enter Employee Code"
                  id="employeeCode"
                  onChange={(e) => setEmployeeCode(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "employeeCode") {
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
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Department
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="text"
                  placeholder="Enter department"
                  id="department"
                  onChange={(e) => setDepartment(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "department") {
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
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Date of Birth
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="date"
                  placeholder=""
                  id="dob"
                  onChange={(e) => setDob(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "dob") {
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
            </div>

            <div>
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Last Name
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="text"
                  placeholder="Enter Last Name"
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "lastName") {
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
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Mobile Number
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="text"
                  placeholder="Enter Mobile Number"
                  id="mobileno"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "mobileNo") {
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
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Gender
                </h1>
                <div className="bg-white shadow-md rounded flex-auto">
                  <FormControl fullWidth>
                    <Select
                      labelId="label-gender"
                      id="gender"
                      value={gender}
                      onChange={handleChange}
                      size="small"
                      className="h-6"
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Transgender">Transgender</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "gender") {
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
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Office Branch
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="text"
                  placeholder="Enter office branch"
                  id="officeBranch"
                  onChange={(e) => setOfficeBranch(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "officeBranch") {
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
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Address
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="text"
                  placeholder="Enter your address"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "address") {
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
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="mt-12 mb-4 text-lg font-medium tracking-widest text-gray-750">
            UPDATE PASSWORD
          </h1>

          <div className="mt-6 grid grid-cols-2 gap-20">
            <div>
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Old Password
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="password"
                  placeholder="Enter old password"
                  id="oldPassword"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "oldPassword") {
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
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  Confirm Password
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="password"
                  placeholder="Confirm password"
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "confirmPassword") {
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
            </div>

            <div>
              <div className="flex flex-row gap-7 items-center mb-4">
                <h1 className="font-normal text-base text-gray-650 w-36">
                  New Password
                </h1>
                <input
                  className={`bg-white rounded drop-shadow pl-4 h-6 flex-auto `}
                  type="password"
                  placeholder="Enter new password"
                  id="newPassword"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="mt-1 mb-1 text-left">
                  {errors.length > 0
                    ? errors.map((item, index) => {
                        if (item.type === "newPassword") {
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
            </div>
          </div>

          <div className="">
            <p
              className={`text-xs italic font-normal ${
                uppercase ? "text-blue-150" : "text-gray-450"
              }`}
            >
              <span className="text-sm">&#9679;</span> Contain at least one
              uppercase
            </p>

            <p
              className={`text-xs italic font-normal ${
                number ? "text-blue-150" : "text-gray-450"
              }`}
            >
              <span className="text-sm">&#9679;</span> Contain at least one
              number
            </p>

            <p
              className={`text-xs italic font-normal ${
                special ? "text-blue-150" : "text-gray-450"
              }`}
            >
              <span className="text-sm">&#9679;</span> Contain at least one
              special character
            </p>

            <p
              className={`text-xs italic font-normal ${
                lowercase ? "text-blue-150" : "text-gray-450"
              }`}
            >
              <span className="text-sm">&#9679;</span> Contain at least one
              lowercase
            </p>

            <p
              className={`text-xs italic font-normal ${
                match ? "text-blue-150" : "text-gray-450"
              }`}
            >
              <span className="text-sm">&#9679;</span> Password should be
              greater than 8 characters
            </p>
          </div>
        </div>

        <div className="pt-16 flex flex-row gap-8 mx-auto w-80 pb-44">
          <div className="flex-auto">
            <RegistrationButton text="Update" toUrl="/" validate={validate} />
          </div>
          <div className="flex-auto">
            <button
              className="bg-white text-blue-250 text-sm py-2 w-full rounded-lg font-medium border-2 border-blue-250"
              onClick={clearInputs}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import RegistrationButton from "../../components/buttons/RegistrationButton";
import TextField from "@mui/material/TextField";
import BottomPic from "../../images/new_employee.svg";

const CreateNewEmployee = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [employeeCode, setEmployeeCode] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const clearInputs = () => {
    (document.getElementById("firstName") as HTMLInputElement)!.value = "";
    (document.getElementById("lastName") as HTMLInputElement)!.value = "";
    (document.getElementById("employeeCode") as HTMLInputElement)!.value = "";
    (document.getElementById("gender") as HTMLInputElement)!.value = "";
    (document.getElementById("dob") as HTMLInputElement)!.value = "";
    (document.getElementById("address") as HTMLInputElement)!.value = "";
  };

  return (
    <div className="h-screen flex bg-gray-350 overflow-hidden">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-full px-10 overflow-scroll">
        <h1 className="mt-12 mx-10 text-lg font-medium tracking-widest">
          CREATE NEW EMPLOYEE
        </h1>

        <div className="pt-12 grid grid-cols-2 gap-20 mx-10">
          <div className="col-span-1">
            <div className="bg-white shadow-md">
              <TextField
                type="text"
                fullWidth
                label="First Name"
                id="firstName"
                size="small"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="bg-white shadow-md mt-11">
              <TextField
                type="text"
                fullWidth
                label="Employee Code"
                id="employeeCode"
                size="small"
                onChange={(e) => setEmployeeCode(e.target.value)}
              />
            </div>
            <div className="bg-white shadow-md mt-11">
              <TextField
                type="text"
                fullWidth
                label="Date of Birth"
                id="dob"
                size="small"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white shadow-md">
              <TextField
                type="text"
                fullWidth
                label="Last Name"
                id="lastName"
                size="small"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="bg-white shadow-md mt-11">
              <TextField
                type="text"
                fullWidth
                label="Gender"
                id="gender"
                size="small"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="bg-white shadow-md mt-11">
              <TextField
                type="text"
                fullWidth
                label="Address"
                id="address"
                size="small"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-row gap-8 mx-auto w-80">
          <div className="flex-auto">
            <RegistrationButton text="Create" toUrl="/" />
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
        <div className="mt-40">
          <img
            src={BottomPic}
            alt="create-new-employee-pic"
            className="w-2/3 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewEmployee;

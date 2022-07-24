import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import RegistrationButton from "../../components/buttons/RegistrationButton";
import TextField from "@mui/material/TextField";
import BottomPic from "../../images/new_employee.svg";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  selected: number;
  setSelected: (selected: number) => void;
}

const CreateNewEmployee = ({ selected, setSelected }: Props) => {
  useEffect(() => {
    setSelected(10);
  }, [setSelected]);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [employeeCode, setEmployeeCode] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [addressLine3, setAddressLine3] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const clearInputs = () => {
    (document.getElementById("firstName") as HTMLInputElement)!.value = "";
    (document.getElementById("lastName") as HTMLInputElement)!.value = "";
    (document.getElementById("employeeCode") as HTMLInputElement)!.value = "";
    (document.getElementById("gender") as HTMLInputElement)!.value = "";
    (document.getElementById("dob") as HTMLInputElement)!.value = "";
    (document.getElementById("addressLine1") as HTMLInputElement)!.value = "";
    (document.getElementById("addressLine2") as HTMLInputElement)!.value = "";
    (document.getElementById("addressLine3") as HTMLInputElement)!.value = "";
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

    if (dob === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "dob", message: "Date of Birth is required" },
      ]);
      errLength++;
    }

    if (addressLine1 === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "addressLine1", message: "Address Line 1 is required" },
      ]);
      errLength++;
    }

    if (addressLine2 === "") {
      setErrors((errors: Error[]) => [
        ...errors,
        { type: "addressLine2", message: "Address Line 2 is required" },
      ]);
      errLength++;
    }

    if (errLength === 0) return true;

    return false;
  };

  return (
    <div className="h-screen flex bg-gray-350 overflow-hidden">
      <div className="w-1/4">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>
      <div className="w-full px-10 overflow-scroll">
        <h1 className="mt-12 mx-10 text-lg font-medium tracking-widest">
          CREATE NEW EMPLOYEE
        </h1>

        <div className="pt-12 grid grid-cols-2 gap-20 mx-10">
          <div className="col-span-1">
            <h1 className="font-normal text-base text-gray-650">First Name</h1>
            <div className="bg-white shadow mt-1 rounded">
              <TextField
                type="text"
                placeholder="John"
                fullWidth
                id="firstName"
                size="small"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
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

            <h1 className="font-normal text-base text-gray-650 pt-4">
              Employee Code
            </h1>
            <div className="bg-white shadow mt-1 rounded">
              <TextField
                type="text"
                placeholder="XXX-XXX"
                fullWidth
                id="employeeCode"
                size="small"
                onChange={(e) => setEmployeeCode(e.target.value)}
              />
            </div>
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

            <h1 className="font-normal text-base text-gray-650 pt-4">
              Date of Birth
            </h1>
            <div className="bg-white shadow mt-1 rounded">
              <TextField
                type="date"
                placeholder=""
                fullWidth
                id="dob"
                size="small"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
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

            <h1 className="font-normal text-base text-gray-650 pt-4">
              Address Line 2
            </h1>
            <div className="bg-white shadow mt-1 rounded">
              <TextField
                type="text"
                placeholder="Street No. / Sector No."
                fullWidth
                id="addressLine2"
                size="small"
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </div>
            <div className="mt-1 mb-1 text-left">
              {errors.length > 0
                ? errors.map((item, index) => {
                    if (item.type === "addressLine2") {
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

          <div className="col-span-1">
            <h1 className="font-normal text-base text-gray-650">Last Name</h1>
            <div className="bg-white shadow mt-1 rounded">
              <TextField
                type="text"
                placeholder="Doe"
                fullWidth
                id="lastName"
                size="small"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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

            <h1 className="font-normal text-base text-gray-650 pt-4">Gender</h1>
            <div className="bg-white shadow mt-1 rounded">
              <FormControl fullWidth>
                <Select
                  labelId="label-gender"
                  id="gender"
                  value={gender}
                  onChange={handleChange}
                  size="small"
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

            <h1 className="font-normal text-base text-gray-650 pt-4">
              Address Line 1
            </h1>
            <div className="bg-white shadow mt-1 rounded">
              <TextField
                type="text"
                placeholder="House No. / Flat No."
                fullWidth
                id="addressLine1"
                size="small"
                onChange={(e) => setAddressLine1(e.target.value)}
              />
            </div>
            <div className="mt-1 mb-1 text-left">
              {errors.length > 0
                ? errors.map((item, index) => {
                    if (item.type === "addressLine1") {
                      return (
                        <p className="text-red-500 text-xs" key={index}>
                          {item.message}
                        </p>
                      );
                    }
                  })
                : null}
            </div>

            <h1 className="font-normal text-base text-gray-650 pt-4">
              Address Line 3
            </h1>
            <div className="bg-white shadow mt-1 rounded">
              <TextField
                type="text"
                placeholder="City / State"
                fullWidth
                id="addressLine3"
                size="small"
                onChange={(e) => setAddressLine3(e.target.value)}
              />
            </div>
            <div className="mt-1 mb-1 text-left">
              {errors.length > 0
                ? errors.map((item, index) => {
                    if (item.type === "addressLine3") {
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

        <div className="pt-12 flex flex-row gap-8 mx-auto w-80">
          <div className="flex-auto">
            <RegistrationButton text="Create" toUrl="/" validate={validate} />
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
            className="w-2/3 mx-auto pb-12"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewEmployee;

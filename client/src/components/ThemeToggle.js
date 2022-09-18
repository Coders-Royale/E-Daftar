import React from "react";
// import { FaSun, FaMoon } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Menu, Transition, Switch } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { AppContext, COLORS } from "../App";

const Toggle = ({ color, setColor, setIsEnabled, isEnabled }) => {
  const { theme, setTheme } = React.useContext(AppContext);

  const refClick = useRef(null);

  return (
  	<div className="relative z-50">
    <div className="flex items-center gap-4">
      <div className="flex gap-2 items-center">
        <p className="text-sm text-gray-600">Normal</p>
        <Switch
          checked={isEnabled}
          onChange={() => setIsEnabled(!isEnabled)}
          ref={refClick}
          className={`${isEnabled ? "bg-blue-900" : "bg-blue-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${isEnabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <p className="text-sm text-gray-600">Blind</p>
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Colors
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {Object.keys(COLORS).map((color, index) => {
                return (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => {
                          setTheme(color);
                        }}
                      >
                        <div
                          className={`w-6 h-6 bg-gradient-to-br ${COLORS[color].gr_top} ${COLORS[color].gr_bot} rounded-full`}
                        ></div>
                        {COLORS[color].name}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </div>
  );
};

export default Toggle;

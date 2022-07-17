import React from "react";
import Sidebar from "../../components/Sidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Total",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Approved",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Pending",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(255, 205, 86)",
      backgroundColor: "rgba(255, 205, 86, 0.5)",
    },
    {
      label: "Rejected",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(225, 19, 32)",
      backgroundColor: "rgba(225, 19, 32, 0.5)",
    },
  ],
};

interface PeopleInterface {
  name: string;
  empCode: string;
  image: string;
  dep: string;
}

const People: PeopleInterface[] = [
  {
    name: "John Doe",
    empCode: "EMP001",
    image: "https://via.placeholder.com/150",
    dep: "IT",
  },
  {
    name: "Jane Doe",
    empCode: "EMP002",
    image: "https://via.placeholder.com/150",
    dep: "IT",
  },
  {
    name: "John Doe",
    empCode: "EMP003",
    image: "https://via.placeholder.com/150",
    dep: "IT",
  },
];

export default function dashboard() {
  return (
    <div className="h-screen flex bg-gray-350 overflow-hidden">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-full py-12 px-10">
        <div>
          <p className="text-2xl font-medium text-gray-750">
            <span className="italic font-light text-gray-550">Hello,</span>{" "}
            Human Resource Department Admin
          </p>
          <p className="uppercase tracking-widest font-medium text-lg text-gray-650">
            Statistical Analysis
          </p>
        </div>
        <div className="mt-8 flex items-stretch justify-between gap-8">
          <div className="bg-white shadow-xl px-8 py-6 w-2/3 rounded-lg">
            <Line options={options} data={data} />
          </div>
          <div className="w-1/3 bg-white shadow-xl rounded-lg px-8 py-6">
            <p className="uppercase tracking-widest font-medium text-gray-650">
              Top Performers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

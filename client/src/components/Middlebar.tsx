import React, { useState } from "react";

import MiddleBarComponent from '../components/MiddleBarComponent';
import SearchIcon from '@mui/icons-material/Search';
import Man from "../images/man.svg";

interface MiddleBarData {
  image: string;
  title: string;
  name: string;
  time: number;
  content: string;
  attachment: boolean;
}

interface Props {
  displayRooms?: any[];
  selectedMid: number;
  setSelectedMid: (selectedMid: number) => void;
}

const MiddleBarContent: MiddleBarData[] = [
  {
    image: Man,
    title: "Leave Application",
    name: "John Doe",
    time: 0,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit iaculis gravida amet, ma ... ",
    attachment: false,
  },
  {
    image: Man,
    title: "Leave Application",
    name: "John Doe",
    time: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit iaculis gravida amet, ma ... ",
    attachment: true,
  },
  {
    image: Man,
    title: "Leave Application",
    name: "John Doe",
    time: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit iaculis gravida amet, ma ... ",
    attachment: true,
  },
  {
    image: Man,
    title: "Leave Application",
    name: "John Doe",
    time: 0,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit iaculis gravida amet, ma ... ",
    attachment: false,
  },
];

const findName = (room: any) => {
  if(room.participants) {
    let participant;
    [participant] = room.participants.slice(-1);
    return participant.info.name;
  }
  else
    return room.conversationName;
}

const findTime = (time: Date) => {
  const time1: number = new Date().getTime();
  const time2: number = new Date(time).getTime();

  const diff: number = time1 - time2;
  return diff;
}

const MiddleBar = ({ selectedMid, setSelectedMid, displayRooms }: Props) => {
  const [selected, setSelected] = useState<Number>(0);
  console.log(displayRooms);

  return (
    <div className="px-10 py-12 bg-gray-350 min-h-screen flex flex-col justify-start">
      <div>
        <div className="flex gap-4 items-center rounded-lg mb-6">
          <div className="bg-white-gray-150 border border-gray-450 rounded-lg h-11 flex flex-row w-full">
            <div className='pl-4 py-2'>
              <SearchIcon fontSize="medium" className='text-gray-750' />
            </div>
            <input className='bg-gray-100 h-8 my-auto mx-4 px-2 text-sm w-full' placeholder='Search Here'></input>
          </div>
        </div>
      </div>

      <div>
        {displayRooms ? displayRooms.map((item, index) => index === selected ?
          <div key={index} onClick={() => setSelected(index)}><MiddleBarComponent image={Man} title={item.conversationName} name={findName(item)} time={findTime(item.updatedAt)} content={`Document: ${item.documentId}`} attachment={true} selected={true} /></div> :
          <div key={index} onClick={() => setSelected(index)}><MiddleBarComponent image={Man} title={item.conversationName} name={findName(item)} time={findTime(item.updatedAt)} content={`Document: ${item.documentId}`} attachment={true} selected={false} /></div>
        ) :
        MiddleBarContent.map((item, index) => index === selected ?
          <div key={index} onClick={() => setSelected(index)}><MiddleBarComponent image={item.image} title={item.title} name={item.name} time={item.time} content={item.content} attachment={item.attachment} selected={true} /></div> :
          <div key={index} onClick={() => setSelected(index)}><MiddleBarComponent image={item.image} title={item.title} name={item.name} time={item.time} content={item.content} attachment={item.attachment} selected={false} /></div>
        )}
      </div>

    </div>
  );
}

export default MiddleBar;

// conversationName
// updatedAt
// documentId

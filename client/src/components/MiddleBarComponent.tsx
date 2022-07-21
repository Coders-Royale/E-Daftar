import React, { } from "react";

import PaperClip from '../images/icons/middlebar_component_attach.svg';

export interface MiddleBarComponentProps {
  image: string;
  title: string;
  name: string;
  time: string;
  content: string;
  attachment: boolean; // make functionality for this.
  selected: boolean;
}

export default function Sidebar({ image, title, name, time, content, attachment, selected }: MiddleBarComponentProps) {

  return (
    <div className={`bg-white rounded-lg drop-shadow-sm px-4 py-4 mb-4 hover:cursor-pointer ${selected ? 'border-l-4 border-blue-450 shadow-blue-300 shadow-md' : ''} `}>
      <div className="flex flex-row justify-between">
        <div className='flex flex-row gap-2'>
          <img
            src={image}
            alt="man"
            className="w-10 h-10 rounded-full"
          />
          <div className=''>
            <h1 className='text-sm font-bold text-gray-750'>{title}<span className={`${attachment ? 'visible' : 'hidden'} float-right`}><img src={PaperClip} alt='attach-icon' className='pl-2 pt-1' /></span></h1>
            <h1 className='text-sm font-normal text-gray-750'>{name}</h1>
          </div>
        </div>

        <h1 className='text-sm font-normal text-gray-550'>{time}</h1>
      </div>

      <h1 className='my-1 px-7 pl-12 text-sm font-normal text-gray-550'>
        {content}
      </h1>
    </div>
  )
}

/* eslint-disable react/prop-types */
import { useState } from 'react';
const Expandable = (props) => {
    const maxChar = 420;
    let text = props.desc.substring(0, maxChar) + ' '+ '...';
    let [expanded, setExpanded] = useState(true);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return (
      <>
        <div className='my-10'>
          <div className='bg-[#F9ECFF] rounded-xl'>
            <div className='w-[350px] md:w-[600px] flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4'>
              <img src={props.img} className='rounded-xl' />
              <h3 className='mt-6 font-semibold text-3xl text-slate-700 underline decoration-wavy decoration-cyan-400'>
                {props.title}
              </h3>

              <div className='my-7 text-gray-600 text-justify'>
                <p className='font-light text-sm leading-6 md:leading-7 md:text-base '>
                  {expanded ? text : props.desc}
                </p>
                <button
                  onClick={toggleExpanded}
                  className='mt-3 font-medium text-pink-500'
                >
                  {expanded ? 'Read More' : 'Read Less'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
};

export default Expandable;
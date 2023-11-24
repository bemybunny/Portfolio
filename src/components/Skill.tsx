import React from 'react'

const Skill=(props:{image:string,percent:string})=>{
    return (
        <div className="group relative flex cursor-pointer">
            <img src={props.image} alt="" className="rounded-full border border-gray-500 object-cover w-24 h-24 
            filter group-hover:grayscale transition duration-300 ease-in-out hover:w-24 h-24 "/>
            <div className="absolute opacity-0 group-hover:opacity-80 
            transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 
            rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">{props.percent}%</p>
                </div>
            </div>
        </div>
    );
}
export default Skill;


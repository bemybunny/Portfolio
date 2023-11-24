"use client"
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:leenagupta993@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col justify-center items-center text-center max-w-7xl px-10 mx-auto space-y-4">
       <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Conatact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">leenagupta993@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">MNIT JAIPUR</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input className="contactInput" {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input className="contactInput" {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input className="contactInput" {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
          <textarea className="contactInput" {...register('message')} placeholder="Message" className="contactInput" />
          <button type="submit" className="bg-[#F7AB0A] py-4 px-8 rounded-md text-black font-bold">Submit</button>
        </form>  
      </div>
    </div>
  );
}

export default Contact;

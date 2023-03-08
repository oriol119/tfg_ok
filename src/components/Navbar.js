import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.jpg"
import { Icon } from '@iconify/react'


export default function Navbar() {

    const navigate = useNavigate();

    const gotoExplore = () => {
        navigate("/explore");
      };

    const gotoHome = () => {
        navigate("/");
    };

    const gotoCreate = () => {
        navigate("/create")
    }
    
    return (
        <header className="flex bg-white flex-row justify-between fixed top-0 px-5 py-5 w-full items-center z-10 border-b b-gray-200 h-[81px]">
           
                <div className="flex cursor-pointer">
                    <img src={logo} href="/" onClick={gotoHome} alt="ZodiacLogo" className="w-[90px] "></img>
                </div>
                <div className="flex flex-row gap-12 place-items-center  ">
                    <div >
                        <button className="text-xl text-black hover:text-green-600 hover:-translate-y-1 " onClick={gotoExplore}> Explore </button>
                    </div>
                    <div>
                        <button className="text-xl text-black hover:text-green-600 hover:-translate-y-1 " onClick={gotoCreate}> Contact </button>
                    </div>
                    

                </div>

                <div className="flex mr-5 w-auto ">
                    <button className="flex w-full text-xl text-black p-2 w-auto border-2 hover:border-green-600 hover:text-green-600"> LOGIN / REGISTER </button>
                </div>
        

        </header>
    );
}
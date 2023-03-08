import React from "react";
import { useRouterNavigation } from "../hooks/useRouterNavigation";
export default function Home() {
    const {gotoExplore, gotoCreate} = useRouterNavigation();
    
    return (
   
        <div className="absolute flex mt-[81px] w-full  ">
            <div className="w-screen h-full m-0 p-0 b-0 dark:bg-dark-1">
                <section className="flex flex-col-reverse lg:flex-row items-center justify-center w-full h-full gap-10 py-20 px-10">
                <div className="flex flex-col items-center justify-center w-full h-auto ">
                    <h1 className="flex text-2xl leading-normal sm:text-4xl pb-4 md:pb-7 xl:text-6xl xl:p-10 ">
                    <b>SPORT MATES</b>
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl p-0 dark:text-white  xl:p-10 text-justify">
                    Selecciona el deporte que quieres practicar 
                    </p>
                    <div className="flex flex-wrap gap-10 p-10 items-center justify-center">
                    <button>BOTON</button>
                    </div>
                </div>
                <div className="flex items-center w-full justify-center  ">
                    <video controls autoplay >
                    <source src="" type="video/mp4" controls></source>
                    </video>
                </div>
                </section>
            
            </div>
        </div>  
    );
  }
  
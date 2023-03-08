import React from 'react'
import { Icon } from '@iconify/react'
import { useFetchEvents } from '../hooks/useFetchEvents'


export default function Explore() {

    const { events, isLoading, isError, error } = useFetchEvents()
    if (isLoading) return <h1>Loading...</h1>
    return (
        <div className="absolute flex mt-[81px] w-full h-full">
            <div className="flex flex-row items-center w-full h-full ">

                <div className='flex flex-col w-1/5 h-full border-2 gap-4'>
                    
                    <div className='flex w-full p-4 justify-center'>
                        <a className='flex text-xl'> <b>FILTERS</b></a>
                    </div>

                    <div className='flex flex-col p-4 '>
                        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>Time</option>
                            <option>Distance</option>
                            <option>Price</option>
                        </select>
                    </div>

                    <div className='flex w-full p-4 justify-center'>
                        <a className='flex '> <b>FILTERS</b></a>
                    </div>
                </div>


                <div className="flex flex-col items-center w-4/5 h-full">
                    <div className="flex items-center justify-center p-4">
                        
                        <div className="flex border-2 rounded">
                            <input type="text" className="px-4 py-2 w-60" placeholder="Search..."/>
                            <button className="flex items-center justify-center px-4 border-l">
                                <Icon icon="ant-design:search-outlined" />
                            </button>
                        </div>
              
                        <div className='flex flex-col p-4 '>
                            <a className='mb-2'>Order by:</a>
                            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                <option>Time</option>
                                <option>Distance</option>
                                <option>Price</option>
                            </select>
                        </div>

                    </div>
                    
                    <div>
                        {JSON.stringify(
                            events
                        )}
                    </div>
                    <div>
              
                    </div>

                </div>

   
            </div>
        </div>  
    )
}
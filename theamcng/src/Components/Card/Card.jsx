 import React from 'react'
import img from '../../assets/vikas.png'


export default function Card() {

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className=" p-1 ml-7 pt-4  h-[70%] w-[80%] rounded-t-lg" src={img} alt="img" />
            </a>
            <div className="px-5 pb-3">
                <a href="/">
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    As a React.js learner, today I am learning about the "Context API." It is a complicated and confusing topic that took me three days to understand. After facing many errors, I finally learned it very thoroughly and smartly. 
                    </h5>
                </a>
                
                <div className="flex items-center  pt-2 justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );

 
   
}

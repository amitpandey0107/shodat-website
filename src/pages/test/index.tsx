import React, { useState, useEffect, useRef } from 'react';
export default function Test() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        let interval:any;
        if(isRunning) {
            interval = setInterval(()=>{
                setTime((count)=>count+10)
            }, 10)
        } else if(!isRunning) {
            clearInterval(interval)
        }
        return() => clearInterval(interval)
    }, [isRunning])

    console.log({
        time:("0"+Math.floor((time / 10) % 100)).slice(-2)
    })

    return (
        <>
            <div className='container p-8 flex flex-wrap flex-col justify-center items-start'>
                <div className="relative mb-8">
                    <span className='font-bold text-8xl'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
                    <span className='font-bold text-8xl'>:</span>
                    <span className='font-bold text-8xl'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                    <span className='font-bold text-8xl'>:</span>
                    <span className='font-bold text-8xl'>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>

                <div className='relative'>
                    <button
                        className='bg-blue-700 h-12 w-28 rounded-lg uppercase text-white mr-5'
                        onClick={() => setIsRunning(true)}
                    >
                        start
                    </button>

                    <button
                        className='bg-red-500 h-12 w-28 rounded-lg uppercase text-white mr-5'
                        onClick={() => setIsRunning(false)}
                    >
                        Stop
                    </button>

                    <button
                        className='bg-lime-700 h-12 w-28 rounded-lg uppercase text-white'
                        onClick={() => setTime(0)}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}
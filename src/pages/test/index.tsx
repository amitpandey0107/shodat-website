import React, { useState, useEffect } from "react";
export default function Test() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval: any;
        if (running) {
            interval = setInterval(() => {
                setTime((counter) => counter + 10)
            }, 10)
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running])
    return (

        <div className="container">
            <div className="flex justify-center items-center flex-wrap flex-col pt-10">
                <div className="relative mb-10">
                    <span className="text-8xl font-bold">
                        {
                            ("0" + Math.floor((time / 60000) % 60)).slice(-2)
                        }
                    </span>
                    <span className="text-8xl font-bold">:</span>
                    <span className="text-8xl font-bold">
                        {
                            ("0" + Math.floor((time / 1000) % 60)).slice(-2)
                        }
                    </span>
                    <span className="text-8xl font-bold">:</span>
                    <span className="text-8xl font-bold">
                        {
                            ("0" + Math.floor((time / 10) % 100)).slice(-2)
                        }

                    </span>
                </div>
                <div className="relative">
                    <button className="bg-blue-500 text-white h-12 w-28 rounded text-xl mr-4 hover:bg-blue-600" onClick={() => setRunning(true)}>Start</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white h-12 w-28 rounded text-xl mr-4" onClick={() => setRunning(false)}>Stop</button>
                    <button className="bg-lime-500 hover:bg-lime-600 text-white h-12 w-28 rounded text-xl" onClick={() => setTime(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}
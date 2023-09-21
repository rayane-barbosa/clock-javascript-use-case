"use client";
import React, { useState } from "react";

export default function Counter(){
    const [time, setTime] = useState(new Date());

    const updateClock = () => setTime(new Date());


    setTimeout(() => { updateClock() }, 1000);


    return <>{time.toLocaleTimeString()}</>;
}

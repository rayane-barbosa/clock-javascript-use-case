"use client";
import React, { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(new Date());

    setTimeout(() => { setCount(new Date()) }, 1000);


    return <>{count.toTimeString()}</>;
}

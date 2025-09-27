"use client";

import { Button } from "@/components/ui/button";
import { Fragment, useState } from "react";

export default function ComponentStates() {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <div className="text-2xl py-4">Component States</div>
            <div className="flex flex-col items-center gap-4">
                <div className="text-2xl py-4">Count is: {count} </div>
                <div className="flex gap-2">
                    <Button onClick={() => setCount(count + 1)}>+ Increment</Button>
                    <Button onClick={() => setCount(count - 1)}>- Decrement</Button>
                    <Button onClick={() => setCount(0)}>Reset</Button>
                </div>
            </div>
        </>
    );
}

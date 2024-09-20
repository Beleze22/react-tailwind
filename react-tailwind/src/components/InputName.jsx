"use client"
import { useState } from "react"
import Input from "./Input"

export default function InputName() {
    const [userInputParent, setUserInputParent] = useState("");

    const inputHandler = (userInput) => {
        setUserInputParent(userInput)
    }

    return (
        <>
            <Input onType={inputHandler}/>
            <p className="h-10 w-40 border-solid border-2 border-red-400">{userInputParent}</p>
        </>
    )
}
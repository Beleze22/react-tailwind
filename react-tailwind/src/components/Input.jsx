"use client"

export default function Input(props) {
    return (
        <>
            <input type="text" name="teste" onChange={(e) => props.onType(e.target.value)}/>
        </>
    )
}
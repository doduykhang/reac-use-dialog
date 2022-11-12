import React, { useState } from "react"
import { useModal } from "./useModal"

interface props {
	node: React.ReactNode
}

export const TestButton:React.FC<props> = ({ node }) => {
	const [open, setOpen] = useState(false)
	const { openModal, closeModal, isOpen } = useModal()	

	const onClick = () =>{
		isOpen ? closeModal() : openModal(node)
	}

	const testBinding = () =>{
		setOpen((old)=>!old)
	}

	return (
	<>
		<button onClick={onClick}>click</button>
		<button onClick={testBinding}>testBinding</button>
		<div>{isOpen ?  "true" : "false"}</div>
		<div>{open ?  "TRUE" : "FALSE"}</div> </>
	) 
}


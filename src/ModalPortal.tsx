import { useContext } from "react"
import { createPortal } from "react-dom"
import { ModalContext } from "./ModalContext"

const body = document.getElementsByTagName("body")[0]

export const ModalPortal = () =>{	
	const modals = useContext(ModalContext)	

	if (!modals) 
		return createPortal("test", body)

	return createPortal(modals.modals, body)	
}

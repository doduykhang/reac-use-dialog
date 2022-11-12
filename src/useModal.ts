import { useContext, useEffect, useState } from "react"
import { ModalContext } from "./ModalContext"


export const useModal = (value?: boolean, initRef?:React.ReactNode) => {
	const [ref, setRef] = useState<React.ReactNode | undefined>(initRef)
	const [isOpen, setIsOpen] = useState(false)
	const modalContext = useContext(ModalContext)

	const onCloseModal = (node: React.ReactNode) => {
		setIsOpen(false)	
		modalContext?.closeModal(node)
	}

	const onOpenModal = (node: React.ReactNode) => {
		setIsOpen(true)	
		modalContext?.createModal(node)
	}

	useEffect(()=>{
		if(!initRef) return
		value ? onCloseModal(ref) : onOpenModal(ref)
	},[value])

	useEffect(()=>{
		return () =>{
			modalContext?.closeModal(ref)
		}
	},[])

	const openModal = (node: React.ReactNode) => {
		if(!ref && value === undefined) {
			setRef(node)
			onOpenModal(node)
		}
	}

	const closeModal = () => {
		if(ref && value === undefined) {
			onCloseModal(ref)
			setRef(undefined)
		}
	}

	return {
		openModal,
		closeModal,
		isOpen
	}
}

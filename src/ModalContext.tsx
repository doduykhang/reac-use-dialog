import { createContext, useState } from "react"


interface contextProp {
	modals: React.ReactNode[],
	createModal: (node: React.ReactNode) => void
	closeModal: (node: React.ReactNode) => void
}

export const ModalContext = createContext<contextProp | undefined>(undefined)


export const ModalProvider = ({children}: {children: React.ReactNode}) => {
	const [nodes, setNodes] = useState<React.ReactNode[]>([])

	const createModal = (node: React.ReactNode) => {
		console.log("create modal")
		setNodes((old)=>[...old, node])	
	}

	const handleClose = (node: React.ReactNode) => {
		setNodes((old)=>old.filter(n => n !== node))
	}

	return (
		<ModalContext.Provider value={{modals: nodes, createModal, closeModal: handleClose}}>
			{children}	
		</ModalContext.Provider>
	)
}

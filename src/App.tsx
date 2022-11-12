import { useState } from 'react'
import { ModalProvider } from './ModalContext'
import { ModalPortal } from './ModalPortal'
import { TestButton } from './TestButton'


function App() {

	const [open, setOpen] = useState(false)
	
	const test = () =>{
		setOpen(old => {
			return !old
		})
	}

  	return (
		<ModalProvider>
    			<div className="">
				<ModalPortal/>
				{open && <TestButton node={"test 1"}/>}
				<button onClick={test}>toggle set open</button>	

    			</div>
		</ModalProvider>
  	)
}

export default App

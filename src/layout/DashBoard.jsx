import { Button } from '@mui/material'
import React from 'react'
import Copyright from '../components/pure/layout/copyright'

import {
	useNavigate,
} from 'react-router-dom'


const DashBoard = () => {
	const navigator = useNavigate()

	const logout = () => {
		navigator('/login')
	}

	return (
		<div>
			<Button variant='contained' onClick={ logout }>
				Logout
			</Button>
			<Copyright />
		</div>
	)
}

export default DashBoard

import React from 'react'

// Material UI Components
import {
	Link,
	Typography,
} from '@mui/material'

const Copyright = () => {
	return (
		<Typography variant='body2' color='GrayText' align='center' >
			{ 'Copyright ©' }
			<Link color='inherit' href='https://open-bootcamp.com'>
				Open Bootcamp
			</Link>
			{ ' ' }
			{ new Date().getFullYear() }
		</Typography>
	)
}

export default Copyright

import React from 'react'
import PropTypes from 'prop-types'

import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material'

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	faCog,
} from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom'

const Menu = ({ list }) => {
	const navigatetor = useNavigate()

	const navigateTo = (path) => {
		navigatetor(path, { replace: true })
	}

	const getIcon = (icon) => {
		switch (icon) {
			case 'home':
				return faHome
			case 'settings':
				return faCog
			default:
				return faHome
		}
	}

	return (
		<List>
			{
				list.map(
					( { text, path, icon }, index ) =>
						(
							<ListItem key={ index } onClick={ () => navigateTo(path) }>
								<ListItemIcon>
									<FontAwesomeIcon icon={ getIcon(icon) } />
								</ListItemIcon>
								<ListItemText primary={ text } />
							</ListItem>
						)
				)
			}
		</List>
	)
}

Menu.propTypes = {
	list: PropTypes.array.isRequired
}

export default Menu

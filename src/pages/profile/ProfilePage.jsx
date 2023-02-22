import React from 'react'
import PropTypes from 'prop-types'


import { User } from '../../models/user.class'


const ProfilePage = ({ user }) => {
	return (
		<div>
			<h1>Your Profile</h1>
			<p>{ user.username }</p>
		</div>
	)
}

ProfilePage.propTypes = {
	user: PropTypes.instanceOf(User).isRequired,
}

export default ProfilePage

import { ROLES } from './roles.enum'

export class User {
	constructor(username, email, password, role = ROLES.USER) {
		this.username = username
		this.email = email
		this.password = password
		this.role = role
	}
}

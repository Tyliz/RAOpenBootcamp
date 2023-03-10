import React, {
	useEffect,
	useState,
} from 'react'
import {
	Link,
	useSearchParams
} from 'react-router-dom'

import { getAllPagedUsers } from '../../services/FetchService'
import Pagination from '../partials/Pagination'


const FetchExample = () => {
	const [searchParams, setSearchParams] = useSearchParams({})
	// const searchParams = new URLSearchParams(document.location.search)

	const [lstUser, setLstUser] = useState([])
	const [actualPage, setActualPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(0)
	const [totalItems, setTotalItems] = useState(0)

	useEffect(() => {
		obtainUsers()
	}, [])


	const changePage = async (page) => {
		const search = {
			'page': page
		}
		setSearchParams(search)
		await obtainUsers(page)
	}


	const obtainUsers = async (page = 0) => {
		if (page == 0 && searchParams.get('page')) {
			page = parseInt(searchParams.get('page'))
		}
		await getAllPagedUsers(page)
			.then((response) => {
				setActualPage(response.page)
				setItemsPerPage(response.per_page)
				setTotalItems(response.total)
				setTotalPages(response.total_pages)
				setLstUser(response.data)
			})
			.catch((reason) => {
				alert(`Error while retreiving the users: ${reason}`)
			})
			.finally(() => {
				console.log('Ended obtain users:')
				console.table(lstUser)
			})
	}

	return (
		<div className='app-layout'>
			<h2>
				Users:
			</h2>
			<div className='list-cards'>
				{
					lstUser.map((user, index) => (
						<div className='card-user card-user--avatar' key={ index }>
							<div className='card-user__avatar'>
								<img src={ user.avatar } />
							</div>
							<div className='card-user__data'>
								<span><b>Email:</b> {user.email}</span>
								<span><b>Name:</b> {user.first_name} {user.last_name}</span>
							</div>
							<div className='card-user__options'>
								<Link className='btn' to={ `/User/${user.id}` }>
									Watch User
								</Link>
							</div>
						</div>
					))
				}
			</div>
			{
				totalPages > 1 ?
					(<Pagination
						actualPage={ actualPage }
						changePage={ changePage }
						totalPages={ totalPages }
						toLink='/'
						itemsName='users'
						itemsPerPage={ itemsPerPage }
						totalItems={ totalItems }
					/>) : null
			}
		</div>
	)
}

export default FetchExample

import React, {
	useEffect,
	useState,
} from 'react'
import PropTypes from 'prop-types'
import {
	faAnglesLeft,
	faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const Pagination = ({ actualPage, totalPages, toLink, changePage, itemsName, itemsPerPage, totalItems }) => {

	const [lstPage, setLstPage] = useState([])

	useEffect(() => {
		paginationRange()
	}, [])

	const infoItems = () => {
		if (itemsName && itemsPerPage && totalItems) {
			return (
				<p className='info-items'>
					Showing <b>{ itemsPerPage } { itemsName }</b> of <b>{ totalItems }</b>
				</p>
			)
		}
	}

	const paginationRange = () => {
		let pageInit = 0
		let pageEnd = 0
		const pages = []

		if (totalPages > 10) {
			if ((actualPage > 5) && (actualPage + 4 < totalPages)) {
				pageInit = actualPage - 4
				pageEnd = actualPage + 4
			} else if(actualPage <= 5) {
				pageInit = 1
				pageEnd = 10
			} else {
				pageInit = totalPages - 9
				pageEnd = totalPages
			}
		} else {
			pageInit = 1
			pageEnd = totalPages
		}

		for (let i = pageInit; i <= pageEnd; i++) {
			pages.push(i)
		}
		setLstPage(pages)
	}

	const firstPage = () => {
		if (actualPage > 5 && totalPages > 10) {
			return (<Link className='btn-page' to={ toLink }>
				<FontAwesomeIcon icon={ faAnglesLeft } /> First
			</Link>)
		}
	}

	const lastPage = () => {
		if (actualPage < totalPages && totalPages > 10) {
			return (<Link className='btn-page' to={ toLink + `?page=${totalPages}` } onClick={ () => changePage(totalPages) }>
				Last <FontAwesomeIcon icon={ faAnglesRight } />
			</Link>)
		}
	}

	return (
		<div>
			{ infoItems() }
			<div className='paginator'>
				{ firstPage() }
				{
					lstPage.map((page, index) =>
						page !== actualPage ? (
							<Link key={ index } className='btn-page' to={ toLink + (page > 1 ? `?page=${page}` : '') } onClick={ () => changePage(page) }>
								{ page }
							</Link>
						) : (
							<span key={ index } className='btn-page actual'>
								{ page }
							</span>
						)
					)
				}
				{ lastPage() }
			</div>
		</div>
	)
}


Pagination.propTypes = {
	actualPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	toLink: PropTypes.string.isRequired,
	changePage: PropTypes.func.isRequired,
	itemsName: PropTypes.string,
	itemsPerPage: PropTypes.number,
	totalItems: PropTypes.number,
}


export default Pagination

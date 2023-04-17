import React, {
	useState,
} from 'react'
import { generateNewJoke } from '../../services/ChuckService'

import {
	Button,
	IconButton,
} from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faRotateRight,
	faThumbsDown,
	faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import {
	faThumbsDown as faRegularThumbsDown,
	faThumbsUp as faRegularThumbsUp,
} from '@fortawesome/free-regular-svg-icons'


const ChuckJokes = () => {
	const [lstJokes, setLstJokes] = useState([])

	const [jokesLiked, setJokesLiked] = useState(0)

	const [jokesDisliked, setJokesDisliked] = useState(0)

	const generateJoke = async () => {
		await generateNewJoke()
			.then((response) => {
				setLstJokes([
					...lstJokes,
					{
						id: response.data.id,
						text: response.data.value,
						reaction: 0,
					},
				])
			})
			.catch((error) => {
				console.log('error', error)
			})
			.finally(() => {
			})
	}

	const changeReaction = (id, reaction) => {
		const joke = lstJokes.find(joke => joke.id == id)
		const index = lstJokes.indexOf(joke)
		const lstTmpJokes = [...lstJokes]
		if (joke.reaction > 0) {
			if (joke.reaction === reaction) {
				lstTmpJokes[index].reaction = 0
			} else {
				lstTmpJokes[index].reaction = reaction
			}
		} else {
			lstTmpJokes[index].reaction = reaction
		}
		setJokesLiked(lstTmpJokes.filter(joke => joke.reaction == 1).length)
		setJokesDisliked(lstTmpJokes.filter(joke => joke.reaction == 2).length)
		setLstJokes(lstTmpJokes)
	}

	return (
		<div className='content'>
			<h1 className='title'>List of Jokes</h1>
			<div>Jokes liked: {jokesLiked}</div>
			<div>Jokes disliked: {jokesDisliked}</div>
			<div>
				<Button onClick={ generateJoke } endIcon={ <FontAwesomeIcon icon={ faRotateRight } /> } variant="outlined">
					Generate Joke
				</Button>
			</div>
			<div className='list-jokes'>
				{
					lstJokes.length > 0 ?
						lstJokes.map((joke) => (
							<div key={ joke.id } className='joke'>
								<span className='joke__text'>
									{ joke.text }
								</span>
								<IconButton variant='outlined' color='success' onClick={ () => changeReaction(joke.id, 1) }>
									<FontAwesomeIcon icon={ joke.reaction == 1 ? faThumbsUp : faRegularThumbsUp } />
								</IconButton>
								<IconButton variant='outlined' color='error' onClick={ () => changeReaction(joke.id, 2) }>
									<FontAwesomeIcon icon={ joke.reaction == 2 ? faThumbsDown : faRegularThumbsDown } />
								</IconButton>
							</div>
						)) :
						(<div>
							<span>Please generate a new Joke</span>
						</div>)
				}
			</div>
		</div>
	)
}

export default ChuckJokes

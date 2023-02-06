import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {
	const [name, setName] = useState('Tyliz');

	function showMessage(message) {
		alert(`Message recived: ${message}`);
	}

	function updateChild(newName) {
		setName(newName);
	}

	return (
		<div>
			<Child name={ name } send={ showMessage } update={ updateChild } ></Child>
		</div>
	);
};

export default Father;

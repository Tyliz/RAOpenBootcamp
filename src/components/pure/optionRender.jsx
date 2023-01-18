import React, { useState } from 'react';

const OptionRender = () => {

	const [access, setAccess] = useState(false);

	const updateAccess = () => {
		setAccess(!access);
	};

	let btnOptional;

	if (access) {
		btnOptional = (<button type='button' className={ access ? 'btn btn-danger' : 'btn btn-success' } onClick={ updateAccess }>Logout</button>);
	} else {
		btnOptional = (<button type='button' className={ access ? 'btn btn-danger' : 'btn btn-success' } onClick={ updateAccess }>Login</button>);
	}

	return (
		<div>
			{ btnOptional }
		</div>
	);
};

export default OptionRender;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Function Component  better than Class Component
const Greetingf = (props) => {

    // Introduction to useState
    // const [variable, method to update] = useState(InitialValue)
    const [age, setAge] = useState(26);

    const birthday = () => {
        //method to update the state
        setAge(age + 1);
    }

    return (
        <div>
            <h1>Hi { props.name }, from functional component!</h1>
            <h2>You are { age } years old.</h2>
            <div>
                <button onClick={birthday}>
                    <span>Birthday!</span>
                </button>
            </div>
        </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string,
};


export default Greetingf;

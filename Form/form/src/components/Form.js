import React, { useState } from 'react';


export default function Form() {
    const [data, setData] = useState({
        name: '',
        email: ''
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        console.log(data);
        alert("Form submitted successfully!");
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={changeHandler} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={changeHandler} />
            <input type="submit" value="Submit" />
        </form>
    );

}

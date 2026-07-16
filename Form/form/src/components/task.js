import React, { useState } from "react";

const Task1 = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        gender: "Male",
        age: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data", data);
        alert("Form submitted ...");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Username: </label>
            <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="username"
                value={data.username}
            />
            <br />
            <br />
            <label htmlFor="">Email: </label>
            <input
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
                value={data.email}
            />
            <br />
            <br />
            <label htmlFor="">phone: </label>
            <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="phone"
                value={data.phone}
            />
            <br />
            <br />
            <select onChange={(e) => handleChange(e)} name="gender" id="gender">
                <option value="" disabled defaultValue>
                    Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <br />
            <br />

            <label htmlFor="">Age: </label>
            <input
                onChange={(e) => handleChange(e)}
                type="Number"
                name="age"
                value={data.age}
            />
            <br />
            <br />

            <input type="submit" value="submit" />
        </form>
    );
};

export default Task1;
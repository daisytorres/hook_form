import React, { useState } from  'react';
import Display from './Display'
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <h2>Hook Form Assignment</h2>
                <div className ="input">
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div className ="input">
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className ="input" >
                    <label>Email: </label>
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className ="input">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className ="input">
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <button className = "button">Submit</button>
            </form>
                <Display firstName = {firstName} lastName = {lastName} email = {email} password = {password} confirmPassword = {confirmPassword} />
        </div>
    );
};
    
export default UserForm;
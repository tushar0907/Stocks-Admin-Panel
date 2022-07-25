import React from 'react';
import "./newUser.css";

const NewUser=() => {
    return (
        <div className="newUser">
            <h1 className="newuserTitle">
                <form className="newUserForm">
                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" placeholder="tushar05" />
                    </div>

                    <div className="newUserItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="Tushar Kumar" />
                    </div>

                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" placeholder="tushar@gmail.com" />
                    </div>

                    <div className="newUserItem">
                        <label>Password</label>
                        <input type="password" placeholder="nisawesome" />
                    </div>

                    <div className="newUserItem">
                        <label>Phone</label>
                        <input type="number" placeholder="+91 123456789" />
                    </div>

                    <div className="newUserItem">
                        <label>Address</label>
                        <input type="text" placeholder="NEW DELHI | INDIA" />
                    </div>

                    <div className="newUserItem">
                        <label>Gender</label>
                        <div className="newUserGender">
                            <input type="radio" name="gender" id="male" value="male" />
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="female" value="female" />
                            <label for="female">Female</label>
                            <input type="radio" name="gender" id="other" value="other" />
                            <label for="other">Other</label>
                        </div>
                    </div>
                    <div className="newUserItem">
                        <lable>Active</lable>
                        <select name="active" id="active" className="newUserSelect">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button className="newUserButton">
                        Create
                    </button>
                </form>
            </h1>
        </div>
    )
}

export default NewUser

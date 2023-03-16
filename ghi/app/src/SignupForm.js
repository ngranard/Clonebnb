import React, { useState } from 'react';

const SignupForm = () => {
  const [username, setUserName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [host_status, setStatus] = useState('');
  const [is_superhost, setIsSuperhost] = useState('');


  const handleCheckboxClick = (event) => {
    const isChecked = event.target.checked;
    setStatus(isChecked ? true : false);
  };

  const handleCheckboxClick2 = (event) => {
    const isChecked = event.target.checked;
    setIsSuperhost(isChecked ? true : false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {}
    console.log(data)
    data.username = username
    data.password = password
    data.first_name = firstname
    data.last_name = lastname
    data.birthday = birthday
    data.photo = photo
    data.email = email
    data.host_status = host_status
    data.is_superhost = is_superhost

    const userUrl = 'http://localhost:8082/api/users/'
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    }
    const userResponse = await fetch(userUrl, fetchConfig)
    await userResponse.json()
    if (userResponse.ok) {
      setUserName('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setBirthday('')
      setPhoto('')
      setEmail('')
    }
  }

  const handleUserNameChange = (event) => {
    const value = event.target.value
    setUserName(value)
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value
    setPassword(value)
  }

  const handleFirstNameChange = (event) => {
    const value = event.target.value
    setFirstName(value)
  }

  const handleLastNameChange = (event) => {
    const value = event.target.value
    setLastName(value)
  }

  const handleBirthdayChange = (event) => {
    const value = event.target.value
    setBirthday(value)
  }

  const handlePhotoChange = (event) => {
    const value = event.target.value
    setPhoto(value)
  }

  const handleEmailChange = (event) => {
    const value = event.target.value
    setEmail(value)
  }


  return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

            <div className="form-cloating mb-3">
              <input value={photo} onChange={handlePhotoChange} name="photo" placeholder="Upload Photo" id="Photo" required type="url" className="form-control" />
            </div>

            <div className="form-cloating mb-3">
              <input value={username} onChange={handleUserNameChange} name="username" placeholder="Username" id="username" required type="text" className="form-control" />
            </div>

            <div className="form-cloating mb-3">
              <input value={password} onChange={handlePasswordChange} name="username" placeholder="Pasword" id="username" required type="password" className="form-control" />
            </div>

            <div className="form-cloating mb-3">
              <input value={firstname} onChange={handleFirstNameChange} name="firstname" placeholder="First Name" id="firstname" required type="text" className="form-control" />
            </div>

            <div className="form-cloating mb-3">
              <input value={lastname} onChange={handleLastNameChange} name="lastname" placeholder="Last Name" id="lastname" required type="text" className="form-control" />
            </div>

            <div className="form-cloating mb-3">
              <input value={email} onChange={handleEmailChange} name="email" placeholder="E-mail Address" id="lastname" required type="email" className="form-control" />
            </div>

            <div className="form-cloating mb-3">
              <input value={birthday} onChange={handleBirthdayChange} name="Birthday" placeholder="Birthday" id="birthday" required type="date" className="form-control" />
              <label>Date of Birth</label>
            </div>

            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={handleCheckboxClick}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Check the Box if Host</label>
            </div>

            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={handleCheckboxClick2}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Check the Box if Superhost</label>
            </div>

            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>);// end of return
};//end of function

export default SignupForm;

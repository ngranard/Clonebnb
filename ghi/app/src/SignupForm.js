import React, { useState } from 'react';

const SignupForm = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birthday, setBirthday] = useState('1990-01-01');
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [join, setJoin] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.firstname = firstname;
    data.lastname = lastname;
    data.birthday = birthday;
    data.photo = photo;
    data.email = email;
    data.status = status;
    data.join = join;

    const userUrl = 'http://localhost:8082/api/users';
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const userResponse = await fetch(userUrl, fetchConfig);
    if (userResponse.ok) {
      setFirstName('');
      setLastName('');
      setBirthday('');
      setPhoto('');
      setEmail('');
      setStatus('');
      setJoin('');
    }
  };
  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleBirthdayChange = (event) => {
    const value = event.target.value;
    setBirthday(value);
  };

  const handlePhotoChange = (event) => {
    const value = event.target.value;
    setPhoto(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatus(value);
  };

  const handleJoinChange = (event) => {
    const value = event.target.value;
    setJoin(value);
  };

  return (
    <div>
      <div className="shadow p-4 mt-4">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}></form>

        <div className="form-cloating mb-3">
          <input
            value={firstname}
            onChange={handleFirstNameChange}
            name="firstname"
            placeholder="First Name"
            id="name"
            required
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-floating mb-3">
          <input
            value={birthday}
            placeholder="Appointment Time"
            required
            type="date"
            name="appointment-time"
            id="appointment-time"
            className="form-control"
          />
          <label htmlFor="appointment-time">
            Birthday<span className="text-muted ms-2">(optional)</span>
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </div>
  ); // end of return
}; //end of function

export default SignupForm;

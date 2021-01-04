import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import axios from 'axios'
import styled from 'styled-components'



 // ----------- STYLING -------------

const StyledPage = styled.div`
background-image: url("https://images.unsplash.com/photo-1561214083-9c3bd62fd8c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80");
background-repeat: no-repeat;
  background-size: cover;
padding-bottom: 20%;

`

const StyledH1 = styled.h1`
  border-bottom: 3px solid #8970A7;
  width: 32%;
  margin: 0 auto;
  margin-bottom: 15px;
  color: #039F07;
  text-align: center;
  background-color: #e1d0f5;
`;


const StyledForm = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  background: pink;
  width: 40%;
  min-height: 70%;
  margin: 0 auto;
  padding-top: 8%;
  align-items: center;
  color: #09C516;
  text-shadow: 5px 3px 1px #8970A7;
  padding-bottom: 11%;
  text-align: center;
  background-image: url("https://images.unsplash.com/photo-1526404079162-d93dafdeef3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZXhlcmNpc2UlMjBlcXVpcG1lbnQlMjBncmVlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #9B8695;
  margin-top: 5%;
`;


const StyledButton = styled.button`
font-size: 1.42rem;
border-radius: 10px;
background-color: #8970A7;
color: white;
border: 4px solid ##e1d0f5;
`;

 // ----------- INSTRUCTOR LOGIN COMPONENT -------------

const InstructorLogin = () => {

    // ----------- INSTRUCTOR LOGIN STATE -------------

    const [instructor, setInstructor] = useState({
        username: "",
        password: "",
    })

    // ----------- DUMMY POST STATE -------------

    const [post, setPost] = useState([]);

    {/* ------------- BUTTON DISABLED? -------------------- */}

    const [buttonDisabled, setButtonDisabled] = useState(true)

      {/* ------------- ERRORS STATE -------------------- */}

      const [errors, setErrors] = useState({
          username: "",
          password: "",
      });

    {/* ------------- INPUT CHANGE FUNCTION -------------------- */}

    const inputChange = e => {
        e.persist();
        const newUserData = {
            ...instructor,
            [e.target.name]: e.target.value
        };

        validateChange(e);
        setInstructor(newUserData);
    }

    {/* ------------- YUP SCHEMA -------------------- */}

    const formSchema = yup.object().shape({
        username: yup.string().required("Username is required."),
        password: yup.string().min(6).max(10).required("Must have a valid password between 5 and 10 characters long.")
    });

     {/* ------------- USEEFFECT HOOK FOR BUTTON -------------------- */}

     useEffect(() => {
        console.log('form state change')
        formSchema.isValid(instructor).then(valid => {
            console.log('valid?', valid)
            setButtonDisabled(!valid);
        });

     }, [instructor]);



{/* ------------- VALIDATE CHANGE FUNCTION -------------------- */}

const validateChange = (e) => {
    yup.reach(formSchema, e.target.name).validate(e.target.value)
    .then(valid => {
        setErrors({
            ...errors, 
            [e.target.name]: ""
        })
    })
    .catch(err => {
        setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
        })
    })
}

{/* ------------- FORM SUBMIT FUNCTION -------------------- */}
{/* ------------- USING DUMMY POST REQUEST -------------------- */}

const loginSubmit = e => {
    e.preventDefault();
    axios
    .post("https://reqres.in/api/users", instructor)
    .then(res => {
        setPost(res.data);
        console.log("success!", post);
        // reset form if succesful
        setInstructor({
            username: "",
            password: ""
        })
    })
    .catch(err => console.log(err.response));
}

    return (
        <StyledPage>
        <div>
            <StyledH1>🏋️ instructor login 🏋️</StyledH1>

        <StyledForm>

        {/* ------------- INSTRUCTOR FORM -------------------- */}
        <form onSubmit={loginSubmit}>

        <br></br>
            {/* --------------USERNAME -------------- */}
            
            <label htmlFor="username">username:
            <br></br>
            <input
            id="username"
            type="text"
            name="username"
            placeholder="please enter username here."
            value={instructor.username}
            onChange={inputChange}
            />
            {errors.username.length > 0 ? <p style={{color: 'red'}}>{errors.username}</p> : null}
            </label>

            <br></br>
            <br></br>

             {/* -------------- PASSWORD -------------- */}

             <label htmlFor="password">password:
             <br></br>
                <input
                id="password"
                type="password"
                name="password"
                placeholder="password here, please."
                value={instructor.password}
                onChange={inputChange}
                />
                {errors.password.length > 0 ? <p style={{color: 'red'}}>{errors.password}</p> : null}
             </label>

             <br></br>
             <br></br>

               {/* -------------- SUBMIT BUTTON -------------- */}
               {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
               <StyledButton disabled={buttonDisabled}>Ready to register?</StyledButton>

        </form>
        </StyledForm>
        </div>
        </StyledPage>
    )
}

export default InstructorLogin
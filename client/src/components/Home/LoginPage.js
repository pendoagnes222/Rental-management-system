import React, {useState} from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import './LoginPage.css';
import { Alert } from 'react-bootstrap';
export default function LoginPage() {

    const { register,  handleSubmit, reset, formState: { errors } } = useForm();
    //const onSubmit = data => console.log(data);
    const [show, setShow] = useState(false)
    const [serverResponse, setServerResponse] = useState('')
    
  /*return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign Up</h2>
               
                <small>Register to enjoy our services</small>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username",{ required:true })} placeholder='username' 
                        
                    />

                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number'  />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                

                    <input type="email" {...register("email", { required : true, maxLength: 10 })} placeholder='email' 
                        
                    />

                    <input type="password" {...register("password")} placeholder='password' 
                        
                    />
                    <input type="password" {...register("confirmpwd")} placeholder='confirm password' 
                        
                    />
                    
                    <button className='btn'>Sign Up</button>
                    <small>Already Registered? <Link to="/SignIn">Sign In</Link></small>
                </form>*/
    const onSubmit = (data) => {

        if (data.password === data.confirmpwd) {
            const body = {
                username: data.username,
                mobile: data.mobile,
                email: data.email,
                password: data.password

            }
            const requestOptions = {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            }

            fetch('/auth/signup', requestOptions)
                .then(res => res.json())
                .then(data =>
                    console.log(data),
                    setServerResponse(data.message),
                    setShow(true))
                .catch(err => console.log(err))


            reset()
        }
        else {
            alert("Password do not match")
        }
    }

    return (
        <section>
            <div className="register">
                <div className="col-1">


                    {show?
                        <>
                            <h2>Sign Up</h2>

                            <small>Register to enjoy our services</small>
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                <p style={{ color: "blue" }}>User Created Successfully{serverResponse}</p>
                            </Alert>
                        </>
                        :
                        <><h2>Sign Up</h2><small>Register to enjoy our services</small></>
                    }
                    <form id='form' className='flex flex-col' >

                        <input type="text" {...register("username", { required: true, maxLength: 25 })} placeholder='username' />
                        {errors.username && <span style={{ color: "red" }}> <small>Username is required</small></span>}

                        <input type="text" {...register("mobile", { required: true, maxLength: 10 })} placeholder='mobile number' />
                        {errors.mobile?.type === "required" && <span style={{ color: "red" }}><small>Mobile Number is required</small></span>}
                        {errors.mobile?.type === "maxLength" && <span style={{ color: "red" }}><small>Max Length Exceed</small></span>}


                        <input type="email" {...register("email", { required: true, maxLength: 80 })} placeholder='email' />
                        {errors.email && <span style={{ color: "red" }}> <small>Email is required</small></span>}

                        <input type="password" {...register("password", { required: true, minLength: 8 })} placeholder='password'

                        />
                        {errors.password && <span style={{ color: "red" }}> <small>Password is required</small></span>}

                        <input type="password" {...register("confirmpwd", { required: true, minLength: 8 })} placeholder='confirm password'

                        />
                        {errors.confirmpwd && <span style={{ color: "red" }}> <small>Confirm password is required</small></span>}

                        <button className='btn' onClick={handleSubmit(onSubmit)} >Sign Up</button>
                        <div><small>Already Registered? <Link to="/login">Sign in here</Link></small></div>
                    </form>

                </div>
            </div>
        </section>
    )
                }
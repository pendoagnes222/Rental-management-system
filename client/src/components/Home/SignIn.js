import React from 'react'
import './SignIn.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

export default function SignIn() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        const requestOptions={
           method:"POST",
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       }

    // console.log(watch('username'));

    fetch('/auth/login',requestOptions)
       .then(res=>res.json())
       .then(data=>{
           console.log(data)
           
           
       })    
       reset()
    }
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                

                <form id='form' className='flex flex-col' >
                    <input type="text" {...register("username", { required: true, maxLength: 25 })} placeholder='username' />
                    {errors.username && <span style={{ color: "red" }}> <small>Username is required</small></span>}
                    <input type="text" {...register("password", { required: true, minLength: 8 })} placeholder='password' />
                    {errors.password && <span style={{ color: "red" }}> <small>Password is required</small></span>}
                    {errors.password?.type === "maxLength" && <p style={{color:'red'}}>
                    <small>Password should be more than 8 characters</small>
                    </p>}
                    <button className='btn' onClick={handleSubmit(onSubmit)}>Sign In</button>
                    
                    <small>Do not have an account? <Link to='/LogInPage'>Create One</Link></small>
              
                </form>

            </div>
        </div>
    </section>
  )
  }
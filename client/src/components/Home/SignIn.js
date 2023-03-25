import React from 'react'
import './SignIn.css'
import { useForm } from 'react-hook-form';

export default function SignIn() {

    const { register, handleSubmit,  formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                

                <form id='form' className='flex flex-col' >
                    <input type="text" {...register("username", { required: true, maxLength: 25 })} placeholder='username' />
                    {errors.username && <span style={{ color: "red" }}> <small>Username is required</small></span>}
                    <input type="text" {...register("password")} placeholder='password' />
                    {errors.password && <span style={{ color: "red" }}> <small>Password is required</small></span>}
                    {errors.password?.type === "maxLength" && <p style={{color:'red'}}>
                    <small>Password should be more than 8 characters</small>
                    </p>}
                    <button className='btn' onSubmit={handleSubmit(onSubmit)}>Sign In</button>
                </form>

            </div>
        </div>
    </section>
  )
}
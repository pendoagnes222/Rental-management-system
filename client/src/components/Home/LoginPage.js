import React,{useState} from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

export default function LoginPage() {

    const { register, handleSubmit,  formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
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
                    <small>Already Registered? <Link to="/LoginPage">Sign In</Link></small>
                </form>

            </div>
        </div>
    </section>
  )
}

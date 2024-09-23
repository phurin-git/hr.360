'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signInSchema } from '../lib/zod';
import { login } from '../lib/authAction';
import logo from '../images/logo.svg';

const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [serverError, setServerError] = useState<string | null>(null);
  const onSubmit = async (data: { email: string; password: string; }) => {
    try {
      setServerError(await login(data.email, data.password));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-screen h-screen flex gap-[368px] justify-center items-center'>
      <div className='w-[360px] flex flex-col gap-8'>
        <div className='w-full flex flex-col gap-6 items-center'>
          <Image src={logo} alt='logo' width={48} height={48}/>
          <div className='w-full flex flex-col gap-3'>
            <h1 className='w-full text-heading-1 font-semibold text-center text-grey-900'>Log in to your account</h1>
            <p className='w-full text-body-1 font-normal text-center text-[#667085]'>Welcome back! Please enter your details.</p>
          </div>
        </div>
        <form className='w-full flex flex-col gap-6 items-center' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-full flex flex-col gap-5'>
            <div className='w-full flex flex-col gap-[0.375rem]'>
              <label htmlFor='email' className='text-body-2 font-medium text-gray-700'>Email</label>
              <input type='email' placeholder='Enter your email' autoComplete='username' {...register('email')} className='w-full rounded-lg flex gap-2 items-center px-[14px] py-[10px] border'/>
              {errors.email?.message && <span className='text-negative text-body-2 font-normal'>{String(errors.email.message)}</span>}
            </div>
            <div className='w-full flex flex-col gap-[0.375rem]'>
              <label htmlFor='password' className='text-body-2 font-medium text-gray-700'>Password</label>
              <input type='password' placeholder='Enter your password' autoComplete='current-password' {...register('password')} className='w-full rounded-lg flex gap-2 items-center px-[14px] py-[10px] border'/>
              {errors.password?.message && <span className='text-negative text-body-2 font-normal'>{String(errors.password.message)}</span>}
              {serverError && <span className='text-negative text-body-2 font-normal'>{String(serverError)}</span>}
              </div>
          </div>
          <div className='w-full flex flex-col gap-4'>
            <button type='submit' className='rounded-[4px] px-[18px] py-[10px] bg-tertiary text-body-1 font-medium text-white justify-center align-middle'>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
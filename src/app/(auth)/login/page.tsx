'use client'

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema } from '@/lib/types';
import { Form } from '@/components/ui/form'
import Link from 'next/link';
import Logo from '../../../../public/cypresslogo.svg';
import Image from 'next/image';
const LoginPage = () => {
    const router = useRouter();
    const [submitError, setSubmitError] = useState('');

    const form = useForm<z.infer<typeof FormSchema>>({
      mode: 'onChange',
      resolver: zodResolver(FormSchema),
      defaultValues:{
        email:"",
        password:""
      }
    })

    const isLoading = form.formState.isSubmitting
    const onSubmit : SubmitHandler<z.infer<typeof FormSchema>> = async ()=>{
      
    }

  return (
    <Form {...form}>
      <form onChange={() =>{

      }}
      onSubmit={form.handleSubmit(onSubmit)}
      >
        <Link  href="/"
          className="
          w-full
          flex
          justify-left
          items-center">
            <Image src={Logo}
            alt="cypress Logo"
            width={50}
            height={50}  />
          </Link>

      </form>

    </Form>
  );
}

export default LoginPage;

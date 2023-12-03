'use client'

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema } from '@/lib/types';

const LoginPage = () => {
    const router = useRouter();
    const [submitError. setSubmitError] = useState('');

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
    <div></div>
  );
}

export default LoginPage;

import React, { FC, ReactNode } from 'react';
import { Button } from '../ui/button';
import {} from '@/lib/providers/su'

interface LogoutButtonProps {
    children: ReactNode
}


const LogoutButton : FC<LogoutButtonProps> = ({children}) => {

    const {user} = useSupa

  return (
    <Button variant="ghost" size="icon" className='p-0' onClick={logout}>
        {children}
    </Button>
  );
}

export default LogoutButton;

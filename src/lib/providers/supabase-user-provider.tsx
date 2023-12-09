import { useToast } from '@/components/ui/use-toast';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { AuthUser, Subscription } from '@supabase/supabase-js';
import React, { FC, ReactNode, createContext, useContext, useState } from 'react';

interface SupabaseUserProviderProps {
    children: ReactNode
}

type SupabaseUserContextType = {
user: AuthUser | null;
subscription: Subscription | null;
}

const SupabaseUserContext = createContext<SupabaseUserContextType>({
    user: null,
    subscription: null
})


export const useSupabaseUser = () =>{
    return useContext(SupabaseUserContext)
}


const SupabaseUserProvider: FC<SupabaseUserProviderProps> = ({children}) => {

    const [user, setUser] = useState<AuthUser | null>(null);
    const [subscription, setSubscription]
 = useState<Subscription | null>(null);
 const toast = useToast();
 const supabase = createClientComponentClient()

 
  return (
    <SupabaseUserContext.Provider value={{user, subscription}}>
        {children}
    </SupabaseUserContext.Provider>
  );
}

export default SupabaseUserProvider;

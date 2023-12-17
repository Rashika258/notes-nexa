import React, { FC, ReactNode } from 'react';
import Sidebar

interface LayoutProps {
    children: ReactNode;
    params: any

}

const Layout: FC<LayoutProps> = ({children, params}) => {
  return (
   <main className='flex overflow-hidden h-screen w-screen'>
    <Sidebar>
    </Sidebar>

   </main>
  );
}

export default Layout;

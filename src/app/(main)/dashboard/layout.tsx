import { getActiveProductsWithPrice } from "@/lib/supabase/queries";
import { FC, ReactNode } from "react"

interface LayoutProps {
    children: ReactNode;
    params: any
}

const Layout: FC<LayoutProps> = async({children, params}) =>{
    const {data: products, error} = await getActiveProductsWithPrice();


    if(error) throw new Error();

    return (
        <main className="flex overflow-hidden h-screen">
            <Subscrip

        </main>
    )
}
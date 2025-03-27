import React from 'react'
import Link from 'next/link'
// import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"



const NavBar = () => {
  return (
    <nav className='h-18 bg-background/30 px-7 backdrop-blur sticky top-0  border-b flex items-center'>
        <div className='font-bold text-2xl text-white'>
            MarkFlow
        </div>
        <ul className='flex w-full items-center justify-end space-x-7'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            {/* <Button variant="outline">Button</Button> */}
            {/* <Button variant="outline">Button</Button> */}
            <Link href="/login" className={buttonVariants({ variant: "outline" })}>Login</Link>
            
            <Link href="/signup" className={buttonVariants({ variant: "outline" })}>SignUp</Link>
            
            </ul>

    </nav>
  )
}

export default NavBar
import React from 'react'
import Link from 'next/link'
// import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from './theme-toggle'
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const NavBar = () => {
  return (
    <nav className='h-18 bg-background/30 px-7 backdrop-blur sticky top-0  border-b flex items-center justify-between'>
        <div className='  text-white text-2xl font-bold md:text-4xl '>
            MarkFlow
        </div>
        <ul className='hidden md:flex w-full items-center justify-end space-x-7'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>

            {/* <Button variant="outline">Button</Button> */}
            {/* <Button variant="outline">Button</Button> */}

            <li className='flex space-x-3 gap-0.5 '>
            <Link href="/login" className={buttonVariants({ variant: "outline" })}>Login</Link>
            
            <Link href="/signup" className={buttonVariants({ variant: "outline" })}>SignUp</Link>
            </li>
<li >
  
  </li>            
            </ul>
       <div className='flex items-center gap-4'>
       <ModeToggle />
       <Sheet>
  <SheetTrigger>
       <Menu className='size-7.5 md:hidden' />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
       </div>


    </nav>
  )
}

export default NavBar
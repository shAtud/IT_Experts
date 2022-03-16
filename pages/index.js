import Head from 'next/head'
import Image from 'next/image'
import { useState ,useRef} from 'react'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Acc from '../components/Acc'
import Ser from '../components/Ser'
import Devgrp from '../components/devgrp'
import MemberDes from '../components/MemberDes'
import Contact from '../components/Contact'
import Navbar from '../components/NavBar'

export default function Home() {
  const [open,setOpen] = useState(false);
  const footerRef = useRef(null)

 
  return(

    <div 
      id='home_section' 
      className='bg-[#F7FAFB] min-h-screen w-[100vw] relative '
     
    
    >
      <Navbar open={open} setOpen={setOpen} footerRef={footerRef}/>
      <Acc/>
      <Ser/>
      <MemberDes/>
      <Devgrp/>
      <Contact id='contact_section'/>
      <Footer footerRef={footerRef}/>
    </div>
  )
}

import React from 'react'
import { TfiInstagram } from 'react-icons/tfi'
import { TfiFacebook, TfiTwitterAlt, TfiLinkedin, TfiYoutube } from 'react-icons/tfi'


function Footer() {
  return (
    <div className='bg-indigo-500 p-5'>
        <div className='flex flex-col gap-10 justify-start md:flex-row md:justify-center md:space-x-24'>
            <div className='flex flex-col gap-1 text-white'>
                <p className='text-2xl font-bold'>PayWise Ghana</p>
                <p>31st January Boundry Road,</p>
                <p>Opposite Anuty Dede Beans</p>
                <p>Kotobabi, Accra.</p>
            </div>
            <div className='flex flex-col gap-1 text-white'>
                <p className='text-2xl font-bold '>Quick Links</p>
                <p className='cursor-pointer'>Sika Mp3 Dede T & C's</p>
                <p className='cursor-pointer'>Find an office</p>
                <p className='cursor-pointer'>Disclaimer</p>
                <p className='cursor-pointer'>Terms & Conditions</p>
                <p className='cursor-pointer'>Privacy Policy</p>
                <p className='cursor-pointer'>E-levy Mobile Money</p>
                <p className='cursor-pointer'>E-levy Remittance</p>
                <p className='cursor-pointer'>Dormant Account Notice</p>
                <p className='cursor-pointer'>Dormant Account FAQs</p>
            </div>
            <div className='flex flex-col gap-1 text-white'>
                <p className='text-2xl font-bold'>Support</p>
                <p className='cursor-pointer'>Report Fraud</p>
                <p className='cursor-pointer'>Complaint Procedure</p>
                <p className='cursor-pointer'>Lodge Complaint</p>
                <p className='cursor-pointer'>Ghana card</p>
            </div>
            <div className='flex flex-col gap-1 text-white'>
                <p className='text-2xl font-bold'>Contact</p>
                <p className='cursor-pointer'>+233 (0) 302 444 000</p>
                <p className='cursor-pointer'>+233 (0) 302 444 111</p>
                <p className='cursor-pointer'>+233 (0) 302 444 222</p>
                <p className='cursor-pointer'>info@paywise.com</p>
            </div>
            <div className='flex flex-col gap-4 text-white'> 
            <p className='text-2xl font-bold text-white'>Socials</p>
            <div className='flex flex-row gap-4 text-2xl cursor-pointer'>
                <TfiFacebook/>
                <TfiInstagram/>
                <TfiTwitterAlt/>
                <TfiLinkedin/>
                <TfiYoutube/>
            </div>
               
            </div>
        </div>

        <h1 className='text-md font-thin text-center text-white pt-10'>All rights reserved. copyright 2022.</h1>


    </div>
  )
}

export default Footer
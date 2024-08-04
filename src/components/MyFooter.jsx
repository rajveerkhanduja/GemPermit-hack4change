import React from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/logo.png'

const MyFooter = () =>{
  return (
    <Footer container>
      <div className="w-full">
        <div className=" my-28 md:my-8 py-6 px-20 flex flex-row md:flex-row items-center justify-between">
          <div> 
            <a href="#" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="logo" 
            className='w-20 justify-center'/><span className='text-[#263238]'>
            GemPermit</span></a>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="About" className='mb-3'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Terms of Use</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Terms and Policies" className='mb-3'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Hyperlink Policy</Footer.Link>
                <Footer.Link href="#">Website Polices</Footer.Link>
                <Footer.Link href="#">Content Policies</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Resources" className='mb-3'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Fees and User Charges</Footer.Link>
                <Footer.Link href="#">Act, Rule and Policies</Footer.Link>
                <Footer.Link href="#">Permit Fees</Footer.Link>
                <Footer.Link href="#">Manual</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Need Help" className='mb-3'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Contact Us</Footer.Link>
                <Footer.Link href="#">FAQ'S</Footer.Link>
                <Footer.Link href="#">Raise a Concern</Footer.Link>
                <Footer.Link href="#">Calendar</Footer.Link>
                <Footer.Link href="#">Web Information Manager</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex items-center justify-center bg-brandPrimary text-white">
          <Footer.Copyright href="#" by=" GemPermit" year={2024} />
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter;
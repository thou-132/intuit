import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import img1 from "../Image/a-1.jpg"
import { IoChevronDown } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { SlGlobeAlt } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react'
import mes1 from '../Image/mes1.avif'
import mes2 from '../Image/mes2.avif'
import mes3 from '../Image/mes3.avif'
import mes4 from '../Image/mes4.avif'
import mes5 from '../Image/mes5.avif'
import mes6 from '../Image/mes6.avif'
import mes7 from '../Image/mes7.avif'
import mes8 from '../Image/mes8.avif'
import mes9 from '../Image/mes9.avif'
import mes10 from '../Image/mes10.avif'
import shop1 from '../Image/shop1.avif'
import shop2 from '../Image/shop2.avif'
import shop3 from '../Image/shop3.avif'
import shop4 from '../Image/shop4.avif'
import shop5 from '../Image/shop5.avif'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [drop, setDrop] = useState(false)
  return (
    <>
      <div className="firstnav">
        <p className='try'>Try Mailchimp and save 25% for 12 months. <span className='start'> Start today.</span> </p>
      </div>


      <div className="bignavbar">


        <div className="logo">
          <NavLink className="image"><img src={img1} alt="" className='img1' /></NavLink>
        </div>

        <div className="bar" onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
          <span className='lines'></span>
          <span className='lines'></span>
          <span className='lines'></span>
        </div>



        <div id='subnavbar' className={menuOpen ? "open" : ""} >

          <div className="nav1">

            <div className="services" id='hover'>
              <NavLink className=" solution" onClick={() => { setDrop(!drop) }}>Solutions and Services
                <IoChevronDown /></NavLink>
              <div id='drop' className={drop ? "dropopen" : ""}>

                <div className='container-fluid dropdown'>
                  <div className='row'>
                    <div className='col-lg-7 grandparent'>
                      <div className='row'>
                        <div className='solandser'>
                          <h3 className='solu2'>Solution and Serivice</h3>
                          <h5>See Whats a new</h5>
                        </div>
                        <div className='row child12'>

                          <div className='col-lg-4'>
                            <div className='email'>
                              <img src={mes1} alt="" className='mes1' />
                              <p >Email Marketing </p>
                            </div>
                            <p className='send'>Send Personalised Email that Convert</p>
                          </div>

                          <div className='col-lg-4'>
                            <div className='email'>
                              <img src={mes2} alt="" className='mes1' />
                              <p >Marketing Automation</p>
                            </div>
                            <p className='send'>Deliver the right message at the right time</p>
                          </div>

                          <div className='col-lg-4'>
                            <div className='email'>
                              <img src={mes3} alt="" className='mes1' />
                              <p >AI marketing tools </p>
                            </div>
                            <p className='send'>Say hello to your AI growth assistant</p>
                          </div>

                        </div>

                        <div className='row child13'>

                          <div className='col-lg-4'>
                            <div className='email'>
                              <img src={mes4} alt="" className='mes1' />
                              <p >Websites </p>
                            </div>
                            <p className='send'>Create your branded web presence</p>
                          </div>

                          <div className='col-lg-4'>
                            <div className='email'>
                              <img src={mes5} alt="" className='mes1' />
                              <p >Reporting & analytics </p>
                            </div>
                            <p className='send'>Send Personalised Email that Convert</p>
                          </div>

                          <div className='col-lg-4'>
                            <div className='email'>
                              <img src={mes6} alt="" className='mes1' />
                              <p >Marketing Automation</p>
                            </div>
                            <p className='send'>Track sales & campaign performance</p>
                          </div>

                        </div>


                        <div className='row child14'>

                          <div className='col-lg-4'>
                            <div className='email'>
                              <img src={mes7} alt="" className='mes1' />
                              <p >Content Creation Tools</p>
                            </div>
                            <p className='send'>Build content that captivates and converts</p>
                          </div>

                          <div className='col-lg-4'>
                            <div className='email'>
                              <img src={mes8} alt="" className='mes1' />
                              <p >Websites </p>
                            </div>
                            <p className='send'>Create your branded web presence</p>
                          </div>

                          <div className='col-lg-4'>
                            <div className='email'>
                              <img src={mes9} alt="" className='mes1' />
                              <p >Reporting & analytics</p>
                            </div>
                            <p className='send'>Track sales & campaign performance</p>
                          </div>

                        </div>

                        <div className='row child15'>

<div className='col-lg-4'>
  <div className='email'>
    <img src={mes10} alt="" className='mes1' />
    <p >Content Creation Tools </p>
  </div>
  <p className='send'>

</p>
</div>

<div className='col-lg-4'>
  
</div>

<div className='col-lg-4'>
 
</div>

</div>

                      </div>
                      <div className='parent2'>
                      <div className='solandser '>
                          <h3 className='inegrate'>Inegrated your Apps</h3>
                          <h5>see 300+ inegration</h5>
                        </div>
                        </div>

<div className='shophead'>
  <div className='shop1' >
  <img src={shop1} alt="" />
<p>Shopify</p>
  </div>
  <div className='shop1' >
  <img src={shop2} alt=""   />
  <p>Wix</p>
  </div>
  <div className='shop1'>
  <img src={shop3} alt=""  />
  <p>Salesforce</p>
  </div>
  <div  className='shop1'>
  <img src={shop4} alt="" />
  <p>Canva</p>
  </div>
  <div  className='shop1'>
  <img src={shop5} alt="" />
  <p>Woo commerce</p>
  </div>

</div>


                    </div>
                    <div className='col-lg-5 grandparent2'>
<div className='row parent3'>
<h4>FOR YOUR INDUSTRY</h4>
<p>E-commerce and retail</p>
<p>Service-based Business</p>
<p>Mobile and web apps</p>
<p>Start-ups</p>
<p>Agencies and freelancers</p>

<p>Developers</p>
<h4>PROFESSIONAL SERVICES</h4>
<p>Hire an Expert</p>
<p>Personalized onboarding</p>
<p>Customer success</p>

</div>



                    </div>

                  </div>
                </div>


              </div>

            </div>

            <div className="services" id='hover'>
              <NavLink className=" solution">Resources
                <IoChevronDown /></NavLink>
            </div>


            <NavLink id='hover' to='../Switch'><p className="mailchimp ">Switch to Mailchimp</p></NavLink>
            <NavLink id='hover' ><p className="pricing">Pricing</p></NavLink>

          </div>



          <div className="nav2">

            <div className="searchdiv " id='hover'>
              <IoSearch className='search' />
            </div>

            <div className="en " id='hover'>
              <SlGlobeAlt className='globe' />
              <p className="en1">EN</p>
              <FaCaretDown className='downarr' />
            </div>

            <NavLink id='hover'>
              <p className='no'>
                Sales: +1 (800) 315-5939</p>
            </NavLink>

            <div className="bigbtn">
              <NavLink to="../login "><button className="btn1">
                Log In
              </button>
              </NavLink>
            </div>


            <div className="bigbtn">

              <NavLink to="../signup"><button className="btn2">
                Sign Up
              </button>
              </NavLink>
            </div>

          </div>


        </div>
      </div>






    </>
  )
}

export default Header

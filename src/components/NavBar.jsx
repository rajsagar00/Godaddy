import React from 'react'
import logo from '../img/logo.png'
import '../index.css'
import headerImg from '../img/Header-img(1).webp'
import headetHP from '../img/img-hp-airo-logo.svg'
import HeaderImg2 from '../img/Header-img(2).webp'

function NavBar() {
    return (
        <>
            <header className="tw-text-white tw-body-font">
                <nav className="navbar navbar-expand-lg bg-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} className="tw-w-44" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link tw-mx-4" aria-current="page" href="#">Domains</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tw-mx-4" href="#">Websitesn and Hosting</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tw-mx-4" href="#">Email</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tw-mx-4" aria-disabled="true">Sequrity</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tw-mx-4" aria-disabled="true">Marketing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tw-mx-4" aria-disabled="true">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br />

                <section className="tw-relative">
                    <div className="tw-container tw-px-3 tw-flex sm:tw-flex-nowrap tw-flex-wrap tw-h-auto HeaderImg">
                        <div className="lg:tw-w-2/3 max-md:tw-w-8/12 sm:tw-w-2/3 tw-rounded-3xl tw-overflow-hidden sm:tw-mr-10 tw-flex tw-items-end tw-justify-start tw-relative HeaderImg-div1">
                            <img src={headerImg} id='img' />
                            <img src={HeaderImg2} id='img1' className='tw-rounded-3xl' />
                            <div className='tw-absolute tw-top-6 tw-left-7 tw-text-black'>
                                <button className='btn btn-light'>NEW</button>
                                <img src={headetHP} className="tw-py-4 tw-m-auto"  />
                                <h1 className='tw-text-5xl tw-font-bold tw-w-96 tw-leading-tight'>Buy a domain and get online fast with AI.
                                </h1>
                                <p className='tw-font-bold tw-w-96 tw-text-1xl tw-mt-3'>Buy a new domain and get  GoDaddy Airo™, our customizable, AI- powered solution that can easily deliver a website, logo, and more.^</p>
                                <button className="tw-bg-black tw-text-white tw-font-semibold tw-py-2 tw-px-2 tw-rounded-xl tw-mt-3">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="lg:tw-w-1/3 max-md:tw-w-4/12 sm:tw-w-1/3 tw-rounded-3xl tw-bg-black tw-flex tw-flex-col md:tw-ml-auto tw-w-full md:tw-py-8 md:tw-mt-0 HeaderImg-div2">
                            <div className='tw-justify-center tw-text-center tw-text-white div-hideen'>
                                <button className="tw-bg-teal-500 tw-font-semibold tw-py-2 tw-px-2 tw-mt-12 tw-rounded-xl tw-w-44">
                                    GoDaddy AIRO <sup>TM</sup>
                                </button>
                                <h1 className='tw-text-2xl tw-pt-5 tw-font-black tw-w-52 tw-m-auto'>Get a .com with Airo™ — only $ 0.01*/1st yr</h1><br />
                                <p className='tw-font-bold tw-text-xl tw-w-72 md:tw-w-64 tw-m-auto'>3-year purchase required. Additional years $ 21.99*</p>
                                <button className="tw-bg-white tw-mt-5  tw-text-black tw-font-semibold tw-py-2 tw-px-2 tw-rounded-md">
                                    Try AI domain Search.
                                </button>
                            </div>
                            <div className='tw-text-white div-hideen1 tw-left-4 tw-relative'>
                                <button className="tw-bg-violet-300 tw-mt-7 tw-font-semibold tw-py-2 tw-px-2 tw-rounded-xl tw-w-44">
                                    GoDaddy AIRO <sup>TM</sup>
                                </button>
                                <h1 className='tw-text-2xl tw-font-black tw-pt-2 tw-w-96'>Get a .com with Airo™ — only $ 0.01*/1st yr</h1><br />
                                <button className="tw-bg-white tw-mt-2  tw-text-black tw-font-semibold tw-py-2 tw-px-2 tw-rounded-md">
                                    Try AI domain Search.
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </header>

        </>
    )
}

export default NavBar

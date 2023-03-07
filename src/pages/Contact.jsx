import React from 'react'

export default function Contact() {
  return (
    <div className='contact__container'>
        <h1 className='text-5xl md:mt-20 mt-10 font-semibold text-center text-headingColor'>Contact Us</h1>
        <p className='text-center mt-4'>Any question or remarks? Just write us a message</p>
    <div className="h-auto w-full grid place-items-center bg-slate-100">
        <div className="mt-10 rounded-md shadow-md flex md:flex-row flex-col bg-white">
            {/* contact information form */}
            <div className="flex-1 bg-rose-500 px-8 py-20 lg:px-10 md:hover:scale-y-110 rounded-md transition md:block" id="contact_info">
                <div className="flex justify-between">
                    <h2 className="text-white text-xl font-semibold">Contact Information</h2>
                    <h2 className="text-white text-xs flex flex-row md:hidden block cursor-pointer" id="swtich_to_contact_us">Contact Us <svg
                            xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg></h2>
                </div>
                <div className="mt-6 flex flex-row">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-200 mr-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-white text-sm">Name :</h2>
                        <p className="text-white text-xs">David Warner</p>
                    </div>
                </div>

                <div className="mt-4 flex flex-row">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-200 mr-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-white text-sm">Email :</h2>
                        <p className="text-slate-100 text-xs">davidwarner323@xyz.com</p>
                    </div>
                </div>

                <div className="mt-4 flex flex-row">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-200 mr-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-white text-sm">Phone :</h2>
                        <p className="text-slate-100 text-xs">123-456-789-01</p>
                    </div>
                </div>

                <div className="mt-5 flex flex-row">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-200 mr-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-white text-sm">Address :</h2>
                        <p className="text-slate-100 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
                            dolores.</p>
                    </div>
                </div>

            </div>


            {/* get in touch form */}
            <div className="flex-1 px-8 py-20 lg:py-24 lg:px-10" id="contact_us">
                <div className="flex justify-between">
                    <h2 className="text-rose-500 text-xl font-semibold ">Get In Touch</h2>
                    <h2 className="text-rose-500 text-xs flex flex-row md:hidden block cursor-pointer" id="swtich_to_contact_info">Contact Info <svg
                            xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg></h2>
                </div>
                <input type="text" placeholder="Enter Your Name"
                    className="w-full text-xs px-4 h-10 my-2 outline-none rounded-md border focus:shadow-sm" /><br />
                <input type="text" placeholder="Enter Your Email"
                    className="w-full text-xs px-4 h-10 my-2 outline-none rounded-md border focus:shadow-sm" /><br />
                <input type="text" placeholder="Subject"
                    className="w-full text-xs px-4 h-10 my-2 outline-none rounded-md border focus:shadow-sm" /><br />
                <textarea placeholder="Enter your Message here"
                    className="w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none"></textarea><br />
                <button type="submit"
                    className="bg-rose-500 hover:bg-rose-400 px-8 py-2 rounded-md text-white cursor-pointer hover:shadow-md">
                    Send
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

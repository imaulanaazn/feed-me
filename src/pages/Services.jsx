import React from 'react'
import service1 from '../img/dine-in.jpg';
import service2 from '../img/drive-thru.jpg';
import service3 from '../img/delivery.jpg';
import service4 from '../img/catering.jpg';
export default function Services() {
  return (
    <main 
    className="">
        <section className="jumbotron-container bg-[url('https://png2.cleanpng.com/sh/602f9cd27b45eef718b4d32fc8943817/L0KzQYq3VsE2N51qiJH0aYP2gLBuTfEzNZ1mjNc2bnnqeMW0hv9wbF5pfd5ydnX1iX75hgN1aaZ3edD9LXTofLr9hgJ6NZD3fNd7LYDxd379hfN1d6Mye95ycHH1hH73kBQueJZ0iN5ucH6wRbW3VPYybGUAUKoBNUmxSIG6WcAyPWE2Tag5NkC4QYW3VsI1QF91htk=/kisspng-a2-late-night-food-delivery-restaurant-delivery-order-png-vector-clipart-psd-peoplepn-5d04f1d4988659.8039015015606051406248.png')]
                bg-no-repeat lg:bg-right-bottom md:bg-top-center bg-top-right lg:bg-[length:40rem] md:bg-[length:25rem] bg-contain lg:py-36 md:pt-96 pt-80">
            <h1 className='font-bold md:text-6xl text-4xl text-headingColor'>
                We Provide <br /> Different <br /> 
                <span className="text-rose-600">
                    Type of Services
                </span>
            </h1>
            <p className='text-base max-w-md my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit iusto consequuntur porro recusandae ratione laborum veritatis accusamus.</p>
            <button className="bg-rose-500 font-semibold text-white py-3 px-8 rounded-full uppercase tracking-wider hover:bg-rose-400 transition-colors duration-300">
                Order Now
            </button>
        </section>

        <section className='services mt-20'>
            <h1 className='md:text-4xl text-3xl font-bold text-center my-24 text-headingColor'>We Provide Various Services</h1>
            <div className="service  mt-10 md:flex items-center justify-center gap-20">
                <div className='flex-1'>
                    <img src={service1} alt="" className='w-96 ml-auto' />
                </div>
                <div className="service__text flex-1 md:mt-0 mt-5">
                    <h1 className='text-headingColor text-2xl font-semibold mb-4'>Dine in and Take out</h1>
                    <p className='max-w-md'>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Rem aliquid suscipit accusamus 
                        repellendus distinctio. Voluptatibus soluta 
                        veniam harum vel nisi?
                    </p>
                </div>
            </div>

            <div className="service  mt-20 flex md:flex-row flex-col-reverse items-center justify-center md:gap-20">
                <div className="service__text flex-1 md:mt-0 mt-5">
                    <h1 className='text-headingColor text-2xl font-semibold text-right mb-4'>Popup Service</h1>
                    <p className='max-w-md ml-auto text-right'>
                        Kini pesan menu Bakmi GM lebih mudah dengan layanan 
                        POP UP Service! Kamu tidak perlu turun ke store, 
                        cukup pesan di mobil, lalu pesananmu akan 
                        diantar oleh petugas.
                    </p>
                </div>
                <div className='flex-1'>
                    <img src={service2} alt="" className='w-96 mr-auto' />
                </div>
            </div>

            <div className="service  mt-20 md:flex items-center justify-center gap-20">
                <div className='flex-1'>
                    <img src={service3} alt="" className='w-96 ml-auto' />
                </div>
                <div className="service__text flex-1 md:mt-0 mt-5">
                    <h1 className='text-headingColor text-2xl font-semibold mb-4'>Anda Lapar. Kami Antar.</h1>
                    <p className='max-w-md'>
                        Macet? Hujan? Tenang, kamu tetap bisa menikmati menu favorit, 
                        hanya dengan pesan melalui Bakmi GM atau melalui
                         hotline 1.500.677. Pesan sekarang!
                    </p>
                </div>
            </div>

            <div className="service  mt-20 flex md:flex-row flex-col-reverse items-center justify-center gap-20">
                <div className="service__text flex-1 md:mt-0 mt-5">
                    <h1 className='text-headingColor text-2xl font-semibold text-right mb-4'>Catering</h1>
                    <p className='max-w-md ml-auto text-right'>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Rem aliquid suscipit accusamus 
                        repellendus distinctio. Voluptatibus soluta 
                        veniam harum vel nisi?
                    </p>
                </div>
                <div className='flex-1'>
                    <img src={service4} alt="" className='w-96 mr-auto' />
                </div>
            </div>
        </section>

        <section className="booth">
            Ramaikan Event mu Dengan Booth atau food truck kami

            button 
        </section>

    </main>
  )
}

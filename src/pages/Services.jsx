import React from 'react'
import service1 from '../img/i1.png';
export default function Services() {
  return (
    <main 
    className="py-36">
        <section className="jumbotron-container bg-[url('https://png2.cleanpng.com/sh/602f9cd27b45eef718b4d32fc8943817/L0KzQYq3VsE2N51qiJH0aYP2gLBuTfEzNZ1mjNc2bnnqeMW0hv9wbF5pfd5ydnX1iX75hgN1aaZ3edD9LXTofLr9hgJ6NZD3fNd7LYDxd379hfN1d6Mye95ycHH1hH73kBQueJZ0iN5ucH6wRbW3VPYybGUAUKoBNUmxSIG6WcAyPWE2Tag5NkC4QYW3VsI1QF91htk=/kisspng-a2-late-night-food-delivery-restaurant-delivery-order-png-vector-clipart-psd-peoplepn-5d04f1d4988659.8039015015606051406248.png')]
                bg-no-repeat bg-right-bottom">
            <h1 className='font-bold text-6xl'>We Provide <br /> Different <br /> Type of Services</h1>
            <p className='text-sm max-w-md my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit iusto consequuntur porro recusandae ratione laborum veritatis accusamus.</p>
            <button className='py-3 px-6 rounded-full bg-orange-400'>Buy now</button>
        </section>

        <section className='services mt-20'>
            <h1 className='text-4xl font-bold text-center my-24'>We Provice Various Services</h1>
            <div className="service flex items-center justify-center gap-20">
                <div className='flex-1'>
                    <img src={service1} alt="" className='w-96 ml-auto' />
                </div>
                <div className="service__text flex-1">
                    <h1 className='text-2xl font-semibold mb-4'>Dine in and Take out</h1>
                    <p className='max-w-md'>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Rem aliquid suscipit accusamus 
                        repellendus distinctio. Voluptatibus soluta 
                        veniam harum vel nisi?
                    </p>
                </div>
            </div>

            <div className="service flex items-center justify-center gap-20">
                <div className="service__text flex-1">
                    <h1 className='text-2xl font-semibold text-right mb-4'>Popup Service</h1>
                    <p className='max-w-md ml-auto text-right'>
                        Kini pesan menu Bakmi GM lebih mudah dengan layanan 
                        POP UP Service! Kamu tidak perlu turun ke store, 
                        cukup pesan di mobil, lalu pesananmu akan 
                        diantar oleh petugas.
                    </p>
                </div>
                <div className='flex-1'>
                    <img src={service1} alt="" className='w-96 mr-auto' />
                </div>
            </div>

            <div className="service flex items-center justify-center gap-20">
                <div className='flex-1'>
                    <img src={service1} alt="" className='w-96 ml-auto' />
                </div>
                <div className="service__text flex-1">
                    <h1 className='text-2xl font-semibold mb-4'>Anda Lapar. Kami Antar.</h1>
                    <p className='max-w-md'>
                        Macet? Hujan? Tenang, kamu tetap bisa menikmati menu favorit, 
                        hanya dengan pesan melalui Bakmi GM atau melalui
                         hotline 1.500.677. Pesan sekarang!
                    </p>
                </div>
            </div>

            <div className="service flex items-center justify-center gap-20">
                <div className="service__text flex-1">
                    <h1 className='text-2xl font-semibold text-right mb-4'>Catering</h1>
                    <p className='max-w-md ml-auto text-right'>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Rem aliquid suscipit accusamus 
                        repellendus distinctio. Voluptatibus soluta 
                        veniam harum vel nisi?
                    </p>
                </div>
                <div className='flex-1'>
                    <img src={service1} alt="" className='w-96 mr-auto' />
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

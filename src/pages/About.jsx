import React from "react";
import mainImg from '../img/plate-of-food.png'
import burger from '../img/burger.png'
import meal from '../img/meal.png'
import flavor1 from '../img/f1.png'
import flavor2 from '../img/f2.png'
import flavor3 from '../img/f3.png'
import flavor4 from '../img/f4.png'
import cheff1 from '../img/cheff.png'
import cheff2 from '../img/chef1.png'

const About = () => {
  return (
    <main>
      <section className="jumbortron-container w-full">
        <div className="w-full flex items-center justify-center md:flex-row flex-col">
          <div className="flex-1 flex justify-end md:block hidden">
            <h1 className="lg:text-7xl md:text-4xl font-bold uppercase tracking-wider -rotate-180" style={{writingMode:"vertical-rl"}}>
              Delicious <br />
              Food
            </h1>
          </div>
          <img
            className="mb-4 flex-auto "
            src={mainImg}
            alt="Food"
          />
          <p className="text-slate-800 md:text-left text-center leading-7 mb-4 max-w-[20rem] flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris vitae dui venenatis, nec auctor nulla convallis.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-rose-500 font-semibold text-white py-3 px-8 rounded-full uppercase tracking-wider hover:bg-rose-400 transition-colors duration-300">
            Order Now
          </button>
        </div>
      </section>

      <section className="about-us mt-24">
        <h1 className="about-us__title text-center font-semibold text-3xl">About Us</h1>
        <p className="about-us__subtitle text-center max-w-lg mx-auto text-slate-800 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Unde, dolor tempore! Illum sunt eius unde 
          harum
        </p>
        <div className="about-us__quality quality mt-20">
          <div className="about-us__row1 flex justify-center items-center gap-10 md:flex-row flex-col">
            <div className="text-grup tasty md:self-end">
              <h1 className="font-semibold text-xl">TASTY</h1>
              <p className="max-w-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Sed ratione
              </p>
            </div>
            <img src={mainImg} alt="" className="w-72" />
            <div className="text-grup fresh">
              <h1 className="font-semibold text-xl">FRESH</h1>
              <p className="max-w-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="about-us__row2 flex justify-center md:items-start items-center md:gap-40 gap-10 mt-20 md:flex-row flex-col">
            <img src={burger} alt="" className="w-72"/>
            <img src={meal} alt="" className="w-72"/>
          </div>

          <div className="about-us__row3 text-grup natural w-max mx-auto mt-10">
              <h1 className="font-semibold text-xl">NATURAL</h1>
              <p className="max-w-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Accusantium ipsa accusamus tempora
              </p>
          </div>
        </div>
      </section>

      <section className="how-its-made grid md:grid-rows-2 md:grid-cols-3 grid-rows-5 grid-cols-1 md:gap-12 gap-6 mt-24 items-center">
        <div className="how-its-made__text md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
          <h1 className="font-medium text-4xl">How it's made?</h1>
          <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Tempora soluta nostrum eveniet ipsa, 
            repellendus reprehenderit tenetur 
            quis veritatis corrupti distinctio?
          </p>
          <button className="py-2 px-6 bg-rose-500 font-semibold text-white rounded-full">Order now</button>
        </div>

          <div className="how-its-made__flavor text-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:self-end">
            <img src={flavor1} alt="" className="w-28 mx-auto"/>
            <h1 className="font-semibold text-md mt-4 mb-2">Corn Flour</h1>
            <p className="max-w-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, suscipit!</p>
          </div>
          <div className="how-its-made__flavor text-center md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:self-end">
            <img src={flavor2} alt="" className="w-28 mx-auto"/>
            <h1 className="font-semibold text-md mt-4 mb-2">Soy Flakes</h1>
            <p className="max-w-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, fugiat.</p>
          </div>
          <div className="how-its-made__flavor text-center md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:self-end">
            <img src={flavor3} alt="" className="w-28 mx-auto"/>
            <h1 className="font-semibold text-md mt-4 mb-2">Oat Flakes</h1>
            <p className="max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, harum.</p>
          </div>
          <div className="how-its-made__flavor text-center md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 md:self-end">
            <img src={flavor4} alt="" className="w-28 mx-auto"/>
            <h1 className="font-semibold text-md mt-4 mb-2">Olive Oil</h1>
            <p className="max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, molestiae.</p>
          </div>
      </section>

      <section className="best-chef md:flex justify-center mt-20 gap-28">
        <div className="flex-1">
          <img src={cheff1} alt="" className="w-40 md:ml-auto mx-auto"/>
        </div>
        <div className="best-chef__text flex-1 md:mt-0 mt-10">
          <h1 className="font-medium text-4xl">Best Chef in Field</h1>
          <p className="max-w-sm my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Quasi perspiciatis enim esse sapiente minus hic. 
             Est corporis beatae reiciendis earum.
          </p>
          <button className="py-2 px-6 bg-rose-500 font-semibold text-white rounded-full">Order now</button>
        </div>
      </section>

      <section className="discover-goodness flex md:flex-row flex-col-reverse justify-center md:gap-40 text-right mt-28">
        <div className="discover-goodness__text flex-1 self-center  md:mt-0 mt-10">
          <h1 className="font-medium text-4xl">Discover Goodness</h1>
            <p className="max-w-sm my-4 ml-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Provident consectetur nam animi minima cum mollitia 
              praesentium a eos officia voluptatem.
            </p>
            <button className="py-2 px-6 bg-rose-500 font-semibold text-white rounded-full">Order now</button>
        </div>
        <div className="flex-1">
          <img src={cheff2} alt="" className="w-40 md:mr-auto mx-auto"/>
        </div>
      </section>
    </main>
  )
}

export default About;
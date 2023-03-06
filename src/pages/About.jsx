import React from "react";
import mainImg from '../images/plate-of-food.png'
import burger from '../images/burger.png'
import meal from '../images/meal.png'
import flavor1 from '../img/f1.png'
import flavor2 from '../img/f2.png'
import flavor3 from '../img/f3.png'
import flavor4 from '../img/f4.png'
import cheff1 from '../img/cheff.png'
import cheff2 from '../img/chef1.png'

const About = () => {
  return (
    <main>
      <section className="jumbortron-container w-full h-screen">
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 flex justify-end">
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
          <p className="text-gray-700 leading-7 mb-4 max-w-[20rem] flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris vitae dui venenatis, nec auctor nulla convallis.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-400 font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-orange-300 transition-colors duration-300">
            Order Now
          </button>
        </div>
      </section>

      <section className="about-us">
        <h1 className="about-us__title text-center font-semibold text-3xl">About Us</h1>
        <p className="about-us__subtitle text-center max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Unde, dolor tempore! Illum sunt eius unde 
          harum
        </p>
        <div className="about-us__quality quality mt-20">
          <div className="about-us__row1 flex justify-center gap-10">
            <div className="text-grup tasty self-end">
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

          <div className="about-us__row2 flex justify-center gap-40 mt-20">
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

      <section className="how-its-made grid grid-rows-2 grid-cols-3 gap-12 mt-24 items-center">
        <div className="how-its-made__text col-start-1 col-end-2 row-start-1 row-end-3">
          <h1 className="font-medium text-4xl">How it's made?</h1>
          <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Tempora soluta nostrum eveniet ipsa, 
            repellendus reprehenderit tenetur 
            quis veritatis corrupti distinctio?
          </p>
          <button className="py-2 px-4 bg-orange-300 font-semibold">Order now</button>
        </div>

          <div className="how-its-made__flavor text-center col-start-2 col-end-3 row-start-1 row-end-2 self-end">
            <img src={flavor1} alt="" className="w-28 mx-auto"/>
            <h1 className="font-semibold text-md mt-4 mb-2">Corn Flour</h1>
            <p className="max-w-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, suscipit!</p>
          </div>
          <div className="how-its-made__flavor text-center col-start-3 col-end-4 row-start-1 row-end-2 self-end">
            <img src={flavor2} alt="" className="w-28 mx-auto"/>
            <h1 className="font-semibold text-md mt-4 mb-2">Soy Flakes</h1>
            <p className="max-w-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, fugiat.</p>
          </div>
          <div className="how-its-made__flavor text-center col-start-2 col-end-3 row-start-2 row-end-3 self-end">
            <img src={flavor3} alt="" className="w-28 mx-auto"/>
            <h1 className="font-semibold text-md mt-4 mb-2">Oat Flakes</h1>
            <p className="max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, harum.</p>
          </div>
          <div className="how-its-made__flavor text-center col-start-3 col-end-4 row-start-2 row-end-3 self-end">
            <img src={flavor4} alt="" className="w-28 mx-auto"/>
            <h1 className="font-semibold text-md mt-4 mb-2">Olive Oil</h1>
            <p className="max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, molestiae.</p>
          </div>
      </section>

      <section className="best-chef flex justify-center mt-20 gap-28">
        <div className="flex-1">
          <img src={cheff1} alt="" className="w-40 ml-auto"/>
        </div>
        <div className="best-chef__text flex-1">
          <h1 className="font-medium text-4xl">Best Chef in Field</h1>
          <p className="max-w-sm my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Quasi perspiciatis enim esse sapiente minus hic. 
             Est corporis beatae reiciendis earum.
          </p>
          <button className="py-2 px-4 bg-orange-300 font-semibold">Order now</button>
        </div>
      </section>

      <section className="discover-goodness flex justify-center gap-40 text-right mt-28">
        <div className="discover-goodness__text flex-1 self-center">
          <h1 className="font-medium text-4xl">Discover Goodness</h1>
            <p className="max-w-sm my-4 ml-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Provident consectetur nam animi minima cum mollitia 
              praesentium a eos officia voluptatem.
            </p>
            <button className="py-2 px-4 bg-orange-300 font-semibold">Order now</button>
        </div>
        <div className="flex-1">
          <img src={cheff2} alt="" className="w-40 mr-auto"/>
        </div>
      </section>
    </main>
  )
}

export default About;
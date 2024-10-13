import React from "react";
import hero from '../../assets/hero-1.jpg'
import { Link } from "react-router-dom";
import purp from '../../assets/purple.jpeg'
import en from '../../assets/engage.png'
import './index.css'

export default function FeatureCard({cards = [1,2,3]}) {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto  relative ">
        <img src={purp} className="invisible absolute w-1/2 -z-50 w-96 md:visible md:left-1/3 md:w-3/5   " alt="food" />
        <img src={en} className="eng invisible absolute w-1/2 -z-50 w-96 md:visible md:left-1/3 md:w-3/5 md:top-1/3 lg:top-2/3   " alt="food" />
          {
            cards?.map((card)=>{
              return(
                <div className="flex flex-wrap -m-4 " key={card}>
              <Link to={`/categories/${card}`} className="p-4 md:w-1/3 cursor-pointer">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    {card}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <button className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          </div>
              )
            })
          }
        </div>
      </section>
    </div>
  );
}

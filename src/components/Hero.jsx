import Button from "./Button"
import {arrowRight} from '../../assets/icons/index'
import {statistics} from '../../constants/index'
import {bigShoe1} from '../../assets/images/index'

const Hero = () => {
  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
      className="relative flex flex-col justify-center items-start w-full max-xl:paddding-x pt-28"
      >
        <p
        className="text-xl font-montserrat text-coral-red"
        >Our Summer Collection</p>
        <h1
        className="mt-10 font-palanquin text-8xl max-sm:text-[7px] max-sm:leading[82] font-bold">
          <span
          className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival</span> <br></br>
          <span
          className="text-coral-red inline-block mt-3">
            Nike </span> 
          Shoes 
          </h1>
          <p
          className="font-montesserat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort and the innovation for your active life</p>
          <Button 
          label="Shop Now"
          iconURL={arrowRight}
          />

          <div
           className="flex justify-start items-start w-full mt-20 gap-16"
           >
          {statistics.map((stat) => (
            <div key={stat.label}>
             <p
             className="text-4xl font-palanquin font-bold">
              {stat.label}
              </p>
             <p
              className="leading-7 font-montserrat text-slate-gray">
              {stat.value}
              </p>
            </div>
          ))}

          </div>

      </div>
      <div>
        <img
         src= {bigShoe1}
         alt="shoe collection"
          />
      </div>

    </section>
  )
}

export default Hero
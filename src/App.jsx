import React from 'react'
import CustomerReview from "./components/CustomerReview"
import Nav from './components/Nav'
import PopularProducts from './components/PopularProducts'
import SpecialOffers from './components/SpecialOffers'
import Services from './components/Services'
import Subscription from './components/Subscription'
import SuperQuality from './components/SuperQuality'
import Footer from "./components/Footer"
import Hero from './components/Hero'


const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className="padding">
       <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
       <SpecialOffers />
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
       <Subscription />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
       <Footer />
      </section>
    </main>
  )
}

export default App
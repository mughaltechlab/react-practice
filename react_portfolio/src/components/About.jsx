import React from 'react'
import aboutImg from '../assets/about.jpg'

function About() {
  return (
    <section className="text-white max-w-[1200px] mx-auto my-12" id="about">

        <div className="md:grid md:grid-cols-2 sm:py-16">
            {/* about me text */}
            <div className="mt-4 md:mt-0 text-left flex">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">About me</h2>
                    <p className="text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident impedit enim accusamus ipsam vitae dolorum ea laboriosam tempora at velit, sed totam amet doloribus nostrum recusandae blanditiis iure corrupti fugit autem quod incidunt a pariatur expedita. Reiciendis minima voluptatem sequi, odio non fugiat, quae veritatis est quos reprehenderit ea? Voluptates iste reprehenderit dolorem iusto, nulla consequatur nesciunt ex nihil minus dolorum illo unde aliquid amet, laboriosam ipsa tempore. Corporis cumque itaque id ad explicabo, voluptatum, possimus tempore corrupti totam, alias unde. Labore ea at perferendis temporibus culpa doloremque pariatur! Assumenda repudiandae repellat quisquam totam omnis ex nesciunt reprehenderit blanditiis tempora!
                    </p>
                </div>
            </div>
            {/* image */}
            <img src={aboutImg} alt="" className="mx-auto rounded-3xl py-8 md:py-0" width={300} height={300} />
        </div>

        
    </section>
  )
}

export default About
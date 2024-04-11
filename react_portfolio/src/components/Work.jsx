import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'

function Work() {
  return (
    <section className="max-w-[1200px] mx-auto p-5" id='work'>
        <div className="pb-8">
            <p className="primary-color text-4xl font-bold mb-3">Work</p>
            <p className="text-gray-400">Check out some of my recent work</p>
        </div>

        {/* projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* proj1 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj1} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj2 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj2} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj3 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj3} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj4 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj4} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj5 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj5} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj6 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj6} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default Work
import React from 'react'

function Nav() {
  return (
    <nav className=" fixed w-full z-10 bg-gray-50">
            <div className="w-full">
                <div className="flex items-center h-20 w-full">
                    <div className="flex items-center  md:mx-20 mx-5  justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0 ">
                            
                            <div>
                              <h1 className=" font-bold text-xl cursor-pointer md:-ml-12 font-Zen Dots">
                                <span className="">Pay</span>
                                <span className="text-violet-500">Wise</span>
                            </h1>  
                            </div>
                            
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 font-medium cursor-pointer ">
                                
                                <div className=' text-black hover:text-violet-900'>
                                    Discover
                                </div>
                                <div className=' text-black hover:text-violet-900'>
                                    Features
                                </div>
                                <div className=' text-black hover:text-violet-900'>
                                    Partners
                                </div>
                                <div className=' text-black hover:text-violet-900'>
                                    About us
                                </div>

                                <div className=' text-black hover:text-violet-900'>
                                    Contact
                                </div>
                                

                            </div>
                            
                        </div>
                        <div className='font-medium text-white bg-violet-900 p-2 rounded-full cursor-pointer hover:bg-indigo-700'> 
                            Get Started
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            
            
        </nav>
  )
}

export default Nav
import {TfiLineDashed} from 'react-icons/tfi'
import React from "react";
import Marquee from 'react-fast-marquee';
import Partner from './Partner';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Partner 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className=" min-h-screen bg-gray-50">
      <div className='flex flex-row gap-10 justify-center items-center mx-10 pt-32 '>
        <div>
          <h1 className='font-bold text-9xl text-violet-900'>PayWise</h1>
          <h1 className="font-medium text-4xl italic pt-5">No need to look over your shoulders <br/> when spending your money. </h1>
          <p className="font-thin text-2xl">Spending, saving, investing and sending money can be a daunting task <br/> especially when you have a lot on your mind. But with our tools <br/> and resources, you can do all of that without any noise or sweat.</p>
          <p className="font-medium text-xl">As the saying goes, L'argent n'aime pas le bruit. Sika mp3 dede.</p>
          <button className="p-3 bg-violet-900 text-white rounded-full mt-2">Get Started</button>
        </div>
        <div className='bg-gradient-to-t from-violet-700 to-gray-200 rounded-full w-1/3 h-1/2'> 
          <img className='' src='/images/zzz2.png' alt=""/>
        </div>
        
      </div>

      <h1 className="font-bold text-center pt-8 text-3xl ">Ho<span className="underline underline-offset-4 decoration-violet-500 decoration-4">w It Wor</span>ks</h1>

      <div className="flex flex-row gap-5 justify-center items-center pt-10 pb-4">
        <div>
          <div className="bg-blue-100 rounded-full">
            <img src="/images/sign-up.png" alt="" className="w-24 p-6 "/>
          </div>
          <p className='text-center text-gray-400'>Firstly <br/> sign up</p>
        </div>
        
        <TfiLineDashed className='w-24 text-3xl'/>
        <div>
          <div className="bg-violet-100 rounded-full">
          <img src="/images/add-friend.png" alt="" className="w-24 p-6"/>
          </div>
          <p className='text-center text-gray-400'>Create <br/> account</p>
        </div>
        
        <TfiLineDashed className='w-24 text-3xl'/>
        <div>
        <div className="bg-indigo-100 rounded-full">
        <img src="/images/credit-card.png" alt="" className="w-24 p-6"/>
        </div>
        <p className='text-center text-gray-400'>Add bank<br/>or Momo</p>
        </div>
        
        <TfiLineDashed className='w-24 text-3xl'/>
        <div>
        <div className="bg-green-100 rounded-full">
        <img src="/images/checked.png" alt="" className="w-24 p-6"/>
        </div>
        <p className='text-center text-gray-400'>All set <br/> & ready</p>
        </div>
       
      </div>

      <h1 className="font-bold text-center pt-8 text-3xl ">Ou<span className="underline underline-offset-4 decoration-violet-500 decoration-4">r Partne</span>rs</h1>

      <Marquee className='pt-5 pb-5'>
        {cards}
      </Marquee>


      
     
    </div>
    
  );
}

export default App;

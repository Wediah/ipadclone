import {MdKeyboardArrowRight} from 'react-icons/md'
import {TfiArrowCircleRight} from 'react-icons/tfi'

function App() {
  return (
    <div className="bg-black h-screen">
      <div>
        <h3 className="text-white text-center p-2 flex justify-center bg-gray-800 items-center">Save on iPad or Mac with education pricing. Plus get a gift card up to $150. <span className='text-blue-800 flex items-center hover:underline font-semibold cursor-pointer'> Shop now<MdKeyboardArrowRight/></span></h3>
      </div>

      <div className='flex '>
          <div className=''>
            <img src='/images/apple2.png' alt='apple ipad with final cut' className='object-left'/>
          </div>
          <div className='w-96'> 
            <h2 className='justify-center flex text-center text-2xl font-semibold text-white'>Introducing</h2>
            <h1 className=' flex items-center text-center justify-center text-4xl font-bold text-white'>Final Cut Pro <br/> and Logic Pro <br/> for iPad</h1>
            <p className='text-blue-800 flex items-center hover:underline font-semibold cursor-pointer justify-center'>Learn more about Final Cut Pro for iPad <MdKeyboardArrowRight/></p>
            <p className='text-blue-800 flex items-center hover:underline font-semibold cursor-pointer justify-center'>Learn more about Logic Pro for iPad <MdKeyboardArrowRight/></p>
            <p className='text-blue-800 flex items-center hover:underline font-semibold cursor-pointer justify-center gap-1'>watch the film <TfiArrowCircleRight/></p>
          </div>
          <div>
            <img   src='/images/apple3.png' alt='apple ipad with final cut'/>
          </div>
      </div>

    </div>
  );
}

export default App;

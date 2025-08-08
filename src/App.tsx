import Header from './components/header';
import Footer from './components/footer';
import Title from './components/title';
import main from './assets/images/main.png';
import woman from './assets/images/woman.jpeg';
import { motion } from "framer-motion";
import training from './assets/images/training.jpeg';
import ReserveSpot from './components/reserve-spot'

import './index.css'
function App() {


  return (
    <>
      <Header />
      <Title title="Train Hard." titletwo="Live Better" />
      <div className='flex border-t-1 bg-[#E9ECFF]'>
      <img src={main} alt="Main" className='w-[1300px]' />
      <div className='flex flex-col justify-between m-[20px]'>
        <span className='gap-[60px] text-5xl  font-[700]'>FOR THE COMMITTED</span>
        <div className='w-[400px] mb-[80px]'>
          <span className='font-[geist] whitespace-pre-wrap'>
            Train like an athlete with top-tier equipment and
            expert programming. Whether you're building
            muscle or breaking PRs, we help you push past limits.
          </span>
          <button className='bg-[#E9ECFF] border-2 border-[#4B4B4B] text-[#4B4B4B] py-2 hover:cursor-pointer hover:bg-black hover:text-white transition mt-[20px] px-4 rounded-md'>ABOUT US</button>
        </div>
      </div>
      </div>
      <div className='flex bg-[#E9ECFF]  '>
        <div className='flex flex-col justify-between border-r-1 p-8 bg-[#E9ECFF] border-b-1 w-3xl'>
          <span className='font-bold font-anek text-[45px]'>GUIDED BY EXPERTS</span>
          <div className='w-[400px] mb-15 '>
            <span className='whitespace-pre-wrap font-[500] font-[geist] '>
                We believe in creating a positive environment where you can thrive.
                We're here to help you achieve your goals and unlock your full potential.</span>
          </div>
        </div>
          <div className='flex flex-col justify-between p-8 bg-[#E9ECFF] border-b-1 w-3xl'>
          <span className='font-bold font-anek text-[45px]'>DYNAMIC OPEN GYM</span>
          <div className='w-[400px] mb-10 '>
            <span className='whitespace-pre-wrap  font-[500] font-[geist] '>Our facility is the optimal environment for strength training and performance, 
              fully equipped with top-of-the-line tools,
              ample training areas, and a focus on functional movement.</span>
          </div>
        </div>

        <motion.img src={woman} alt="Woman"  className='w-[606px]'
        initial={{ filter: "grayscale(100%)"  }}
        whileInView={{ filter: "grayscale(0%)" }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true, amount: 0.9 }}
         />
         
      </div>
      <Title title="JOIN THE " titletwo="‎ COMMUNITY" />

      <div className='border-b-1 flex flex-row bg-[#E9ECFF] '>
        <div className='flex flex-col flex-1'>
          <div className='flex p-10 border-t-1 h-[200px]'>
            <div className=' w-[400px]'>
              <span className='text-[40px] font-[inter] font-bold'>DISCOVER YOUR POTENCIAL</span>
            </div>
          </div>
          <div className='flex align-center justify-center flex-col p-10 border-t-1 h-[200px]'>
            <span className='font-[inter] text-[20px] font-bold'>EXPERT COACHING</span>
            <span className='font-[geist] text-[15px]'>Trainers who are passionate about your progress.</span>
          </div>
          <div className='justify-center align-center flex flex-col p-10 border-t-1 h-[200px]'>
            <span className='font-[inter] text-[20px] font-bold'>RESULTS-DRIVEN PROGRAMS</span>
            <span className='font-[geist] text-[15px]'>
                Workouts that deliver tangible, measurable results.</span>
          </div>
          <div className='justify-center align-center flex flex-col p-10 border-t-1 h-[200px]'>
            <span className='font-[inter] text-[20px] font-bold'>A SUPPORTIVE TRIBE</span>
            <span className='font-[geist] text-[15px]'>
                A community that pushes you to be your best.</span>
          </div>
                    <div className='justify-center align-center flex flex-col p-10 border-t-1 h-[200px]'>
            <span className='font-[inter] text-[20px] font-bold'>A SUPPORTIVE TRIBE</span>
            <span className='font-[geist] text-[15px]'>
                A community that pushes you to be your best.</span>
          </div>

        </div>
        <motion.img className='w-[1250px]  shrink-1 ' src={training}/>
      </div>
      <ReserveSpot />
      <Footer />

    </>
  )
}

export default App;

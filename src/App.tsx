import Header from './components/header';
import Footer from './components/footer';
import Title from './components/title';
import main from './assets/images/main.png';
import woman from './assets/images/woman.jpeg';
import { motion } from "framer-motion";
import training from './assets/images/training.jpeg';
import ReserveSpot from './components/reserve-spot'
import TextCard from './components/text-card';
import BigCards from './components/big-cards';

import './index.css'
function App() {


  return (
    <>
      <Header />
      <Title title="Train Hard. " titletwo="live Better" />
      <div className='flex border-t-1 bg-[#E9ECFF]'>
        <motion.img src={main} alt="Main" className='w-[70%]' />
        <BigCards isFirst title="FOR THE COMMITTED" subtitle="Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits." />
      </div>
      <div className='flex bg-[#E9ECFF] border-1 justify-between'>
        <BigCards title="DYNAMIC OPEN GYM" subtitle="Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement." />
        <BigCards title="GUIDED BY EXPERTS" subtitle="Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement." />
        <motion.img src={woman} alt="Woman" className='w-[30%]'
          initial={{ filter: "grayscale(100%)" }}
          whileInView={{ filter: "grayscale(0%)" }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true, amount: 0.9 }} />
      </div>
      <Title title="JOIN THE " titletwo="COMMUNITY" />

      <div className='border-b-1 flex flex-row bg-[#E9ECFF] '>
        <div className='flex flex-col justify-center flex-1 align-center'>
          <TextCard isFirst title='DISCOVER YOUR POTENTIAL' />
          <TextCard title='EXPERT COACHING' subtitle='Trainers who are passionate about your progress.' />
          <TextCard title='RESULTS DRIVEN PROGRAMS' subtitle='Workouts that deliver tangible, measurable results.'></TextCard>
          <TextCard title='A SUPPORTIVE TRIBE' subtitle='A community that pushes you to be your best.'></TextCard>
          <TextCard isLast />
        </div>
        <motion.img className='w-[65%]  shrink-1 ' src={training} />
      </div>
      <ReserveSpot color="#808CFD" title="WHAT WE BELIEVE IN" subtitle="JOIN THE PRIMAL TRIBE TODAY!" />
      <Footer />

    </>
  )
}

export default App;

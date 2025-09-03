import Logo from '../assets/images/logo.png'

function Footer () {

    return (
        <footer className="bg-[#E9ECFF] p-4 border-t-1">
           <div className='flex md:flex-row flex-col justify-between      pb-20'>
            <img src={Logo} alt="Logo" className="md:w-60 w-50 mb-3 md:mb-20"/>
             <h1 className=" text-6xl  font-instrument font-bold tracking-[-0.075em]">PrimalTraining</h1>
           </div>
           <div className='flex flex-col md:flex-row justify-between  md:px-5 gap-10'>
            <div>
                <p className=" text-start text-anek font-black text-[22px]">CONTACTS</p>
                <div className="flex flex-row mt-4">
                    <p className="text-anek text-start  font-semibold  ">Email:</p>
                    <p className="text-anek text-start  font-semibold hover:text-gray-400 transition ">‎ hello@figma.com</p>
                </div>
                <div className="flex flex-row">
                    <p className="text-anek text-start  font-semibold  ">Phone:</p>
                    <p className="text-anek text-start  font-semibold hover:text-gray-400 transition ">‎ (203) 555-5555</p>
                </div>
            </div>
            <div>
                <p className="text-start text-anek font-black text-[22px]">OPENING HOURS</p>
                <div className="flex md:w-full w-[80%] mt-4 flex-row justify-between">
                    <div>
                        <p className="text-anek text-start  font-bold  ">SATURDAYS</p>
                    </div>
                    <div>
                        <p className="text-anek text-start  font-bold  ">5:00 – 23:00</p>
                    </div>
                </div>
                <div className="flex md:w-full w-[80%] flex-row justify-between">
                    <div>
                        <p className="text-anek text-start  font-bold  ">SUNDAYS</p>
                    </div>
                    <div>
                        <p className="text-anek text-start  font-bold  ">8:00 – 16:00</p>
                    </div>
                </div>
                <div className="flex md:w-full w-[80%] flex-row justify-between">
                    <div>
                        <p className="text-anek text-start  font-bold  ">HOLIDAYS</p>
                    </div>
                    <div>
                        <p className="text-anek text-start  font-bold  ">8:00 – 13:00</p>
                    </div>
                </div>
                <div className="flex md:w-full w-[80%] flex-row justify-between">
                    <div>
                        <p className="text-anek text-start  font-bold  ">MON-FRI</p>
                    </div>
                    <div>
                        <p className="text-anek text-start font-bold ">8:00 – 16:00</p>
                    </div>
                </div>
            
            </div>
            <div>
                <p className="text-start text-anek font-black text-[18px] ">SOCIAL</p>
                <div className='flex flex-col mt-4' >
                    <a href="x" className="text-anek text-start underline underline-offset-1 font-bold hover:text-gray-400 transition  hover:underline">Instagram</a>
                    <a href="x" className="text-anek text-start underline underline-offset-1 font-bold hover:text-gray-400 transition  hover:underline">X</a>
                    <a href="x" className="text-anek text-start underline underline-offset-1 font-bold hover:text-gray-400 transition  hover:underline">LinkedIn</a>
                    <a href="x" className="text-anek text-start underline underline-offset-1 font-bold hover:text-gray-400 transition  hover:underline">Spotify</a>
                </div>
            </div>
           </div>
        </footer>
    )
}

export default Footer;


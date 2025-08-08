function Footer () {

    return (
        <footer className="bg-[#E9ECFF] justify-center border-t-1">
            <h1 className="text-center mt-2 text-[30px] text-[] font-instrument font-bold tracking-[-0.075em]">
                PrimalTraining
            </h1>
            <div className="h-130 md:h-100 md:mt-[200px] flex flex-col md:flex-row justify-evenly md:justify-between px-[50px] py-[10px]">
                <div className="flex flex-col">
                    <span className=" text-start text-anek font-bold text-[22px]">CONTACT</span>
                    <span className=" font-bold mt-1 md:mt-[20px]">Email: hello@figma.com</span>
                    <span className="font-bold ">Phone: (203) 555-55555</span>
                </div>

                <div className="flex flex-col">
                    <span className=" text-anek md:text-start font-bold text-[22px]">OPENING HOURS</span>
                        <div className="flex flex-row mt-1 md:mt-[20px] justify-between">
                            <span className="font-bold ">MON-FRI</span>
                            <span className="font-bold">5:00 - 23:00</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="font-bold">SUNDAYS</span>
                            <span className="font-bold">8:00 - 13:00</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="font-bold">HOLIDAYS</span>
                            <span className="font-bold">8:00 - 16:00</span>
                        </div>
                </div>

                <div className="flex flex-col ">
                    <span className=" text-start text-anek font-bold text-[22px]">SOCIAL</span>
                    <a className="md:text-start font-bold mt-1 md:mt-[20px]">Instagram</a>
                    <a className="font-bold md:text-start">X</a>
                    <a className="font-bold md:text-start">Linkedin</a>
                    <a className="font-bold md:text-start ">Spotify</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


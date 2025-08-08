function Footer () {

    return (
        <footer className="bg-[#E9ECFF] border-t-1">
            <h1 className="text-instrument font-bold tracking-[-0.075em] text-[52px] px-[50px] text-start py-4">PrimalTraining</h1>
            <div className="mt-[200px] flex flex-row justify-between px-[50px] py-[10px]">
                <div className="flex flex-col">
                    <span className="text-anek font-bold text-[22px]">CONTACT</span>
                    <span className="font-bold mt-[20px]">Email: hello@figma.com</span>
                    <span className="font-bold">Phone: (203) 555-55555</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-anek font-bold text-[22px]">OPENING HOURS</span>
                        <div className="flex flex-row mt-[20px] justify-between">
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

                <div className="flex flex-col justify-between">
                    <span className="text-anek font-bold text-[22px]">SOCIAL</span>
                    <a className="font-bold mt-[20px]">Instagram</a>
                    <a className="font-bold">X</a>
                    <a className="font-bold">Linkedin</a>
                    <a href="" className="font-bold ">Spotify</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


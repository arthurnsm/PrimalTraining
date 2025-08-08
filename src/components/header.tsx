function Header() {
  return (
    <header className="sticky top-0 z-50  shadow-sm bg-[#E9ECFF] flex justify-between border-b-1 place-items-center h-[80px] p-4 w-full md:w-auto">
      <h1 className="font-instrument font-bold text-[22px] tracking-[-0.075em]">PrimalTraining</h1>
      <div className="flex gap-[60px] ">
        <button className="font-mono font-[400] text-[16px] hover:cursor-pointer hover:text-neutral-500 transition">HOME</button>
        <button className="font-mono font-[400] text-[16px] hover:cursor-pointer hover:text-neutral-500 transition">ABOUT</button>
        <button className="font-mono font-[500] text-[16px] w-[200px] h-[40px] rounded-md bg-[#888cfc] text-black hover:cursor-pointer hover:bg-[#000] hover:text-white transition" >RESERVE YOUR SPOT</button>
      </div>
    </header>
  );
}

export default Header;
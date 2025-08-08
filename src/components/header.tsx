function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-sm bg-[#E9ECFF] flex justify-between items-center h-[80px] px-4 w-full border-b">
      <h1 className="font-instrument font-bold text-[20px] md:text-[22px] tracking-[-0.075em]">PrimalTraining</h1>

      {/* Mobile: esconde os botões. Desktop: mostra */}
      <div className="hidden md:flex gap-[60px]">
        <button className="font-mono font-[400] text-[16px] hover:text-neutral-500 transition">HOME</button>
        <button className="font-mono font-[400] text-[16px] hover:text-neutral-500 transition">ABOUT</button>
        <button className="font-mono font-[500] text-[16px] w-[200px] h-[40px] rounded-md bg-[#888cfc] text-black hover:bg-black hover:text-white transition">
          RESERVE YOUR SPOT
        </button>
      </div>

      {/* Mobile: botão "RESERVE" visível */}
      <div className="md:hidden">
        <button className="text-sm px-4 py-2 rounded bg-[#888cfc] text-black hover:bg-black hover:text-white transition">
          Reserve
        </button>
      </div>
    </header>
  );
}

export default Header;
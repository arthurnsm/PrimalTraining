interface ReserveProps {
  color: string;
  title: string
  subtitle: string

}

function ReserveSpot({color, title, subtitle}: ReserveProps) {
  return (
    <div className={`flex h-130 justify-center flex-col items-center bg-[${color}] p-10`}>
      <p className="mb-4 text-lg">{title}</p>
      <h2 className="mb-4 text-5xl font-bold ">{subtitle}</h2>
      <button className="font-mono font-[500] text-[16px] w-[200px] h-[40px] rounded-md bg-[#ffffff] text-black hover:cursor-pointer hover:bg-[#000] hover:text-white transition" >RESERVE YOUR SPOT</button>
    </div>
  );
}
export default ReserveSpot;
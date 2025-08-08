interface TextProps {
    title: string;
    subtitle?: string;
    isFirst?: boolean;
}

function BigCards({ title, subtitle, isFirst = false }: TextProps) {
    return (
        <div className='flex md:border-l-1 border-b-1 md:w-[30%] flex-col justify-between '>
            <div className="flex flex-col  justify-between p-4 md:p-8 bg-[#E9ECFF]  h-[100%]">
                <div className='flex flex-col  justify-between h-[100%]'>
                    <span className='gap-[60px] text-2xl md:text-5xl  font-bold '>
                        {title}
                    </span>

                    <span className='font-[geist] whitespace-pre-wrap mt-[15px] mb-[20px] md:mb-[30px]'>
                        {subtitle}
                    </span>
                </div>
                {isFirst && (
                    <button className='bg-[#E9ECFF] border-2 border-[#4B4B4B] text-[#4B4B4B] py-2 hover:cursor-pointer hover:bg-black hover:text-white transition mt-[20px] px-4 rounded-md'>ABOUT US</button>
                )}
            </div>
        </div>

    )
}

export default BigCards
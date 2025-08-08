interface TextProps {
    title: string;
    subtitle?: string;
    isFirst?: boolean;
}

function BigCards({ title, subtitle, isFirst = false }: TextProps) {
    return (
        <div className='flex border-l-1 w-[30%] flex-col justify-between '>
            <div className="flex flex-col justify-between p-8 bg-[#E9ECFF]  h-[100%]">
                <div className='flex flex-col justify-between h-[100%]'>

                    <span className='gap-[60px] text-5xl  font-[700]'>
                        {title}
                    </span>

                    <span className='font-[geist] whitespace-pre-wrap mb-[30px]'>
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
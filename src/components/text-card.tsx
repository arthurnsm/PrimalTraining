interface Props {
    isFirst?: boolean;
    title?: string;
    subtitle?: string;
    isLast?: boolean;
}
function TextCard({ isFirst = false, isLast = false, title, subtitle }: Props) {
    return (
        <div className='  flex p-10 items-center align-center border-t-1 h-[180px]'>
            <div className=' w-[400px]'>
                {isFirst ? (
                    <span className='text-[20px] md:text-[40px] font-[inter] font-bold'>{title}</span>
                ) : (
                    <div className="flex flex-col justify-center align-center">
                        <span className='md:text-[24px] font-[inter] font-bold'>{title}</span>
                        <span className='text-[15px] md:text-[17px] font-[inter] '>{subtitle}</span>
                    </div>
                )}
                {isLast && (
                    <div className="flex flex-col items-center justify-center gap-4 mt-4 md:flex-row">
                        <button className='bg-[#E9ECFF]  text-[#4B4B4B] py-2 hover:cursor-pointer hover:bg-black hover:text-white transition px-4  rounded-md'>
                            VIEW CLASSES
                        </button>
                    </div>
                )}
            </div>
        </div>

    );
}

export default TextCard;
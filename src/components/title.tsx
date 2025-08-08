    interface TitleProps {
        title: string;
        titletwo: string;
    }   


function Title ({title, titletwo}: TitleProps) {
    return (
    
    <section className="flex flex-row ms-6 ">
        <span className='font-anek uppercase font-[1000] md:text-[100px] text-[25px]'>{title}</span>
        <span className='md:ml-4 ml-2 font-anek uppercase font-[1000] md:text-[100px] text-[25px] text-[#808DFD]'>{titletwo}</span>
    </section>
    )
}

export default Title;
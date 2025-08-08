    interface TitleProps {
        title: string;
        titletwo: string;
    }   


function Title (props: TitleProps) {
    return (
    
    <section className="flex flex-row ms-6">
        <span className='font-anek uppercase font-[1000] text-[100px]'>{props.title}</span>
        <span className='font-anek uppercase font-[1000] text-[100px] text-[#808DFD]'> {props.titletwo}</span>
    </section>
    )
}

export default Title;
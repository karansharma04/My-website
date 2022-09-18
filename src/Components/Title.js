export default function Title(props) {
    return (
        <div className="text-[#B9B9B9] text-lg sm:text-2xl md:text-3xl lg:text-4xl pt-20">
            <span className="bg-black py-2 px-4">{props.children}</span>
        </div>
    )
}
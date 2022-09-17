export default function Title(props) {
    return (
        <div className="text-[#B9B9B9] text-4xl py-2 px-4 pt-20">
            <span className="bg-black">{props.children}</span>
        </div>
    )
}
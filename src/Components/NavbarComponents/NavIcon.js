export default function NavIcon({close}) {
    return (
        <div className={`flex flex-col items-center justify-center h-10 w-10 m-6`}>
            <div className={`bg-zinc-200 h-px w-10 ${close ? "-rotate-[135deg]" : "translate-y-3"} transition-all duration-500`}>
            </div>
            <div className={`bg-zinc-200 h-px w-10 ${close ? "rotate-[135deg] ": "-translate-y-3"} transition-all duration-500`}>
            </div>
        </div>
    )
}
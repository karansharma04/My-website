import clsx from "clsx"
export default function NavElement(props) {
    return (
        <div className="p-4">
            <div onClick={props.onClick} className={clsx("transition-all hover:text-white hover:cursor-pointer", props.className)}>
                {props.children}
            </div>
        </div>
    )
}
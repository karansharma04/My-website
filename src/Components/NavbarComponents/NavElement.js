import clsx from "clsx"
export default function NavElement(props) {
    return (
        <div onClick={props.onClick} className={clsx("p-4 transition-all hover:text-white hover:cursor-pointer", props.className)}>
            {props.children}
        </div>
    )
}
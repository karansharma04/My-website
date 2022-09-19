import clsx from "clsx";
export default function NavMenuItem(props) {
  return (
    <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl  w-full text-zinc-200 border-b-2 border-black flex pb-5 md:pb-10 justify-center">
      <div
        onClick={props.onClick}
        className={clsx(
          "transition-all duration-400 hover:text-yellow-100 hover:cursor-pointer",
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}

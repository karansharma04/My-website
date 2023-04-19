import { useState, useRef } from "react";
import { BsPlusLg } from "react-icons/bs";

export const Project = ({ title, body, className, bodyId }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleShowContent = () => {
    setShowContent(!showContent);
  };
  const firstRef = useRef(null);

  const bodyComponent = document.getElementById(bodyId);

  const componentHeight = showContent
    ? bodyComponent?.clientHeight
      ? bodyComponent.clientHeight + 40
      : 0
    : 0;

  const componentHeightString = componentHeight.toString() + "px";

  return (
    <div>
      <div className="flex gap-2 align-middle cursor-pointer">
        <div
          className="align-middle pt-1 text-color-hover"
          onClick={toggleShowContent}
        >
          <div
            className={`${
              showContent && "rotate-45 text-color-rotating-plus"
            } transition-all duration-400 ease-linear`}
          >
            <BsPlusLg />
          </div>
        </div>
        <div
          className="underline underline-offset-2"
          onClick={toggleShowContent}
        >
          {title}
        </div>
      </div>
      <div
        className={`px-6 ${
          showContent
            ? "py-4 bg-nav"
            : "bg-transparent text-transparent"
        }  transition-all duration-400 ease-linear`}
        style={{
          height: componentHeightString,
          transition: "height 0.15s ease-linear",
        }}
        ref={firstRef}
      >
        {body}
      </div>
    </div>
  );
};

import { Button } from "./Button";
import headshot from "../assets/images/headshot.png";
import { FaGithub } from "react-icons/fa";
import { Card } from "./Card";

type SetPropsType = {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BusinessCard = ({ setDisplayForm }: SetPropsType) => {
  return (
    <Card>
      <img
        className="rounded-full w-52 border-solid border-4 border-text bg-accent"
        src={headshot}
        alt="Jason Marshall Headshot"
      />

      <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-5">
        <div>
          <h1 className="text-center max-w md:text-left text-3xl text-text mb-1">
            Jason Marshall
          </h1>
          <p className="max-w-96 text-center md:max-w-none md:text-left text-text">
            I am a full stack developer specializing in WordPress and the MERN
            stack.
          </p>
        </div>
        <div className="flex flex-row justify-start items-center gap-5">
          <Button setDisplayForm={setDisplayForm} />
          <a href="https://github.com/JasonMarshall94" target="_blank">
            <FaGithub className="text-2xl text-text transition-colors hover:text-accent" />
          </a>
        </div>
      </div>
    </Card>
  );
};

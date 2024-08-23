import Button from "./Button";
import headshot from "../assets/images/headshot.png";

const BusinessCard = () => {
  return (
    <section className="container flex flex-col flex-wrap justify-center content-center gap-10 md:flex-row md:justify-center md:content-start bg-primary p-10 rounded-lg drop-shadow-lg">
      <img
        className="rounded-full w-52 border-solid border-4 border-text bg-accent"
        src={headshot}
        alt="Jason Marshall Headshot"
      />
      <div className="flex flex-2 flex-col justify-center content-start flex-1 gap-4">
        <div>
          <h1 className="text-3xl text-text mb-1">Jason Marshall</h1>
          <p className="text-text">
            I am a full stack developer specializing in WordPress, React, Node,
            and MongoDB.
          </p>
        </div>

        <Button />
      </div>
    </section>
  );
};

export default BusinessCard;

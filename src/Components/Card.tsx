type CardProps = {
  children: JSX.Element[];
  direction?: string;
};

const Card = ({ children, direction = "md:flex-row" }: CardProps) => {
  return (
    <section
      className={`container flex flex-col flex-wrap justify-center items-center gap-5 md:gap-10 ${direction} md:justify-center md:content-start bg-primary p-10 rounded-lg drop-shadow-lg`}
    >
      {children}
    </section>
  );
};

export default Card;

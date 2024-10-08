type CardProps = {
  children: JSX.Element | JSX.Element[];
  direction?: string;
};

export const Card = ({ children, direction = "md:flex-row" }: CardProps) => {
  return (
    <section
      className={`relative container h-fit flex flex-col flex-wrap justify-center items-center gap-5 md:gap-10 ${direction} md:justify-center bg-primary p-10 rounded-lg drop-shadow-lg`}
    >
      {children}
    </section>
  );
};

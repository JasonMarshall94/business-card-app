type SetPropsType = {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Button = ({ setDisplayForm }: SetPropsType) => {
  return (
    <button
      onClick={() => setDisplayForm(true)}
      className="inline-block text-text w-fit px-5 py-2 rounded-md border-accent border-2 transition-colors hover:border-text"
    >
      Contact Me
    </button>
  );
};

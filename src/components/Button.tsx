type SetPropsType = {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayThankYou: React.Dispatch<React.SetStateAction<boolean>>;
  innerText: string;
  displayForm: boolean;
  displayThankYou: boolean;
};

export const Button = ({
  setDisplayForm,
  setDisplayThankYou,
  innerText,
  displayForm,
  displayThankYou,
}: SetPropsType) => {
  const setDisplays = (form: boolean, thankYou: boolean) => {
    setDisplayForm(form);
    setDisplayThankYou(thankYou);
  };
  return (
    <button
      onClick={() => setDisplays(displayForm, displayThankYou)}
      className="inline-block text-text w-fit px-5 py-2 rounded-md border-accent border-2 transition-colors hover:border-text"
    >
      {innerText}
    </button>
  );
};

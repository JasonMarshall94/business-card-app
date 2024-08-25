import { Button } from "./Button";
import { Card } from "./Card";

type SetPropsType = {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayThankYou: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThankYou = ({
  setDisplayForm,
  setDisplayThankYou,
}: SetPropsType) => {
  return (
    <Card direction="md:flex-col">
      <h1 className="text-3xl text-text">Thank you for your submission.</h1>
      <p className="max-w-96 text-center text-text">
        I will be in touch with you shortly.
      </p>
      <Button
        setDisplayForm={setDisplayForm}
        setDisplayThankYou={setDisplayThankYou}
        innerText={"Back Home"}
        displayForm={false}
        displayThankYou={false}
      />
    </Card>
  );
};

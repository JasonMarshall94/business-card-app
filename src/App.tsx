import { BusinessCard } from "./components/BusinessCard";
import { ContactForm } from "./components/ContactForm";
import { useState } from "react";
import { ThankYou } from "./components/ThankYou";

export const App = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [displayThankYou, setDisplayThankYou] = useState(false);

  return (
    <div className="flex flex-col justify-center bg-secondary h-svh p-5">
      {!displayForm && !displayThankYou && (
        <BusinessCard
          setDisplayForm={setDisplayForm}
          setDisplayThankYou={setDisplayThankYou}
        />
      )}
      {displayForm && !displayThankYou && (
        <ContactForm
          setDisplayForm={setDisplayForm}
          setDisplayThankYou={setDisplayThankYou}
        />
      )}
      {!displayForm && displayThankYou && (
        <ThankYou
          setDisplayForm={setDisplayForm}
          setDisplayThankYou={setDisplayThankYou}
        />
      )}
    </div>
  );
};

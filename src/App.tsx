import BusinessCard from "./components/BusinessCard.tsx";
import ContactForm from "./components/ContactForm.tsx";
import { useState } from "react";

const App = () => {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div className="flex flex-col justify-center bg-secondary h-svh p-5">
      {!displayForm && <BusinessCard setDisplayForm={setDisplayForm} />}
      {displayForm && <ContactForm setDisplayForm={setDisplayForm} />}
    </div>
  );
};

export default App;

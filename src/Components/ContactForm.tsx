import { Card } from "./Card";
import { FaReply } from "react-icons/fa6";

type SetPropsType = {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
};

interface FormElements extends HTMLFormControlsCollection {
  yourInputName: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const ContactForm = ({ setDisplayForm }: SetPropsType) => {
  function handleSubmit(e: React.FormEvent<YourFormElement>) {
    e.preventDefault();
  }

  return (
    <Card direction="md:flex-col">
      <button
        onClick={() => setDisplayForm(false)}
        className="absolute left-4 top-4"
      >
        <FaReply className="text-text hover:text-accent" />
      </button>

      <h1 className="text-3xl text-text">Contact Me</h1>

      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        data-netlify-honeypot="bot-field"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="bg-primary p-2 w-full text-text rounded-md border-text border-2 focus:border-accent focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-primary p-2 w-full text-text rounded-md border-text border-2 focus:border-accent focus:outline-none"
          />
          <textarea
            name="message"
            id="Message"
            placeholder="Message"
            rows={4}
            cols={40}
            className="bg-primary p-2 w-full text-text rounded-md border-text border-2 focus:border-accent focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="text-text w-fit px-5 py-2 rounded-md border-accent border-2 transition-colors hover:border-text"
          >
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

import { Card } from "./Card";
import { FaReply } from "react-icons/fa6";

type SetPropsType = {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContactForm = ({ setDisplayForm }: SetPropsType) => {
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
          <div className="flex flex-row gap-5 items-start w-full">
            <div className="flex gap-2 items-start">
              <div className="grid place-items-center mt-1">
                <input
                  type="radio"
                  name="contactType"
                  value="FreelanceWork"
                  id="freelance"
                  className="peer cursor-pointer col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 border-2 border-text rounded-full"
                />
                <div className="pointer-events-none col-start-1 row-start-1 w-2 h-2 rounded-full peer-checked:bg-accent"></div>
              </div>
              <label
                htmlFor="freelance"
                className="text-start text-text cursor-pointer"
              >
                Freelance Work
              </label>
            </div>
            <div className="flex gap-2 items-start">
              <div className="grid place-items-center mt-1">
                <input
                  type="radio"
                  name="contactType"
                  value="GeneralInquiry"
                  id="general"
                  className="peer cursor-pointer col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 border-2 border-text rounded-full"
                />
                <div className="pointer-events-none col-start-1 row-start-1 w-2 h-2 rounded-full peer-checked:bg-accent"></div>
              </div>
              <label
                htmlFor="general"
                className="text-start text-text cursor-pointer"
              >
                General Inquiry
              </label>
            </div>
          </div>
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

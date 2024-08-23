import Button from "./Components/Button";

function App() {
  return (
    <>
      <div className="container flex flex-col md:flex-row bg-white p-10 rounded-lg">
        <div className="flex-1">
          <h1 className="text3xl font-bold underline text-black">
            Business Card
          </h1>
        </div>
        <div className="flex flex-col justify-start content-start flex-1 gap-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ipsam, atque debitis, ullam eaque qui cumque, aliquid natus quos
            ipsum mollitia omnis voluptatum saepe. Ad.
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;

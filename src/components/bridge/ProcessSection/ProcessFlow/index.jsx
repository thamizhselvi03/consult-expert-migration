const ProcessFlow = (props) => {
  const { processFlow } = props;
  return (
    <div className="w-full relative flex flex-col justify-center">
      <div className="relative">
        <div className="flex justify-between gap-8">
          {processFlow.map((process, index) => (
            <div
              className="text-center relative w-full flex flex-col items-center"
              key={index}
            >
              <div
                className="w-[56px] h-[56px] text-[26px] text-black bg-white border-[1px] border-[#caced1] rounded-lg flex justify-center items-center"
                id={index === processFlow.length - 1 && "process-icon-last"}
              >
                <img src={process.icon} alt={process.name} />
              </div>
              <p>{process.name}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        className="absolute top-[30px] w-[80%] m-auto self-center -z-10 max-md:hidden"
        src="/dashed-line.svg"
        alt="vertical flow line"
      />
    </div>
  );
};

export default ProcessFlow;

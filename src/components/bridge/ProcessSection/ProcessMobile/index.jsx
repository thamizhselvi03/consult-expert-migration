const ProcessMobile = (props) => {
  const { processFlow } = props;
  return (
    <div className="process-flow-mobile">
      <h2 className="font-bold text-[24px] text-[#231f20]">Process</h2>
      <div className="ml-[23px] relative">
        <div className="flex flex-col items-start gap-6 mt-[18px]">
          {processFlow.map((process, index) => (
            <div className="flex items-center gap-[18px]" key={index}>
              <div className="w-[33px] h-[33px] text-[28px] text-black bg-white border-[1px] border-[#caced1] rounded-lg flex justify-center items-center">
                <img src={process.icon} alt={process.name} className="w-[65%]" />
              </div>
              <p>{process.name}</p>
            </div>
          ))}
        </div>
        <div className="absolute h-full top-[20px] left-[16.5px] -z-10">
          <img src="/vertical-flow-line.svg" alt="vertical flow line" />
        </div>
      </div>
    </div>
  );
};

export default ProcessMobile;

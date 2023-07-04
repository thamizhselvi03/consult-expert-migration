const Benefits = ({ data }) => {
  return (
    <ul className="my-[30px] md:my-[50px] mx-0 flex flex-col gap-4 md:gap-8">
      {data.benefits.map((content, index) => (
        <li className="flex justify-start items-center gap-3">
          <div className="mr-1" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#007aff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="m-0 text-[18px] text-[#606162]">{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Benefits;

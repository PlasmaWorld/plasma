import React from 'react';

// Define the type for the data prop
interface StepData {
  title: string;
  // include other properties of data if there are any
}

// Define the props for the StepCard component
interface StepCardProps {
  data: StepData;
  onReadArticle: () => void; // Assuming onReadArticle doesn't accept any arguments
}

const StepCard: React.FC<StepCardProps> = ({ data, onReadArticle }) => {
  const handleReadArticle = () => {
    // Directly call onReadArticle since it's always provided
    onReadArticle();
  };

  return (
    <div className='bg-white border border-white border-opacity-10 hover:bg-opacity-[0.15] transition duration-300 bg-opacity-5 rounded-2xl p-5'>
      <div className="h-24">
        <h2 className='text-xl font-semibold'>
          {data.title}
        </h2>
      </div>
      <hr className='border-zinc-700' />
      <button onClick={handleReadArticle} className='flex items-center gap-1 font-semibold text-sm mt-5'>
        Read article <span className='relative top-[1px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        </span>
      </button>
    </div>
  );
}

export default StepCard;

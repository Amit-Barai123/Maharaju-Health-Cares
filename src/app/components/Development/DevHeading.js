const DevelopmentHeader = ({title}) => {
    return (
      <div className="flex items-center justify-center py-6">
        <div className="flex items-center space-x-4">
          
          {/* Right Lines (Placed on the left side, rotated 180 degrees) */}
          <div className="flex flex-col space-y-1 transform rotate-180">
            <div className="w-10 h-[3px] bg-orange-500"></div>
            <div className="w-6 h-[3px] bg-orange-500"></div>
          </div>
  
          {/* Header Text */}
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 tracking-wide">{title}</h2>
  
          {/* Left Lines (Placed on the right side, no rotation) */}
          <div className="flex flex-col space-y-1">
           
            <div className="w-6 h-[3px] bg-orange-500"></div>
            <div className="w-10 h-[3px] bg-orange-500"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DevelopmentHeader;
  
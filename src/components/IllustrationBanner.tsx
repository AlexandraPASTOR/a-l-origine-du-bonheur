export default function IllustrationBanner() {
  return (
    <div className="w-full py-6 lg:py-0 flex justify-around items-center gap-3 md:gap-6">
      
      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden 
                      shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-(--block-color)/10 
                      border border-(--block-color)/60">
        <img
          src="/illustration/illustration-1.png"
          alt="Illustration 1"
          className="w-full h-full object-contain p-2 opacity-80"
        />
      </div>

      <div className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden
                      shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-(--block-color)/10 
                      border border-(--block-color)/60">
        <img
          src="/illustration/illustration-2.png"
          alt="Illustration 2"
          className="w-full h-full object-contain p-2 opacity-80"
        />
      </div>

      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden 
                      shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-(--block-color)/10 
                      border border-(--block-color)/60">
        <img
          src="/illustration/illustration-3.png"
          alt="Illustration 3"
          className="w-full h-full object-contain p-2 opacity-80"
        />
      </div>

    </div>
  );
}

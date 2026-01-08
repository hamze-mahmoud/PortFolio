export default function Slider({images,next,prev,trackRef}){
    return(
       
    <div className="relative col-span-12 md:col-span-7">
        <div className="overflow-hidden rounded-3xl bg-black/40 shadow-2xl h-[520px]">
  <div ref={trackRef} className="flex h-full">
    {images.map((img, i) => (
      <div
        key={i}
        className="w-full h-full flex-shrink-0 flex items-center justify-center"
      >
        <img
          src={img}
          alt="E-Commerce Project"
          className="
            max-w-full
            max-h-full
            object-contain
            transition-transform
            duration-700
            hover:scale-105
          "
          style={{
            imageRendering: "auto",
            backfaceVisibility: "hidden",
            filter: "contrast(1.05)",
          }}
        />
      </div>
    ))}
  </div>
</div>


          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-cyan-500 text-white w-12 h-12 rounded-full transition shadow-lg"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-cyan-500 text-white w-12 h-12 rounded-full transition shadow-lg"
          >
            ›
          </button>
        </div>
    
    )
}
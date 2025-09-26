import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ChevronLeft,
  ChevronRight,
  Eye,
  Star,
} from "lucide-react";
import React from "react";

function MovieSlider() {
  return (
    <section className="py-12" id="">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-baseline mb-8">
          <div className="text-2xl font-bold text-white md:text-3xl">
            <h2>Title</h2>
            <p className="text-neutral-400 text-sm mt-1">SubTitle</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-neutral-800/70 hover:bg-neutral-700 rounded-full p-1">
              <ChevronLeft className="text-white" />
            </button>
            <button className="bg-neutral-800/70 hover:bg-neutral-700 rounded-full p-1">
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
        {/* movie slider */}
        <div className="relative">
          <div className="flex space-x-4 overflow-x-hidden scrorllbar-hide pb-4 snap-x">
            {/* condintional rendering */}
            <div className="max-w-[200xp] md:max-w-[240px] snap-start relative group cursor-pointer">
              <div className="rounded-lg overflow-hidden bg-neutral-800">
                <div className="relative aspect-[2/3]">
                  <img src="https://i.pinimg.com/736x/5e/fa/63/5efa63b54ff96796a20db50004fddd86.jpg" alt="" className="w-full h-full object-center" />
                  {/* hover delay  */}
                  <div
                    className={
                      "absolute inset-0 bg-gradient-to-t from-neutral-900/90 opacity-0 group-hover:opacity-100 transition-all duration-300 via-neutral-900/40 to-transparent flex justify-end flex-col"
                    }
                  >
                    <div className=" transform translate-y-4 pb-4 group-hover:transalate-y-0 transition-transform duration-300 space-y-3">
                        <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500"/>
                        <span className="text-yellow-500 text-sm font-medium">Movies Vote Average</span>
                        </div>
                        <span className=" text-neutral-400 text-sm">Movie Lease Date</span>
                        </div>
                        <button className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700
                         text-white py-3 rounded-md items-center justify-center gap-1 
                         transition-all text-sm">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>

                    {/* movies Info */}
                <div className="mt-3">
                    <h3 className="text-white text-sm font-medium truncate">
                        Movie Title
                    </h3>
                    <div className="flex items-center gap-4 justify-between">
                        <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500"/>
                        <span className="text-yellow-500 text-xs truncate font-medium">Movies Vote Average</span>
                        </div>
                        <span className=" text-neutral-400 truncate text-sm">Movie Lease Date</span>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieSlider;

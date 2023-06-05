export default function Lifecycle() {
  return (
    <div className="flex items-center justify-center mx-2">
      <div className="flex min-h-screen items-center justify-center mx-2 bg-slate-100">
        <div className="group h-96 w-80 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src="/spinach.jpg"
                alt="spinach"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">Spinach</h1>
                <p className="text-lg">poop eh</p>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="group h-96 w-80 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src="/zucchini.jpg"
                alt="spinach"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">Zucchini</h1>
                <p className="text-lg">poop eh</p>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="group h-96 w-80 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src="/cucumber.jpg"
                alt="spinach"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">Cucumber </h1>
                <p className="text-lg">poop eh</p>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

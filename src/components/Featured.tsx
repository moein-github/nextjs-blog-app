import Image from "next/image";

export default function Featured() {
  return (
    <div className="mt-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        <b>Hey</b>, Discover my stories and creative ideas.
      </h1>

      <div className="mt-16 flex items-center gap-x-12">
        <div className="flex-1 relative w-[500px] h-[500px] hidden lg:block">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-y-5 font-semibold">
          <h1 className="text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            delectus consequuntur voluptas unde quia libero odit
          </h1>
          <p className="text-xl font-light text-slate-500 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cupiditate iste quaerat sunt magni eveniet autem magnam sed, dolores
            beatae, vel nisi accusamus atque harum quibusdam placeat repudiandae
            et nemo.
          </p>
          <button className="py-4 px-5 border-none rounded w-fit bg-slate-800 text-slate-50 dark:bg-slate-200 dark:text-slate-900">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

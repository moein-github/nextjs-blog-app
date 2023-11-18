import Image from "next/image";
import Link from "next/link";

export default function CategoryList() {
  return (
    <div className="">
      <h1 className="my-12 text-3xl font-semibold">Popular Categories</h1>
      <div className="flex flex-wrap justify-between items gap-5">
        <Link
          href="/blog?cat=style"
          className="flex items-center justify-center gap-3 capitalize w-full sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%] h-20 rounded-xl text-slate-900 bg-sky-200"
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-xl"
          />
          style
        </Link>

        <Link
          href="/blog?cat=fashion"
          className="flex items-center justify-center gap-3 capitalize w-full sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%] h-20 rounded-xl text-slate-900 bg-pink-200"
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className="rounded-xl"
          />
          fashion
        </Link>

        <Link
          href="/blog?cat=food"
          className="flex items-center justify-center gap-3 capitalize w-full sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%] h-20 rounded-xl text-slate-900 bg-green-200"
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className="rounded-xl"
          />
          food
        </Link>

        <Link
          href="/blog?cat=travel"
          className="flex items-center justify-center gap-3 capitalize w-full sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%] h-20 rounded-xl text-slate-900 bg-purple-200"
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className="rounded-xl"
          />
          travel
        </Link>

        <Link
          href="/blog?cat=culture"
          className="flex items-center justify-center gap-3 capitalize w-full sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%] h-20 rounded-xl text-slate-900 bg-orange-200"
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className="rounded-xl"
          />
          culture
        </Link>

        <Link
          href="/blog?cat=coding"
          className="flex items-center justify-center gap-3 capitalize w-full sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%] h-20 rounded-xl text-slate-900 bg-red-200"
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className="rounded-xl"
          />
          coding
        </Link>
      </div>
    </div>
  );
}

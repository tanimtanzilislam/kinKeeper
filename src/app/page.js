import { Friends } from "@/component/Friends";
import {Hero} from "@/component/Hero";

export default function Home() {
  return (
    <main>
      <section className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16">
        <div className="max-w-2xl text-center">

          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Friends to keep close in your life
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="btn bg-[#244D3F] text-white mt-5">
            <i className="fa-solid fa-plus"></i>
            Add a Friend
          </button>

        
<Hero />
<Friends/>
        </div>

          
      </section>
    </main>
  );
}
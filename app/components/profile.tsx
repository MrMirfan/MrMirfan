'use client'

import { time } from "console";
import Image from "next/image"
import { useEffect, useState } from "react"

// Card Profile 
export function Profile() {
  const [timeDiff, setTimeDiff] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const targetTime = new Date('2001-05-31').getTime();
      setTimeDiff(currentTime - targetTime);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));

  return (
    <div className="md:fixed right-0 mx-0 md:mx-3 w-full md:w-3/12 border-8 border-white rounded-3xl flex flex-col items-center gap-y-2 p-5 bg-slate-300 text-center order-1 md:order-2" >
      <Image
        src="./images/profile/passport.avif"
        className="my-2 rounded-full outline-2 outline-black outline-dashed mix-blend-darken"
        width={128}
        height={128}
        alt="Cute Guy"
      />
      <h2 className="font-extrabold text-3xl font-mono text-yellow-700">
        Mohammed Irfan
        <span className="block rounded-lg bg-amber-100 text-sm text-black font-sans font-bold underline decoration-wavy">
          Open to Work
        </span>
      </h2>
      <h3 className="text-lg font-bold font-['Open_Sans']">Software Engineer</h3>
      <h1 className="italic font-bold border-t-8 border-t-black">I&apos;ve been with you for</h1>
      <h2 id="bdayrem" className="italic">{years} years and {days} days</h2>
      <h1 className="italic font-bold border-t-8 border-t-black">Reach Me</h1>
      <div className=" inline-flex gap-3">

        <a href="https://wa.me/6379446611" target="_blank">
          <Image
            src="./images/social/WhatsApp.svg"
            width={32}
            height={32}
            alt="Whatsapp" />
        </a>

        <a
          href="mailto:mohammedsirfan01@gmail.com?subject=You%20are%20Hired"
          target="_blank">
          <Image
            src="./images/social/Gmail.svg"
            width={30}
            height={30}
            alt="Gmail" />
        </a>

        <a
          href="https://www.linkedin.com/in/mrmohammedirfan/"
          target="_blank">
          <Image
            src="./images/social/LinkedIn.svg"
            width={30}
            height={30}
            alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/MrMirfan/"
          target="_blank">
          <Image
            src="./images/social/Github.svg"
            width={30}
            height={30}
            alt="Github" />
        </a>

      </div>
    </div >
  )
}

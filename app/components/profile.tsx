import Image from "next/image"

// Card Profile 
export function Profile() {
  return (
    <div className="md:fixed right-0 mx-3 w-full md:w-3/12 border-8 border-white rounded-3xl flex flex-col items-center gap-y-2 p-5 text-center order-1 md:order-2" >
      <Image
        src="./profile/passport.avif"
        className="rounded-full my-2 mix-blend-darken"
        width={128}
        height={128}
        alt="Cute Guy"
      />
      <h2 className="font-extrabold text-3xl font-mono text-yellow-700">Mohammed Irfan</h2>
      <h3 className="text-lg font-bold font-['Open_Sans']">Software Engineer</h3>
      <h1 className="italic font-bold border-t-8 border-t-black">I&apos;ve been with you for</h1>
      <h2 id="bdayrem" className="italic">31/05</h2>
      <h1 className="italic font-bold border-t-8 border-t-black">Reach Me</h1>
      <h2>
        <a href="https://wa.me/6379446611" target="_blank" className="animate-pulse">
          <Image
            src="./social/WhatsApp.svg"
            width={32}
            height={32}
            alt="Whatsapp" />
        </a>
      </h2>
    </div >
  )
}

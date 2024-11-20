import Image from "next/image";
import { CONTACT_ID_LIST, MEMBER_ID_LIST, MEMBER_MAP } from "@/constants";
import { Member } from "@/components/Member";
import { GitHubIcon } from "@/components/icons/GitHub";
import { TwitterIcon } from "@/components/icons/Twitter";
import { Information } from "@/components/Information";
import { InstagramIcon } from "@/components/icons/Instagram";
import { TwitterShareButton } from "@/components/TwitterShareButton";
import { Contact } from "@/components/Contact";

export default async function Home() {
  return (
    <div className="grid items-center justify-items-center">
      <header className="w-full relative flex justify-center overflow-hidden bg-pattern font-geist-sans">
        <div className="relative max-h-screen aspect-[3/4] w-full md:aspect-[5/4] md:w-auto md:h-screen xl:aspect-[3/2]">
          <Image
            src="/cover.webp"
            alt="cover room"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="expo-title bg-gradient-to-r from-indigo-400 to-pink-200 pt-1 pr-1">
          <span className="text-4xl md:text-5xl lg:text-6xl font-extralight bg-gradient-to-b from-white via-white to-transparent text-transparent bg-clip-text">
            Twinkle Happy Sharing!
          </span>
        </div>
      </header>
      <main className="flex flex-col w-full space-y-12 font-rounded font-bold text-gray-700 bg-gradient-to-b from-blue-100 via-pink-100 to-yellow-50">
        <section className="flex flex-col items-center space-y-12 pt-12">
          <p className="text-5xl text-gray-700 border-b-4 border-blue-300 border-double">
            Information
          </p>
          <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 bg-slate-50 rounded-md shadow">
            <div className="relative w-[20rem] aspect-[1/1.4]">
              <Image
                className="shadow-md"
                src="/front_cover.jpg"
                alt="cover"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="grid gap-2 w-[20rem] aspect-[1/1.4]">
              <div className="flex flex-col items-center">
                <p className="text-2xl">Twinkle Happy Sharing!</p>
                <p className="text-xl">-2nd SEASON-</p>
              </div>
              <Information
                title="仕様"
                contents="A5サイズ/未定ページ"
              />
              <Information
                title="頒布情報"
                contents={["アイマスEXPO 12/14(土)", "タ-1b HoShiKaRaSu"]}
              />
              <Information
                title="会場頒布価格"
                contents="500円"
              />
              <Information
                title="企画責任者"
                contents={["ほしのりゅう", "starrykarasu@gmail.com"]}
              />
              <div className="flex justify-center">
                <TwitterShareButton />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center space-y-12">
          <p className="text-5xl font-semibold text-gray-700 border-b-4 border-pink-300 border-double">
            Members
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-x-4 gap-y-2">
            {MEMBER_ID_LIST.map((id) => <Member key={id} id={id} />)}
          </div>
        </section>

        <section className="flex flex-col items-center space-y-12 pb-12">
          <p className="text-5xl font-semibold text-gray-700 border-b-4 border-yellow-300 border-double">
            Contact
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CONTACT_ID_LIST.map((memberId) => (
              <Contact key={memberId} id={memberId} />
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-yellow-800 h-8 w-full"></footer>
    </div>
  );
}

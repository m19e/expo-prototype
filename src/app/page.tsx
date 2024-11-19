import Image from "next/image";
import { CONTACT_ID_LIST, MEMBER_ID_LIST, MEMBER_MAP } from "@/constants";
import { Member } from "@/components/Member";
import { GitHubIcon } from "@/components/icons/GitHub";
import { TwitterIcon } from "@/components/icons/Twitter";
import { Information } from "@/components/Information";
import { InstagramIcon } from "@/components/icons/Instagram";

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
      <main className="flex flex-col w-full font-rounded font-bold text-gray-700">
        <section className="flex flex-col items-center space-y-8 pt-8 bg-blue-100">
          <p className="text-5xl text-gray-700">
            Information
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="relative w-[22rem]"
              style={{
                aspectRatio: "1 / 1.4",
              }}
            >
              <Image
                className="shadow-md"
                src="/front_cover.jpg"
                alt="cover"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="grid gap-2 py-2 w-[22rem] aspect-[1/1.4]">
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
            </div>
          </div>
        </section>
        <div className="h-24 bg-gradient-to-b from-blue-100 to-pink-100">
        </div>
        <section className="flex flex-col items-center space-y-8 bg-pink-100">
          <p className="text-5xl font-semibold text-gray-700">Members</p>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-x-4 gap-y-2">
            {MEMBER_ID_LIST.map((id) => <Member key={id} id={id} />)}
          </div>
        </section>
        <div className="h-24 bg-gradient-to-b from-pink-100 to-yellow-50">
        </div>
        <section className="flex flex-col items-center space-y-8 pb-10 bg-yellow-50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4">
            {CONTACT_ID_LIST.map((memberId) => (
              <div
                key={memberId}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="relative w-32 rounded-full overflow-hidden"
                  style={{
                    aspectRatio: "1 / 1",
                  }}
                >
                  <Image
                    src={`/avatar/${memberId}.jpg`}
                    alt="cover"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm px-1 border-b-2 border-gray-600 border-dashed">
                    {MEMBER_MAP[memberId].role}
                  </span>
                  <span className="text-lg">{MEMBER_MAP[memberId].name}</span>
                  <div className="flex items-center gap-1">
                    <a
                      href={`https://twitter.com/${memberId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon className="w-6 h-6" />
                    </a>
                    {MEMBER_MAP[memberId].link.type !== "none" && (
                      <a
                        href={MEMBER_MAP[memberId].link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {MEMBER_MAP[memberId].link.type === "github" &&
                          <GitHubIcon className="w-7 h-7" />}
                        {MEMBER_MAP[memberId].link.type === "instagram" &&
                          <InstagramIcon className="w-7 h-7" />}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-yellow-800 h-8 w-full"></footer>
    </div>
  );
}

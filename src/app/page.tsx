import Image from "next/image";
import { CONTACT_ID_LIST, MEMBER_ID_LIST, MEMBER_MAP } from "@/constants";
import { Member } from "@/components/Member";
import { GitHubIcon } from "@/components/icons/GitHub";
import { TwitterIcon } from "@/components/icons/Twitter";

export default async function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <header className="w-full relative flex justify-center overflow-hidden bg-pattern">
        <div className="relative max-h-screen aspect-[3/4] w-full md:aspect-[5/4] md:w-auto md:h-screen xl:aspect-[3/2]">
          <Image
            src="/cover.webp"
            alt="cover room"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="expo-title bg-gradient-to-r from-indigo-400  to-pink-200 pt-1 pr-1">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight bg-gradient-to-b from-white via-white to-transparent text-transparent bg-clip-text">
            Twinkle Happy Sharing!
          </span>
        </div>
      </header>
      <main className="flex flex-col w-full">
        <section className="flex flex-col items-center space-y-8 pt-8 bg-blue-100">
          <p className="text-5xl font-semibold text-gray-700">
            Information
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="relative w-full self-stretch md:self-auto"
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
            <div className="grid gap-2 w-80">
              <div className="flex flex-col">
                <p>タイトル</p>
                <p className="text-right">
                  Twinkle Happy Sharing!
                </p>
                <p className="text-right">
                  -2nd SEASON-
                </p>
              </div>
              <div className="flex flex-col">
                <p>仕様</p>
                <p className="text-right">A5サイズ/未定ページ</p>
              </div>
              <div className="flex flex-col">
                <p>頒布情報</p>
                <p className="text-right">
                  アイマスEXPO 12/14(土)タ-1b
                </p>
                <p className="text-right">
                  HoShiKaRaSu
                </p>
              </div>
              <div className="flex flex-col">
                <p>会場頒布価格</p>
                <p className="text-right">500円</p>
              </div>
              <div className="flex flex-col">
                <p>企画責任者</p>
                <p className="text-right">
                  ほしのりゅう
                </p>
                <p className="text-right">
                  starrykarasu@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="h-16 bg-gradient-to-b from-blue-100 to-pink-100">
        </div>
        <section className="flex flex-col items-center space-y-8 bg-pink-100 ">
          <p className="text-5xl font-semibold text-gray-700">Members</p>
          <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-x-4 gap-y-2">
            {MEMBER_ID_LIST.map((id) => <Member key={id} id={id} />)}
          </div>
        </section>
        <div className="h-16 bg-gradient-to-b from-pink-100 to-yellow-50">
        </div>
        <section className="flex flex-col items-center space-y-8 pb-8 bg-yellow-50">
          <div className="hidden grid grid-cols-2 gap-4 ">
            {CONTACT_ID_LIST.map((memberId) => (
              <div
                key={memberId}
                className="flex"
              >
                <div
                  className="relative min-w-20"
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
                <div className="flex flex-col justify-between">
                  <span>
                    {MEMBER_MAP[memberId].role}
                  </span>
                  <span>{MEMBER_MAP[memberId].name}</span>
                </div>
              </div>
            ))}
          </div>
          <GitHubIcon className="hidden w-12 h-12" />
          <TwitterIcon className="hidden w-12 h-12" />
        </section>
      </main>
      {/* <footer className="bg-gray-100">FOOTER</footer> */}
    </div>
  );
}

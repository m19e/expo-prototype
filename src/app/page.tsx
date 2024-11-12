import React from "react";
import Image from "next/image";
import { CONTACT_ID_LIST, MEMBER_ID_LIST, MEMBER_MAP } from "@/constants";
import { GitHubIcon } from "@/components/icons/GitHub";
import { TwitterIcon } from "@/components/icons/Twitter";
import { MemberList } from "@/components/MemberList";

export default async function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <header className="bg-gray-100 w-full relative flex justify-center overflow-hidden bg-gradient-to-b from-indigo-400 to-pink-200 ">
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
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extralight bg-gradient-to-b from-white via-white to-transparent inline-block text-transparent bg-clip-text">
            Twinkle Happy Sharing!
          </span>
        </div>
      </header>
      <main className="flex flex-col gap-8 p-8 items-center bg-blue-100 w-full">
        <p className="text-6xl text-blue-400">Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="relative w-full self-stretch md:self-auto"
            style={{
              aspectRatio: "1 / 1.4",
            }}
          >
            <Image
              className="shadow-md"
              src="/cover_trim.jpg"
              alt="cover"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="grid gap-2 w-80">
            <div className="flex flex-col">
              <p>タイトル</p>
              <p className="text-right">Twinkle Happy Sharing! -2nd SEASON-</p>
            </div>
            <div className="flex flex-col">
              <p>仕様</p>
              <p className="text-right">A5サイズ/未定ページ</p>
            </div>
            <div className="flex flex-col">
              <p>頒布情報</p>
              <p className="text-right">
                アイマスEXPO 12/14(土)タ-1b HoShiKaRaSu
              </p>
            </div>
            <div className="flex flex-col">
              <p>会場頒布価格</p>
              <p className="text-right">500円</p>
            </div>
            <div className="flex flex-col">
              <p>企画責任者</p>
              <p className="text-right">ほしのりゅう starrykarasu@gmail.com</p>
            </div>
          </div>
        </div>

        <p className="text-6xl text-blue-400">Members</p>
        <MemberList />
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
      </main>
      {/* <footer className="bg-gray-100">FOOTER</footer> */}
    </div>
  );
}

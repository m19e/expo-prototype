import React from "react";
import Image from "next/image";
import { MEMBER_ID_LIST, MEMBER_MAP } from "@/constants";

export default async function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <header className="bg-gray-100 w-full relative flex justify-center bg-gradient-to-b from-indigo-400 to-pink-200 ">
        <div className="relative w-full h-[32rem] md:max-w-[72rem] md:min-h-screen">
          <Image
            src="/cover.webp"
            alt="cover room"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="expo-title bg-gradient-to-r from-indigo-400  to-pink-200 pt-1 pr-1">
          <span className="text-3xl  md:text-6xl text-white font-extralight bg-gradient-to-b from-white via-white to-transparent inline-block text-transparent bg-clip-text">
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
              <p className="text-right">Twinkle Happy Sharing! 2nd SEASON</p>
            </div>
            <div className="flex flex-col">
              <p>仕様</p>
              <p className="text-right">A5 本文xxP</p>
            </div>
            <div className="flex flex-col">
              <p>頒布イベント</p>
              <p className="text-right">
                アイマスEXPO
              </p>
            </div>
            <div className="flex flex-col">
              <p>頒布サークル</p>
              <p className="text-right">
                1日目 タ-1b HoShiKaRaSu
              </p>
            </div>
            <div className="flex flex-col">
              <p>会場頒布価格</p>
              <p className="text-right">xxxx円</p>
            </div>
          </div>
        </div>

        <p className="text-6xl text-blue-400">Members</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
          {MEMBER_ID_LIST.map((memberId) => (
            <div
              key={memberId}
              className="flex flex-col items-center bg-yellow-100 rounded-md  overflow-hidden shadow-md"
            >
              <div
                className="relative min-w-40"
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
              <p className="text-sm">{MEMBER_MAP[memberId].name}</p>
            </div>
          ))}
        </div>
      </main>
      {/* <footer className="bg-gray-100">FOOTER</footer> */}
    </div>
  );
}

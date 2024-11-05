import React from "react";
import Image from "next/image";
import { MEMBER_ID_LIST, MEMBER_MAP } from "@/constants";

export default async function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <header className="bg-gray-100 w-full relative min-h-screen">
        <Image
          src="/cover_room.png"
          alt="cover room"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="expo-title bg-gradient-to-r from-indigo-500 to-pink-200 pt-1 pr-1">
          <span className="text-6xl text-white font-extralight bg-gradient-to-b from-white via-white to-transparent inline-block text-transparent bg-clip-text">
            Twinkle Happy Sharing!
          </span>
        </div>
      </header>
      <main className="flex flex-col gap-8 py-8 px-16 items-center bg-blue-100 w-full">
        <p className="text-6xl text-blue-400">Information</p>
        <div
          className="relative w-full "
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
            <p className="text-right">仕様を入力</p>
          </div>
          <div className="flex flex-col">
            <p>頒布イベント</p>
            <p className="text-right">イベント情報を入力</p>
          </div>
          <div className="flex flex-col">
            <p>会場頒布価格</p>
            <p className="text-right">価格を入力</p>
          </div>
        </div>

        <p className="text-6xl text-blue-400">Members</p>
        <div className="grid grid-cols-1 sm:grid-cols-3  items-center gap-2">
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

import { Button } from "antd";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="fixed w-full h-16 flex justify-between items-center  backdrop-blur-sm text-white px-8">
        <h1 className="text-xl font-bold hover:text-gray-200 transition-colors">旅行家</h1>
        <button className="hover:text-gray-200 transition-colors">登录</button>
      </header>

      <section className="flex-1 bg-[url('/img/bg1.jpg')] bg-cover bg-center flex justify-center items-center flex-col">
        <h2 className="text-white text-5xl font-bold mb-10">
          规划一场难忘的旅行
        </h2>
        <Button 
          size="large" 
          className="hover:scale-105 transition-transform"
        >
          创建新的旅行计划
        </Button>
      </section>
    </main>
  );
}

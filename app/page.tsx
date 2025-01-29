import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <div className="flex items-center flex-col">
        <Image
          className="dark:invert"
          src="/plus.png"
          alt="create game image "
          width={170}
          height={170}
          priority
        />
        <h1 className="text-2xl font-bold pt-2">Create a game</h1>
      </div>
      <div className="flex items-center flex-col">
        <Image
          className="dark:invert"
          src="/kahoot.png"
          alt="join game button"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-2xl font-bold">Join Game</h1>
      </div>
    </div>
  );
}

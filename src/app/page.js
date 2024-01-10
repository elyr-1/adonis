import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1
        style={{
          fontWeight: "bolder",
          fontSize: "3rem",
          textAlign: "center",
          margin: "auto",
        }}
      >
        ADONIS BAR
      </h1>
      <img
        src="https://raw.githubusercontent.com/elyr-1/images-src/main/images/jordan.jpg"
        alt="jordan"
        width={1000}
        height={3000}
      />
    </main>
  );
}

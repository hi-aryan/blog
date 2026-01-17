import Typewriter from "@/components/ui/typewriter";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <p className="text-3xl font-bold sm:text-4xl">
        {/* <span>{"some dummy text "}</span> */}
        <Typewriter
          text={["hi", "u probably dont know me but", "i hope u like my lil website :)"]}
          className="text-foreground"
          waitTime={1000}
          cursorChar={"_"}
          loopDelay={2000}
        />
      </p>
    </div>
  );
}

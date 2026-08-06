export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="bg-blob animate-float-slow -left-32 -top-32 h-[28rem] w-[28rem]"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="bg-blob animate-float-slower right-[-10rem] top-1/3 h-[26rem] w-[26rem]"
        style={{ background: "var(--secondary)" }}
      />
      <div
        className="bg-blob animate-float-slow bottom-[-8rem] left-1/4 h-96 w-96"
        style={{ background: "var(--secondary)", opacity: 0.2 }}
      />
    </div>
  );
}

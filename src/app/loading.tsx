export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center animate-pulse">
          <span className="text-xl font-bold text-accent">N</span>
        </div>
        <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}

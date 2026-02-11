export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-4 bg-white/20 rounded w-48 mb-6"></div>
            <div className="h-10 bg-white/20 rounded w-full mb-4"></div>
            <div className="h-6 bg-white/20 rounded w-64"></div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-warm-grey rounded w-full"></div>
          <div className="h-4 bg-warm-grey rounded w-full"></div>
          <div className="h-4 bg-warm-grey rounded w-5/6"></div>
          <div className="h-4 bg-warm-grey rounded w-full"></div>
          <div className="h-4 bg-warm-grey rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}

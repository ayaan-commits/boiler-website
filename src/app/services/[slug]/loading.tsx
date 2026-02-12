export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-primary via-primary to-teal py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-pulse">
              <div className="h-4 bg-white/20 rounded w-48 mb-6" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/10" />
                <div className="h-10 bg-white/20 rounded w-72" />
              </div>
              <div className="space-y-3 mb-6">
                <div className="h-5 bg-white/15 rounded w-full" />
                <div className="h-5 bg-white/15 rounded w-5/6" />
              </div>
              <div className="h-12 bg-white/10 rounded-lg w-56 mb-8" />
              <div className="flex gap-3">
                <div className="h-10 bg-white/10 rounded-lg w-40" />
                <div className="h-10 bg-white/10 rounded-lg w-32" />
                <div className="h-10 bg-white/10 rounded-lg w-32" />
              </div>
            </div>
            <div className="animate-pulse hidden lg:block">
              <div className="bg-white/10 rounded-2xl h-80 w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Image skeleton */}
      <div className="py-8 md:py-12 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse h-64 md:h-80 bg-warm-grey rounded-xl" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 animate-pulse">
              <div className="h-8 bg-warm-grey rounded w-48 mb-6" />
              <div className="bg-light-grey rounded-xl p-8 mb-12">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-warm-grey rounded-full flex-shrink-0" />
                      <div className="h-4 bg-warm-grey rounded w-full" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-8 bg-warm-grey rounded w-64 mb-6" />
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-20 bg-light-grey border border-warm-grey rounded-lg" />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 animate-pulse">
              <div className="bg-light-grey rounded-xl p-6 mb-6">
                <div className="h-6 bg-warm-grey rounded w-32 mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-16 bg-white rounded-lg" />
                  ))}
                </div>
              </div>
              <div className="bg-warm-grey rounded-xl h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

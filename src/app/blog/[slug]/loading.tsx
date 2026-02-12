export default function Loading() {
  return (
    <>
      {/* Breadcrumb skeleton */}
      <div className="bg-light-grey border-b border-warm-grey">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="animate-pulse flex items-center gap-2">
            <div className="h-4 bg-warm-grey rounded w-12" />
            <div className="h-4 bg-warm-grey rounded w-2" />
            <div className="h-4 bg-warm-grey rounded w-10" />
            <div className="h-4 bg-warm-grey rounded w-2" />
            <div className="h-4 bg-warm-grey rounded w-48" />
          </div>
        </div>
      </div>

      {/* Article skeleton */}
      <div className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8 animate-pulse">
              <div className="h-4 bg-warm-grey rounded w-24 mb-6" />
              <div className="h-6 bg-primary/10 rounded-full w-20 mb-4" />
              <div className="space-y-3 mb-6">
                <div className="h-10 bg-warm-grey rounded w-full" />
                <div className="h-10 bg-warm-grey rounded w-3/4" />
              </div>
              <div className="flex gap-4 mb-8 pb-8 border-b border-warm-grey">
                <div className="h-4 bg-warm-grey rounded w-32" />
                <div className="h-4 bg-warm-grey rounded w-28" />
                <div className="h-4 bg-warm-grey rounded w-24" />
              </div>
              <div className="h-64 md:h-80 bg-warm-grey rounded-xl mb-8" />
              <div className="space-y-4">
                <div className="h-4 bg-warm-grey rounded w-full" />
                <div className="h-4 bg-warm-grey rounded w-full" />
                <div className="h-4 bg-warm-grey rounded w-5/6" />
                <div className="h-4 bg-warm-grey rounded w-full" />
                <div className="h-4 bg-warm-grey rounded w-4/6" />
                <div className="h-7 bg-warm-grey rounded w-64 mt-8" />
                <div className="h-4 bg-warm-grey rounded w-full" />
                <div className="h-4 bg-warm-grey rounded w-full" />
                <div className="h-4 bg-warm-grey rounded w-3/4" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 animate-pulse">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl border border-warm-grey">
                  <div className="h-6 bg-warm-grey rounded w-32 mb-4" />
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-16 h-16 bg-warm-grey rounded-lg flex-shrink-0" />
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-warm-grey rounded w-full" />
                          <div className="h-3 bg-warm-grey rounded w-16" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl h-40" />
                <div className="bg-white p-6 rounded-xl border border-warm-grey">
                  <div className="h-6 bg-warm-grey rounded w-24 mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 bg-warm-grey rounded-full w-20" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

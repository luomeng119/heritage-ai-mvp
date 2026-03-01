import { Suspense } from 'react';
import SearchContent from './SearchContent';

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchContent />
    </Suspense>
  );
}

function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block animate-spin text-4xl">⏳</div>
        <p className="mt-4 text-gray-600">加载中...</p>
      </div>
    </div>
  );
}

const FormOverlayLoader = () => (
  <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm">
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl border border-purple-100 bg-white shadow-xl p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 shrink-0">
            <div className="absolute inset-0 rounded-full border-4 border-purple-100" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-r-pink-600 animate-spin [animation-duration:1.2s]" />
          </div>

          <div className="min-w-0">
            <div className="text-base font-semibold text-gray-900">
              Подбираем идеи…
            </div>
            <div className="mt-1 text-sm text-gray-600">
              Это обычно занимает пару секунд. Форму не трогаем — всё
              сохранится.
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-bounce [animation-delay:0ms]" />
              <span className="h-2 w-2 rounded-full bg-pink-500 animate-bounce [animation-delay:150ms]" />
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-bounce [animation-delay:300ms]" />
              <span className="ml-2 text-xs text-gray-400">
                генерируем рекомендации
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { FormOverlayLoader };

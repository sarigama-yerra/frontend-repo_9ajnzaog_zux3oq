import { useCallback } from 'react'

export default function Header({ onReset }) {
  const handleReset = useCallback(() => {
    if (confirm('Reset local progress?')) {
      onReset()
    }
  }, [onReset])

  return (
    <header className="flex items-center gap-3">
      <img
        alt="logo"
        className="w-11 h-11"
        src={
          "data:image/svg+xml;utf8," +
          encodeURIComponent(
            "<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44'><rect rx='8' width='44' height='44' fill='%230b5cff'/><text x='50%' y='55%' font-size='18' font-family='Arial' text-anchor='middle' fill='white'>C</text></svg>"
          )
        }
      />
      <div>
        <h1 className="m-0 text-[22px] font-semibold">C-Learn</h1>
        <div className="text-sm text-slate-500">Learn C, practice problems, quizzes & track your progress</div>
      </div>
      <div className="ml-auto">
        <button onClick={handleReset} className="inline-block px-3 py-2 rounded-lg bg-red-500 text-white">
          Reset Progress
        </button>
      </div>
    </header>
  )
}

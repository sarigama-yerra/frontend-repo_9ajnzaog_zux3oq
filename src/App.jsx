import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import Lessons from './components/Lessons'
import Practice from './components/Practice'
import Quiz from './components/Quiz'

function App() {
  const [solved, setSolved] = useState(0)
  const [quizScore, setQuizScore] = useState(null)

  useEffect(() => {
    // initialize from localStorage
    const solvedInit = ['p1', 'p2', 'p3'].filter((id) => localStorage.getItem('clearn_' + id) === '1').length
    const qs = localStorage.getItem('clearn_quiz_score')
    setSolved(solvedInit)
    setQuizScore(qs ? Number(qs) : null)
  }, [])

  const onPracticeChange = useCallback((count) => setSolved(count), [])
  const onQuizScore = useCallback((score) => setQuizScore(score), [])

  const resetAll = useCallback(() => {
    ;['p1', 'p2', 'p3', 'quiz_score'].forEach((k) => localStorage.removeItem('clearn_' + k))
    localStorage.removeItem('clearn_quiz_score')
    setSolved(0)
    setQuizScore(null)
  }, [])

  const progressText = `Solved problems: ${solved}/3` + (quizScore != null ? ` — Last quiz score: ${quizScore}/3` : '')

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        <Header onReset={resetAll} />

        <nav className="mt-4 flex gap-2">
          <a href="#lessons" className="inline-block px-3 py-2 rounded-lg bg-blue-600 text-white">Lessons</a>
          <a href="#practice" className="inline-block px-3 py-2 rounded-lg bg-blue-600 text-white">Practice</a>
          <a href="#quiz" className="inline-block px-3 py-2 rounded-lg bg-blue-600 text-white">Quiz</a>
        </nav>

        <div className="grid grid-cols-1 gap-3 mt-4">
          <section className="rounded-2xl p-4 bg-white shadow">
            <Lessons />
          </section>

          <section className="rounded-2xl p-4 bg-white shadow">
            <Practice onChange={onPracticeChange} />
          </section>

          <section className="rounded-2xl p-4 bg-white shadow">
            <Quiz onScore={onQuizScore} />
          </section>

          <section className="rounded-2xl p-4 bg-white shadow">
            <h2 className="text-xl font-semibold mb-2">Progress</h2>
            <div className="text-slate-700" aria-live="polite">{progressText || 'Loading progress...'}</div>
          </section>
        </div>

        <footer className="mt-6 text-center text-slate-500">
          <div>Want a downloadable ZIP or hosting help? Use the instructions below.</div>
        </footer>
      </div>
    </div>
  )
}

export default App

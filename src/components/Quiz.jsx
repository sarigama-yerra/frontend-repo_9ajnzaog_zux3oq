import { useEffect, useMemo, useState } from 'react'

const QUIZ = [
  { q: 'Which header is required for printf?', a: ['<stdio.h>', '<conio.h>', '<stdlib.h>'], correct: 0 },
  { q: 'What is the output of: printf("%d", 5/2);', a: ['2', '2.5', '3'], correct: 0 },
  { q: 'Which of these is a correct comment in C?', a: ['// comment', '/* comment */', 'Both'], correct: 2 },
]

export default function Quiz({ onScore }) {
  const [answers, setAnswers] = useState({})
  const score = useMemo(
    () => Object.entries(answers).reduce((acc, [i, v]) => (Number(v) === QUIZ[i].correct ? acc + 1 : acc), 0),
    [answers]
  )

  useEffect(() => {
    onScore?.(score)
  }, [score, onScore])

  const submit = () => {
    localStorage.setItem('clearn_quiz_score', String(score))
    alert(`Score: ${score}/${QUIZ.length}`)
  }

  return (
    <section id="quiz">
      <h2 className="text-xl font-semibold mb-3">Quick quiz</h2>
      <div className="space-y-3">
        {QUIZ.map((it, i) => (
          <div key={i} className="rounded-xl p-3 bg-white shadow">
            <div className="font-medium">Q{i + 1}. {it.q}</div>
            <div className="mt-2 space-y-1">
              {it.a.map((opt, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={idx}
                    onChange={(e) => setAnswers(a => ({ ...a, [i]: e.target.value }))}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button onClick={submit} className="inline-block px-3 py-2 rounded-lg bg-blue-600 text-white">Submit Quiz</button>
      </div>
      <div className="text-sm text-slate-500 mt-2">Your last saved score will appear in Progress.</div>
    </section>
  )
}

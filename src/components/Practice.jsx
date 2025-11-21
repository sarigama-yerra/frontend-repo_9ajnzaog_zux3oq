import { useEffect, useMemo, useState } from 'react'

const PROBLEMS = [
  { id: 'p1', label: 'Factorial program (p1)' },
  { id: 'p2', label: 'Reverse string (p2)' },
  { id: 'p3', label: 'Prime check (p3)' },
]

export default function Practice({ onChange }) {
  const [state, setState] = useState({})

  useEffect(() => {
    const next = {}
    PROBLEMS.forEach(({ id }) => (next[id] = localStorage.getItem('clearn_' + id) === '1'))
    setState(next)
  }, [])

  const solvedCount = useMemo(() => Object.values(state).filter(Boolean).length, [state])

  useEffect(() => {
    onChange?.(solvedCount)
  }, [solvedCount, onChange])

  const toggle = (id) => (e) => {
    const val = e.target.checked
    setState((s) => ({ ...s, [id]: val }))
    localStorage.setItem('clearn_' + id, val ? '1' : '0')
  }

  return (
    <section id="practice">
      <h2 className="text-xl font-semibold mb-3">Practice problems</h2>
      <ol className="list-decimal pl-6 text-slate-700 mb-2">
        <li>Write a program to find factorial of a number (iterative & recursive).</li>
        <li>Reverse a string without using library reverse function.</li>
        <li>Find whether a number is prime.</li>
      </ol>
      <div className="text-sm text-slate-500 mb-3">Each problem has a "Solved" checkbox — progress saved locally.</div>
      <div className="space-y-2">
        {PROBLEMS.map(({ id, label }) => (
          <label key={id} className="block">
            <input className="mr-2" type="checkbox" checked={!!state[id]} onChange={toggle(id)} />
            {label}
          </label>
        ))}
      </div>
    </section>
  )
}

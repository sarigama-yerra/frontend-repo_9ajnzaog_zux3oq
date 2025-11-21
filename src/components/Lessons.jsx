export default function Lessons() {
  const copyCode = async (e) => {
    const code = `#include <stdio.h>\n\nint main() {\n  printf("Hello, world!\\n");\n  return 0;\n}`
    try {
      await navigator.clipboard.writeText(code)
      e.target.textContent = 'Copied'
      setTimeout(() => (e.target.textContent = 'Copy sample'), 1200)
    } catch {}
  }

  return (
    <section id="lessons">
      <h2 className="text-xl font-semibold mb-3">Lessons</h2>

      <div className="rounded-xl p-4 bg-white shadow mb-3">
        <h3 className="font-semibold">1. Getting started</h3>
        <p>Install a C compiler (gcc) or use an online compiler. Learn about <strong>variables, data types, input/output</strong>.</p>
        <pre className="bg-slate-900 text-slate-100 p-3 rounded-md overflow-auto text-sm">// Hello world in C{`\n`}#include &lt;stdio.h&gt;{`\n\n`}int main() {{`\n`}  printf("Hello, world!\\n");{`\n`}  return 0;{`\n`}}{`\n`}</pre>
        <p className="text-sm text-slate-500">Tip: Click Copy then use an online compiler link below to run.</p>
        <div className="flex gap-2 mt-2">
          <button className="inline-block px-3 py-2 rounded-lg bg-blue-600 text-white" onClick={copyCode}>Copy sample</button>
          <a className="inline-block px-3 py-2 rounded-lg bg-blue-600 text-white" href="https://www.onlinegdb.com/online_c_compiler" target="_blank" rel="noreferrer">Open Online Compiler</a>
        </div>
      </div>

      <div className="rounded-xl p-4 bg-white shadow mb-3">
        <h3 className="font-semibold">2. Control flow</h3>
        <p>if/else, loops (for, while), switch-case.</p>
      </div>

      <div className="rounded-xl p-4 bg-white shadow">
        <h3 className="font-semibold">3. Functions & Arrays</h3>
        <p>Writing reusable functions and working with arrays and pointers.</p>
      </div>
    </section>
  )
}

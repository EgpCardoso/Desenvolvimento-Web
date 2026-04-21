import { useState } from 'react'

const tarefasIniciais = [
  { id: 1, text: 'Aprender Hooks', completed: false },
  { id: 2, text: 'Refazer a To-Do List com React', completed: true },
]

function App() {
  const [tarefas, setTarefas] = useState(tarefasIniciais)
  const [textoTarefa, setTextoTarefa] = useState('')

  function adicionarTarefa(event) {
    event.preventDefault()

    const textoLimpo = textoTarefa.trim()

    if (!textoLimpo) {
      return
    }

    const novaTarefa = {
      id: Date.now(),
      text: textoLimpo,
      completed: false,
    }

    setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa])
    setTextoTarefa('')
  }

  function alternarTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, completed: !tarefa.completed }
          : tarefa,
      ),
    )
  }

  function removerTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id),
    )
  }

  return (
    <main className="container">
      <section className="todo-card">
        <p className="eyebrow">Lista de Tarefas</p>
        <h1>Organize seu dia</h1>
        <p className="subtitle">
          Adicione tarefas, marque como concluidas e use a lixeira para remover
          um item.
        </p>

        <form className="input-group" onSubmit={adicionarTarefa}>
          <input
            type="text"
            value={textoTarefa}
            onChange={(event) => setTextoTarefa(event.target.value)}
            placeholder="Digite uma nova tarefa"
            aria-label="Digite uma nova tarefa"
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul className="task-list">
          {tarefas.map((tarefa) => (
            <li
              key={tarefa.id}
              className={`task-item ${tarefa.completed ? 'completed' : ''}`}
            >
              <input
                type="checkbox"
                checked={tarefa.completed}
                onChange={() => alternarTarefa(tarefa.id)}
                aria-label={`Marcar "${tarefa.text}" como concluida`}
              />

              <span className="task-text">{tarefa.text}</span>

              <button
                type="button"
                className="delete-button"
                onClick={() => removerTarefa(tarefa.id)}
                aria-label={`Remover a tarefa "${tarefa.text}"`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M8 6V4h8v2" />
                  <path d="M19 6l-1 14H6L5 6" />
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        {tarefas.length === 0 && (
          <p className="empty-state">Nenhuma tarefa por aqui. Adicione a primeira.</p>
        )}
      </section>
    </main>
  )
}

export default App

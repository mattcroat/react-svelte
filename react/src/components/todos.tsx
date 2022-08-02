const todos = [
	{ id: 1, text: 'Todo 1', completed: true },
	{ id: 2, text: 'Todo 2', completed: false },
	{ id: 3, text: 'Todo 3', completed: false },
	{ id: 4, text: 'Todo 4', completed: false },
]

export function Todos() {
	return (
		<>
			<h2>Logic</h2>
			<ul>
				{todos.map((todo) => (
					<li
						key={todo.id}
						style={{ textDecoration: todo.completed ? 'line-through' : '' }}
					>
						{todo.completed ? `${todo.text} 🎉` : todo.text}
					</li>
				))}
			</ul>
		</>
	)
}

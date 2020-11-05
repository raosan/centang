const container = document.querySelector(".container")

const todos = [
  {text: 'Beli sayur'},
  {text: 'Ngoding'},
  {text: 'Belajar Masak dengan melihat resep dari youtube'}
]

const showTodos = () => {
  let output = ""
  todos.forEach(
    ({text}) => (output += 
        `
        <div class="card">
          <label class="check-container">
            <span class="text">${text}</span>
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>
        </div>
        `
      )
  )

  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showTodos)
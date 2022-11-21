const arr = [

  {
    text: "первое дело",
    done: true
  },


  {
    text: "второе дело",
    done: true
  },

  {
    text: "третье дело",
    done: true
  },

  {
    text: "четвертое дело",
    done: true
  },

  {
    text: "пятое дело",
    done: true
  },
];

const input = document.querySelector('input');
const btn = document.querySelector('button')
const list = document.querySelector('.list')

const render = () => {
  list.textContent = ''
  const ul = document.createElement('ul')
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    li.style.listStyle = 'none'
    li.textContent = arr[i].text;

    const buttonRemove = document.createElement('button')
    const checkButton = document.createElement('input')
    checkButton.type = 'checkbox'
    buttonRemove.textContent = 'x'

    li.prepend(checkButton)
    li.append(buttonRemove);

    checkButton.addEventListener('click', () => {
      checkTodo(i)
      if (checkButton.checked) {
        li.style.textDecoration = "line-through"
      }
      else { li.style.textDecoration = "none" }
    })
    function checkTodo(i) {
      arr[i].done = !arr[i].done
    }

    buttonRemove.addEventListener('click', () => {
      remove(i)
    })

    ul.append(li)
    list.append(ul)
  }
}

const remove = (index) => {
  arr.splice(index, 1)
  render()
}

const addTodo = (elem) => {
  arr.push({ text: elem, done: true });
  render()
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  addTodo(input.value)
})





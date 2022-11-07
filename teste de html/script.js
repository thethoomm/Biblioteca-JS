


const body = document.querySelector('.container')
const title = document.querySelector('#titulo')
const author = document.querySelector('#autor')
const editor = document.querySelector('#editora')
const year = document.querySelector('#ano')
const button = document.querySelector('.btn')

const send = () => {
    function createDiv(title, author, editor, year) {
        
        const div = document.createElement('div')

        const h3Title = document.createElement('h3')
        const h3Author = document.createElement('h3')
        const h3Editor = document.createElement('h3')
        const h3Year = document.createElement('h3')

        const titleField = document.createElement('span')
        const authorField = document.createElement('span')
        const editorField = document.createElement('span')
        const yearField = document.createElement('span')

        titleField.classList.add('titleField')
        authorField.classList.add('authorField')
        editorField.classList.add('editorField')
        yearField.classList.add('yearField')
        
        h3Title.innerText = 'Titulo'
        titleField.innerText = title

        h3Author.innerText = 'Autor'
        authorField.innerText = author

        h3Editor.innerText = 'Editor'
        editorField.innerText = editor

        h3Year.innerText = 'Ano'
        yearField.innerText = year

        div.classList.add('divs')
        div.appendChild(h3Title)
        div.appendChild(titleField)
        div.appendChild(h3Author)
        div.appendChild(authorField)
        div.appendChild(h3Editor)
        div.appendChild(editorField)
        div.appendChild(h3Year)
        div.appendChild(yearField)

        console.log(div)
    
        return div
    }
    
    let aux = createDiv(title.value, author.value, editor.value, year.value)
    
    body.append(aux)
    
    title.value = ''
    author.value = '' 
    editor.value = ''
    year.value = ''
}

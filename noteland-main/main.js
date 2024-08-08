

let notes = []

let text = document.querySelector('.text');

let scrolling_section = document.querySelector('.scrolling-section');


let uniqueId = 'note' + Math.floor(Math.random() * 1000) 
  
let newNoteButton = document.getElementById('newNoteButton'); 

newNoteButton.addEventListener('click', createNote);

 
function renderElementToScree(){
    if(localStorage.getItem('notes')){
        notes = JSON.parse(localStorage.getItem('notes'))
        notes.forEach(note=>{
            addNote(note, note.uniqueId)
        })
    }

}
let notess

let id


function createNote(){

    var imageToRemove = document.getElementById('imageR');

    
    if (imageToRemove) {
      imageToRemove.parentNode.removeChild(imageToRemove);
    }


    let noteDiv = document.createElement('div')
    noteDiv.className = 'newNote'
    let input = document.createElement('input');
    input.id = 'textTitle'
    input.type = "text";
    input.placeholder = 'Note Title'
    let textarea = document.createElement('textarea');
    textarea.id = 'textDescription'
    textarea.rows = 10
    textarea.placeholder = 'Note Description'
    let createButton = document.createElement('button')
    createButton.className = 'button2'
    
    createButton.innerText = 'Creattte buton'

    noteDiv.appendChild(input)
    noteDiv.appendChild(textarea)
    

    text.appendChild(noteDiv);
    text.appendChild(createButton)

    document.querySelector('.button2').addEventListener('click',()=>{
        let uniqueId = 'note' + Math.floor(Math.random() * 1000)
        let note = {
          title : document.querySelector('#textTitle').value,
          content : document.querySelector('#textDescription').value,
        }
        
        if(textTitle.value === '' || textDescription.value ===''){
            alert('Titel or decription is missing')
        }else{
            addNote(note,uniqueId)
            
            document.querySelector('#textTitle').value = ''
            document.querySelector('#textDescription').value =''   
         
        }
        addNoteToLocalStorage(note, uniqueId)
    })
}


function addNote(note,uniqueId){
    

    
    let listNote = document.createElement('div')
    listNote.classList.add('note',uniqueId)
    let noteTitle = document.createElement('h3')
    let notePara = document.createElement('p')
    let deleteButton = document.createElement('button')
    deleteButton.id = 'delete'
    

    noteTitle.innerText = note.title;
    notePara.innerText = note.content;
    deleteButton.innerText = 'Delete'

    listNote.appendChild(noteTitle)
    listNote.appendChild(notePara)
    listNote.appendChild(deleteButton)

    scrolling_section.appendChild(listNote)
    
    
    deleteButton.addEventListener('click', ()=>{
        deleteNoteButton(uniqueId)
    })

}

function deleteNoteButton(id){
    document.querySelector('.'+id).remove();
    notes = JSON.parse(localStorage.getItem('notes'))
    let index = notes.findIndex(note=> note.uniqueId == id)

    notes.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(notes));
}


function addNoteToLocalStorage(note, uniqueId){
    note = {...note, uniqueId}

    notes.push(note)

    localStorage.setItem('notes',JSON.stringify(notes))
}


renderElementToScree()






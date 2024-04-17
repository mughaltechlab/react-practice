import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { nanoid } from "nanoid"
import { onSnapshot } from "firebase/firestore"
import { notesCollection } from "./firebase"

export default function App() {
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        // (notes[0] && notes[0].id) || ""
        (notes[0]?.id) || ""
    )

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]


    // ******>>>save notes in firebase
    React.useEffect(() => {
        onSnapshot(notesCollection, (snap)=>{
            //todo: Sync up our local notes array data with snapshot (snap)
        })
    }, [])
    
    // ******>>>save notes in localstorage
    // React.useEffect(() => {
    //     localStorage.setItem("notes", JSON.stringify(notes))
    // }, [notes])

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = []
            for (let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if (oldNote.id === currentNoteId) {
                    // Put the most recently-modified note at the top
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })
    }

    function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }

    // ****
    // ? ====>> doesnt need this func anymore replace by currentNote variable
    // function findCurrentNote() {
    //     return notes.find(note => {
    //         return note.id === currentNoteId
    //     }) || notes[0]
    // }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            // currentNote={findCurrentNote()}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                        {
                            currentNoteId &&
                            notes.length > 0 &&
                            <Editor
                                // currentNote={findCurrentNote()}
                                currentNote={currentNote}
                                updateNote={updateNote}
                            />
                        }
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                </button>
                    </div>

            }
        </main>
    )
}

import { useState } from 'react';
import '../index.css';

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title: '', 
        author: '',
    })

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    }
      
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`title: ${newBook.title} author: ${newBook.author}`)
        setBooks([...books, newBook])
        setNewBook({
            title: '', 
            author: '',
        })
    }

return (

        <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                 type="text"
                 id="title"
                 name="title"
                 value={books.title}
                 onChange={handleInputChange}
                 />

                <label htmlFor="author">Author:</label>
                <input
                 type="text"
                 id="author"
                 name="author"
                 value={books.title}
                 onChange={handleInputChange}
                 />

                <button className="submit" type="submit">Submit</button>
            </form>
        </div>

        <div className="bookCardsDiv">
            <ul>

                {books.map((book, index) => (
                    <div className="bookCard" key={index}>
                        
                        <p>{book.title}</p>
                        <p>by {book.author}</p>
                
                    </div>
                ))}
            </ul>
        </div>
        </div>
)

}

export default Bookshelf;

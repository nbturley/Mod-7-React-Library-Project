import Input from "./Input"

import { useForm } from 'react-hook-form'

import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseTitle, chooseLength, chooseISBN, chooseAuthor, chooseGenre } from "../redux/slices/RootSlice";

interface BookFormProps {
  id?: string[]
}

const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    
    if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data.book_title } id: ${props.id}`);
        setTimeout( () => {
            window.location.reload()
        }, 500)
    } else {
        dispatch(chooseTitle(data.book_title));
        dispatch(chooseLength(data.length));
        dispatch(chooseISBN(data.isbn));
        dispatch(chooseAuthor(data.author_name));
        dispatch(chooseGenre(data.genre));

        server_calls.create(store.getState())
        setTimeout( () => {
            window.location.reload()
        }, 500)
    }
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('book_title')} name='book_title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="length">Length</label>
          <Input {...register('length')} name='length' placeholder="Length" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Input {...register('isbn')} name='isbn' placeholder="ISBN" />
        </div>
        <div>
          <label htmlFor="author_name">Author Name</label>
          <Input {...register('author_name')} name='author_name' placeholder="Author Name" />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <Input {...register('genre')} name='genre' placeholder="Genre" />
        </div>
        <div className="flex p-1">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookForm
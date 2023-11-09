import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        book_title: "Title",
        length: "Length",
        isbn: "ISBN",
        author_name: "Author Name",
        genre: "Genre",
    },
    reducers: {
        chooseTitle: (state, action) => { state.book_title = action.payload},
        chooseLength: (state, action) => { state.length = action.payload},
        chooseISBN: (state, action) => { state.isbn = action.payload},
        chooseAuthor: (state, action) => { state.author_name = action.payload},
        chooseGenre: (state, action) => { state.genre = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseLength, chooseISBN, chooseAuthor, chooseGenre } = rootSlice.actions
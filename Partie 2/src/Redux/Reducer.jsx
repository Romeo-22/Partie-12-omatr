const initialState = {
  books_list: [
    { id: 1, title: "react-redux", category: "frontend" },
    { id: 2, title: "cours laravel", category: "backend" },
  ],
};
export const reducer = (state = initialState, action) => {
  if (action) {
    const actions = {
      ADD_LIVRE: { ...state, books_list: [...state.books_list, action.book] },
      DELETE_LIVRE: {
        ...state,
        books_list: state.books_list.filter(
          (item) => item.id !== action.bookId
        ),
      },
    };
    return actions[action.type] !== undefined ? actions[action.type] : state;
  }
};

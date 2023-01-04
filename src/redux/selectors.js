import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;

// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state);
//     const todosRemaining = state.todoList.filter((todo) => {
//        return todo.name.includes(state.filters.search);
//     });

//     return todosRemaining;
// }

// export const searchTextSelector = (state) => state.filters.search;
// reselect

export const todosRemainingSelector = 
    createSelector(
        todoListSelector, 
        searchTextSelector, 
        (todoList, searchText) => {
        return todoList.filter((todo) => {
            return todo.name.includes(searchText);
    })
});
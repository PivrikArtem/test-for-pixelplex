import { c } from './toDolist-actions';
export function toDoListReducer(oldState, action) {
    switch (action.type) {

        case c.PUT_TASKS:
            return {
                ...oldState,
                tasks: [...oldState.tasks, ...action.tasks]
            }

        case c.SHOW_LOADING_GIF:
            return {
                ...oldState,
                tasks: [...action.tasks]
            }

        case c.CREATE_NEW_TASK:
            return {
                ...oldState,
                tasks: [...oldState.tasks, action.task]
            }
        case c.DELETE_TASK:
            return {
                ...oldState,
                tasks: [...oldState.tasks.filter((t) => { return t.id !== action.taskId })]

            }

        default:
            if (!!oldState) {
                return oldState;
            }
            return {
                tasks: [],
            };
    }
}
export const c = {

    PUT_TASKS: 'PUT_TASKS',
    SHOW_LOADING_GIF: 'SHOW_LOADING_GIF',
    CREATE_NEW_TASK: 'CREATE_NEW_TASK',
    DELETE_TASK: 'DELETE_TASK',
}

export const putTasksAction = (tasks) => {
    return {
        type: c.PUT_TASKS,
        tasks: tasks
    }
}

export const showLoadingGif = (ArrayTasks) => {
    return {
        type: c.SHOW_LOADING_GIF,
        tasks: ArrayTasks
    }
}

export const createNewTask = (task) => {
    return {
        type: c.CREATE_NEW_TASK,
        task: task
    }
}

export const deleteTask = (taskId) => {
    return {
        type: c.DELETE_TASK,
        taskId: taskId
    }
}


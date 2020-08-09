import { initialNutrition, initialHealth, initialMeds, initialTasks, initialTable } from './initialState';


export const nutritionReducer = (state = initialNutrition, action) => {
    switch (action.type) {
        case "DATA_NUTRITION_SUCCEEDED":
            if (action.nutrition)
                state.data = action.nutrition;
            console.log("nutrition")
            return state;

        default:
            return state;
    }
};


export const healthReducer = (state = initialHealth, action) => {
    switch (action.type) {
        case "DATA_HEALTH_SUCCEEDED":
            if (action.health)
                state.data = action.health;
            console.log("health")
            return state;
        default:
            return state;
    }
};

export const medsReducer = (state = initialMeds, action) => {
    switch (action.type) {
        case "DATA_MEDS_SUCCEEDED":
            if (action.meds)
                state.data = action.meds;
            console.log("meds")
            return state;
        default:
            return state;
    };
};

export const tasksReducer = (state = initialTasks, action) => {
    switch (action.type) {
        case "DATA_TASKS_SUCCEEDED":
            if (action.tasks)
                state.data = action.tasks;
            console.log("tasks")
            return state;
        default:
            return state;
    };
};

export const tableReducer = (state = initialTable, action) => {
    switch (action.type) {
        case "DATA_TABLE_SUCCEEDED":
            if (action.table)
                state.data = action.table;
            console.log("table")
            return state;
        default:
            return state;
    };
};





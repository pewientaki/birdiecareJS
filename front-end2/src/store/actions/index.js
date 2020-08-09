export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'INCREMENT'
    };
};

export const fetchNutrition = (patientId) => {
    return {
        type: 'NUTRITION_DATA_REQUESTED',
        payload: { patientId }
    };
};

export const fetchHealth = (patientId) => {
    return {
        type: 'HEALTH_DATA_REQUESTED',
        payload: { patientId }
    };
};

export const fetchMeds = (patientId) => {
    return {
        type: 'MEDS_DATA_REQUESTED',
        payload: { patientId }
    };
};

export const fetchTasks = (patientId) => {
    return {
        type: 'TASKS_DATA_REQUESTED',
        payload: { patientId }
    };
};

export const setTable = (tableData, title) => {
    return {
        type: 'TABLE_DATA_REQUESTED',
        payload: { tableData, title }
    };
};

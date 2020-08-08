
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

export const fetchData = (patientId) => {
    return {
        type: 'DATA_WEEKLY_REQUESTED',
        payload: {patientId}
    };
};

export const setCards = () => {
    return {
        type: 'SET_CARDS'
    };
};
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const addFeature = (feature) => {
    return {type: ADD, payload: feature}
}

export const removeFeature = (feature) => {
    return {type: REMOVE, payload: feature}
}
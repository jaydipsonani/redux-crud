export const addData = (data) => {
    console.log("222222", data);
    return {
        type: "ADD_DATA",
        payload: data
    }
}

export const removeData = (index) => {
    return {
        type: "REMOVE_DATA",
        payload: index
    }
}

export const editData = (index, newData) => {
    return {
        type: "EDIT_DATA",
        payload: { index, newData }
    }
}
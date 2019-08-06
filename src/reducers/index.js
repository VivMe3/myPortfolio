const selectedImageReducer = (selectedImage = null, action) => {
    if (action.type === 'IMAGE_SELECTED') {
        return action.payload;
    }
    return selectedImage;
};

export default selectedImageReducer;
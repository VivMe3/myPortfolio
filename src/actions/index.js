export const selectImage = (image) => {
    return {
        type: 'IMAGE_SELECTED',
        payload: image
    }
}
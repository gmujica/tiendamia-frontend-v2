export const formatDate = (e) => {
    const date = new Date(e);
    return date.toLocaleDateString(); 
};
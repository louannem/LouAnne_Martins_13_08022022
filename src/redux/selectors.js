export const selectorUserLog = () => { return (state) => state.user.logged}
export const selectState = (state) => state.user
export const selectError = (state) => state.user.error
export const selectData = (state) => state.user.data
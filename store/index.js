export const state = () => ({
    employees: []
});

export const mutations = {
    setEmployees (state, employees) {
        state.employees = employees
    }
}

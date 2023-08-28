export default {
    setAuthentication({commit}, authentication) {
        if (authentication.email && authentication.password) {
            authentication.connected = true
            authentication.name = `michael`
            authentication.age = 32
            authentication.adresse = `13cité du champ bareau`
            authentication.pictureProfile = null
        }
        commit('setAuthentication', authentication)
    }
}

const BASE_URL = "https://haleysportfolioserver.herokuapp.com"

module.exports = {
    postMessage: (messageObj) => {
        return fetch(`${BASE_URL}/api/messages`, {
            method:"POST",
            body:JSON.stringify(messageObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    }
}
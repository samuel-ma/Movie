
import axios from "axios";

export default axios.create({
    baseURL: "https://api.themovedb.org/3",
    headers:{
        Accept: "application/json"
    },
    params: {
        api_key: "a3985284ae4c1570e3b3123fced85f63"
    }
})

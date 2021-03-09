import axios from "axios"
export default axios.create ({
    baseUrl:"https://api.unsplash.com/",
    headers:{
        Authorization: "Client-ID EcHdHQuP6RoN7MggJT2golp7yyilQA7yiLTWOclejFY",
    }
})
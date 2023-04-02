import {useCallback} from "react"
import axios from "axios";
export default function usePost() {
    const request = useCallback(async (url, data, body = null, headers = {"Content-type": "application/json"}) => {
        try{
            // fetch method
            // const response = await fetch(url, {method,body,headers})
            // const data =  await response.json()
            // return data

            // axios method
            const response= await axios.post(url, data).then(data=>data.data)
            return response

        }catch (e) {
            console.log(e)
        }
    }, [])
    return {request}
}
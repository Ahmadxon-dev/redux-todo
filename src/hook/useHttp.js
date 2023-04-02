import {useCallback} from "react"
import axios from "axios";
export default function useHttp() {
    const request = useCallback(async (url, method = "Get", body = null, headers = {"Content-type": "application/json"}) => {
        try{
            // fetch method
            // const response = await fetch(url, {method,body,headers})
            // const data =  await response.json()
            // return data

            // axios method
            const response= axios.get(url).then(data=>data.data)
            return response

        }catch (e) {
            console.log(e)
        }
    }, [])
    return {request}
}
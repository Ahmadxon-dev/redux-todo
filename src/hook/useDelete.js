import {useCallback} from 'react'
import axios from "axios"
export default function useAdd() {
	const request = useCallback(async (url,id,)=>{
		try{
			const response = await axios({url:`${url}/news/${id}`, method:"delete"}).then(()=>console.log("Delete successfull"))
			return response
		}catch(e){
			console.log(e)
		}
	})
	return {request}
}
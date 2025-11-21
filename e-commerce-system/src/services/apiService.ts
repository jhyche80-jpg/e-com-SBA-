import { DataError } from "../utils/ErrorHandler"
import { NetworkError } from "../utils/ErrorHandler"
export async function fetchData(url:string): Promise <any>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log("Fetched data:", data)
    } catch(error:unknown){
        if(error instanceof NetworkError){
        console.error("Network error:", error.message)
    }else if (error instanceof DataError){
        console.error("Data Error", error.message)
    }else if (error instanceof Error) {
      console.error("Unknown error:", error.message);
    }
    }
    }
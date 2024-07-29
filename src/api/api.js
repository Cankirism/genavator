import axios from "axios";
const baseUrl = "https://api.dicebear.com/8.x";
const api = axios.create({
    baseURL:baseUrl;
})

export const getHairStyles = async (styleName)=>{
    const schemaEndpoint = `${baseUrl}/${styleName}/schema.json`;
    const result = await api.get(schemaEndpoint);
    const hairStyles = result.data.hair; 
}
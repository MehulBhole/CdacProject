import axios from "axios";

export async function sendServiceProviderData(formData)
{        
    try {
        console.log(formData);
        const response = axios.post("http://localhost:9090/registerprovider",formData);
        console.log(response)
        return response; 

    }catch(error){
            console.log(error);
    }
                
}
export async function sendServiceProviderLoginData(userLogin){
    try {
        const response  = axios.post("http://localhost:9090/loginprovider",userLogin);
        return response;
    } catch (error) {
        console.log(error);
    }
}
export async function fetchById(userId){
    try {
        const response  = axios.get(`http://localhost:9090/userdetails/${userId}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}
export async function getServiceById(id)
{        
    try {
        const response = axios.get(`http://localhost:9090/serviceproviderdata/${id}`);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function sendDataServiceDetails(companydata)
{        
    try {
        const response = axios.post(`http://localhost:9090/addCompanyDetails`,companydata);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function servicesDataFetch(id)
{        
    try {
        const response = axios.get(`http://localhost:9090/getservicedetailsbyid/${id}`);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function companyAppliedIdStud(companyId,studId)
{        
    try {
        const response = axios.get(`http://localhost:9090/approveCompanyIdStud/${companyId}/${studId}`);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function fetchbyapprovalstatus(studId)
{        
    try {
        const response = axios.get(`http://localhost:9090/approveCompanyFetchstatus/${studId}`);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}


export async function serviceDeleteById(propertyid)
{        
    try {
        const response = axios.delete(`http://localhost:9090/deletecompanybyid/${propertyid}`);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function servicesDataFetchByCity(city)
{        
    try {
        const response = axios.get(`http://localhost:9090/getservicedetailsbycity/${city}`);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}


import * as axios from 'axios';
const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "027da528-2565-4528-be5d-2ae5e3655c3f"
        }
    }
);


export const authAPI = {
    me(){
        return instance.get (`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post (`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete (`auth/login`);
    }
}


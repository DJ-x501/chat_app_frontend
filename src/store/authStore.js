import apiFunction from "@/lib/apiFunction";
import apiUrl from "@/lib/apiUrl";
import showToast from "@/lib/showToast";

const { create } = require("zustand");

const useAuth  = create((set,get)=>({
    userObject:{
        name:"",
        email:"",
        password:"",
    },
    setUserObject:function(name,value){
        set((state)=>({userObject:{...state.userObject,[name]:value}}))
    },

    register:async function(){
        const {userObject} = get();
        const data = await apiFunction({url:apiUrl.register,payload:userObject,type:"post"});
        console.log("data>>>>>>>>>>",data)
        showToast(data);
    }
}))

export default useAuth;
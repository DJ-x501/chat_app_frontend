import {toast} from "react-hot-toast"


function showToast(data){
    if(data?.status){
        toast.success(data?.message)
    }else{
        toast.error(data?.message)
    }
};

export default showToast;
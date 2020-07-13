import {request} from "./request";

export function getScan(){
    return request({
        url:'/treehole/index.php/Home/Message/get_all_messages'
    })
}
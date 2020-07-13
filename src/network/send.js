import {request} from "./request";

export function send(){
    return request({
        url:'/treehole/index.php/Home/Message/publish_new_message'
    })
}
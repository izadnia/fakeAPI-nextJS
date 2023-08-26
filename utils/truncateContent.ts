export const truncateContent =
(str: string)=> {
    if(str.length <180) 
    return str
    return str.substring(0,180)+"...";
};
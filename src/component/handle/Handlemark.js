import { toast } from "react-toastify";


 const getstoremarkAsread = () =>{

    const storedlistStr = localStorage.getItem('read-list');
    if (storedlistStr){
        const  storedlist = JSON.parse(storedlistStr);
        return storedlist;
    }
    else{
        return [];
    }

 }

 const addstoremarkAsread = (id) =>{
    const storedAsread = getstoremarkAsread();
     
if (storedAsread.includes(id)){
   console.log(id,"it's found the list");

}
else{
    storedAsread.push(id);
    const storedliststring=JSON.stringify(storedAsread);
    localStorage.setItem('read-list',storedliststring);
   
     toast('This book is Added on the reammark');
  
}
 }




  
 export{addstoremarkAsread,getstoremarkAsread}
const getstorewishmarkAsread = () =>{
    const storwishstr = localStorage.getItem('add wishlist');
    if(storwishstr){
        const stringaddwish = JSON.parse(storwishstr);
        return stringaddwish;
    }
    else{
        return[];
    }
}



const addstorewishmarkAsread = (id) =>{
    const storewishread  =getstorewishmarkAsread();
    if(storewishread.includes(id)){
        console.log(id,' found the list ');
    }
    else{
        storewishread.push(id);
        const storewishstrignfy = JSON.stringify(storewishread);
        localStorage.setItem('add wishlist',storewishstrignfy);
    }
}
export {addstorewishmarkAsread};
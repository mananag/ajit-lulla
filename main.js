const openPage = (x)=>{
    let location = x + '-container';
    if(x===''){
        location = 'container';
    }
    document.getElementById(location).scrollIntoView();
}
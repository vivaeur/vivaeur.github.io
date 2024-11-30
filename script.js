var btncopy = document.querySelector('.js-copy');
if(btncopy) {
    btncopy.addEventListener('click', docopy);
}

function docopy() {
    var range = document.createRange();
    var target = this.dataset.target;
    var fromElement = document.querySelector(target);
    var selection = window.getSelection();

    range.selectNode(fromElement);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        var result = document.execCommand('copy');
        if (result) {
            alert('tu as mon adresse mail ');
        }
    }
    catch(err) {
        alert(err);
    }

    selection = window.getSelection();

    if (typeof selection.removeRange === 'function') {
        selection.removeRange(range);
    } else if (typeof selection.removeAllRanges === 'function') {
        selection.removeAllRanges();
    }
}



const a = document.querySelector('.clock');






const timer = () =>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
   // console.log(hours,":",minutes,":",seconds);


   const template = `<span> Heure :  </span>
                     <span>${hours} </span>  
                     <span>${minutes} </span> 
                     <span>${seconds}</span>
   
   `


   a.innerHTML =template;
};



setInterval(timer,1000);
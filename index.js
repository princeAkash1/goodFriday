let comingCount =0;
let notComingCount =0;

function updateCount(response){
    if(response=="coming"){
        comingCount++;
        document.getElementById('comingNumber').textContent=comingCount;
    }else if(response=="not-coming"){
        notComingCount++;
        document.getElementById('notComingNumber').textContent=notComingCount;

    }


}

const locationLink = document.getElementById('locationLink');
locationLink.href = 'https://maps.app.goo.gl/Rr6svZpSgKpzkLHE7';

const generateButton = document.getElementById ('generate-ticket');
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById ('user-name').value;
        const userKm = parseInt (document.getElementById ('user-km').value);
        const userAge = document.getElementById ('user-age').value;

        const price = userKm * 0.21;
        let discount = 0;

        if (userAge === 'minorenne') {
            discount = price * 20 / 100;
            userOffer= 'Tariffa ridotta 20%'
        } else if ( userAge === 'over') {
            discount = price * 40 / 100;
            userOffer= 'Tariffa ridotta 40%'
        } else if ( userAge === 'maggiorenne'){
            price;
            userOffer= 'Tariffa standard';
        }

        const finalPrice = price - discount;
        
        document.getElementById ('ticket-name').innerHTML=userName;
        document.getElementById ('offer').innerHTML=userOffer;
        document.getElementById ('ticket-price').innerHTML= finalPrice.toFixed(2);
        document.getElementById ('ticket').classList.add ('active');
        document.getElementById ('ticketone').classList.add ('active');


        let userCarrozza= Math.floor(Math.random()*9)+1;
        document.getElementById ('carrozza').innerHTML=userCarrozza;

        let userCp= Math.floor(Math.random()*10000)+1;
        document.getElementById ('cp').innerHTML=userCp;
    }
);
const cancelTicket = document.getElementById ('cancel-ticket');
cancelTicket.addEventListener('click',
   function (){
       document.getElementById ('user-name').value='';
       document.getElementById ('user-km').value='';
       document.getElementById ('user-age').value='Mggiorenne';
    }
);
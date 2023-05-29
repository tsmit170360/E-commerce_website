package Images;let text = document.getElementById('abt-logo');
text.innerHTML='Toys and sports';
        const sel = document.getElementById('abt-logo');

        let text='Toys and sports';

        let index=1;
        function autotext(){
        sel.innerText= text.slice(0, index);
        index++;

        if(index>text.length-1){
        index=0;
        }
        setInterval(autotext(),100);

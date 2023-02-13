var btn = document.getElementById('btn');


function SingoloTODO(descrizione, data){
    this.descrizione = descrizione;
    this.data = data;
}

function prendiTODO(){
    var data = document.getElementById('data').value;
    var todo = document.getElementById('todo').value;

    var mioTODO = new SingoloTODO(todo, data);

    var todoCostruito = mioTODO.descrizione + " - " + mioTODO.data;
    
}

btn.onclick = prendiTODO;





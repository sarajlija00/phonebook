function phoneBook (){
    let ime = document.getElementById ('ime').value;
    let prezime = document.getElementById ('prezime').value;
    let telefon = document.getElementById ('telefon').value;
    document.getElementById ('table');
    document.getElementById ('body').innerHTML += '<tr><td>${ime}</td><td>${prezime}</td><td>${telefon}</td></tr>';
}

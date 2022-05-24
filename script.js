function myFunction() {
    let loginStr = document.getElementById("Name").value;
    let pasStr = document.getElementById("Pas").value;

    let SexStr;
    if (document.getElementById('Male').checked) {
        SexStr = document.getElementById('Male').value;
    }
    else if(document.getElementById('Female').checked){
        SexStr = document.getElementById('Female').value;
    }

    let CountryStr = document.getElementById("country").value;
    let fullTextStr = document.getElementById("FullText").value;

    var Full = (loginStr.length + '\n' + pasStr + '\n' + SexStr + '\n' + CountryStr + '\n' + fullTextStr );
    if(loginStr.length == 0 || pasStr.length == 0 || SexStr.value == '' || CountryStr.value == '')
    {
        alert('Please fill all fields!')
    }
    else if(loginStr.length < 5)
    {
        alert('Not a valid number')
    }
    else
    {
        console.log(loginStr);
        console.log(pasStr);
        console.log(SexStr);
        console.log(CountryStr);
        console.log(fullTextStr);

        var w = window.open('index2.html');
        w.myVariable = Full;
    }
}

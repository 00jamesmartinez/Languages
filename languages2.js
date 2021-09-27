const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

var arrayInput=new Array();

for(var i=0;i<arrayInput.length();i++)
{
    arrayInput[i].addEventListener('click',chkLang(langs));
}

function chkLang(langs) {
    let result = false

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    var found = arrayInput.find(function(element){
        if (element === 'Javascript')
        return true;
        else return false;
    });
    console.log(found);

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}
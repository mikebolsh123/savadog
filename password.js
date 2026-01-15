document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById('main-form');

    var name = el.name.value;
    var pass = el.pass.value;
    
    
    var fail = "";

    if(name == "" || pass == "") {
        fail = "Заполните все поля!";
    }
    else if(name.length < 2){
        fail = "Слишком короткое имя!";  
    }
    else if(pass !="savadog"){
        fail = "Неверный пароль!";  
    }
    // else if(pass.split("&").length > 1){
    //     fail = "Есть запрещенные символы(&)!"; 
    // }

    if (fail != "" ) {
        document.getElementById('error').innerHTML = fail;
    }

    else{
        alert("Здравствуй, " + name + "!" + " Добро Пожаловать на сайт!!!");
        fail = "Верный пароль!"; 
        window.location = 'main.html';
        
    }
    
}
function getAdmins(mapa) {
    let listaAdmin = [];
    for(user of mapa){
        if(user[1] === "Admin"){
            listaAdmin.push(user[0]);
        }
    }
    return listaAdmin;
}

const userMap = new Map();

userMap.set('Guilherme', 'Admin');
userMap.set('Alex', 'Admin');
userMap.set('Luiz', 'User');
userMap.set('Sertão', 'User');

console.log(getAdmins(userMap));

/*===============Resposta Professora===================*/

function getAdmins2(map){
    let admins = [];
    
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'User');

console.log(getAdmins2(usuarios));
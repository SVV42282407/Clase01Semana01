const dataList = [{
    "idioma":"Español",
    "texto":"Bienvenido al curso de React Native en PachaQtec",
    "id_idioma":1
 },
 {
    "idioma":"Ingles",
    "texto":"Welcome to the React Native course at PachaQtec",
    "id_idioma":2
 },
 {
    "idioma":"Francés",
    "texto":"Bienvenue dans le cours React Native chez PachaQtec",
    "id_idioma":3
 },
 {
    "idioma":"Italiano",
    "texto":"Benvenuti al corso React Native presso PachaQtec",
    "id_idioma":4
 },
 {
    "idioma":"Portugués",
    "texto":"Bem-vindo ao curso React Native na PachaQtec",
    "id_idioma":5
 }
]

const traducir = (data, text, idiomaDestino) => {
    var r = data.some(i => i.texto.includes(text));
    if (r){
        for (el in data){
            if (idiomaDestino == data[el].idioma){
                return data[el].texto;
            }
        }
    }
    return false;
}

const traducir2 = (data, text, idiomaDestino) => {
    var r = data.some(i => i.texto.includes(text));
    if(r){
        var idioma = data.find(i => i.idioma === idiomaDestino);
        return idioma.texto;
    } else {
        return false;
    }
}

console.log(traducir2(dataList, 'Bienvenue dans le cours React Native chez PachaQtec', 'Italiano'));


import fs from 'fs';

//Leer un archivo de manera asincrona

fs.readFile('./example.txt','utf8',(err,data) =>{
    if (err) throw err;
    console.log ('Contenido del archivo:',data);
});

//Escribir en un nuevo archivo

fs.writeFile ('./newfile.txt','Contenido Nuevo', (err) =>{
    if (err) throw err;
    console.log('Archivo creado y escrito');
});

//Renombra un archivo 

fs.rename ('./newfile.txt', './archivoRenombrado.txt', (err) => {
    if (err) throw err ;
    console.log('Archivo renombrado');
});
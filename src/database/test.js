const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async function(db) {
    // Inserir dados na tabela
   await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos" ,
    about: "Presta abrigo para as crianças de 6 15 anos que econtram-se em situação de vunerailidade. ",
    whatsapp: "40028922",
    images: [
        "https://s2.glbimg.com/4SqTyOje7Dk8G-vRmqFd2qbmRC4=/0x0:3648x2432/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/H/U/5IQDymSwGgkQBZ2ImVkg/img-9489.jpg",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr_GmXVmdSVd5et-keQTvAFJJxAggELhEoTg&usqp=CAU"
    ].toString(),

    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
})

    // consultar dados da tabela 
    const selectedOrphanages = await db.all(" SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

   // deletar dado da tela
//    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
    
})
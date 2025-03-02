const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Grupo-05:grupo05@cursadanodejs.ls9ii.mongodb.net/Node-js")

.then(() => console.log("conexion exitosa a mongodb"))
.catch((error) => console.log("error al conectar a mongodb", error));


const superheroSchema = new mongoose.Schema({
    nombreSuperheroe: { type: String, required: true},
    nombreReal: { type: String, required: true},
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String
}, { collection: 'Grupo-05' })

const Superhero = mongoose.model('Superhero', superheroSchema)


async function insertSuperhero() {
    const hero = new Superhero({
        nombreSuperheroe: 'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poderes: ['Sentido arácnido', 'Fuerza', 'Agilidad'],
        aliados: ['Ironman'],
        enemigos: ['Duende Verde'],
        creador: 'Ramiro'
    })
    await hero.save()
    console.log('superheroe insertado:', hero)
}

insertSuperhero()


async function updateSuperhero(nombreSuperheroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperheroe: nombreSuperheroe },
        { $set: { edad: 26 } }
    )
    console.log('resultado de la actualizacion:', result)
}

updateSuperhero('Spiderman')


async function deleteSuperhero(nombreSuperheroe) {
    const result = await SuperHero.deleteOne({ nombreSuperheroe: nombreSuperheroe })
    console.log('superheroe eliminado:', result)
}

deleteSuperhero('Spiderman')


async function findSuperHeroes() {
    const heroes = await Superhero.find({ planetaOrigen: 'Tierra' })
    console.log('superheroes encontrados:', heroes)
}

findSuperHeroes()
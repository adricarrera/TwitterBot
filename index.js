const { TwitterApi } = require('twitter-api-v2');

// Configura tus credenciales de acceso

const client = new TwitterApi({
    appKey: 'lN3R9QJEYjcxQsmFUvaYjYFEq',
    appSecret: 'Z9k3E9YhaBjrQN9jgrKgCAsgHYFtA6tJtZ4tJ6vKkEL7htU25v',
    accessToken: '1438217385098588168-sQ3NC3zN8e3BBGo93pgUDXNLXa6PFg',
    accessSecret: 'elBTK8Qqk2ustTDrCMbo5kQXeWoIj44ppfwbfEcyxE8l6',
});


function getRandomUserId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Función para publicar un tweet
async function postTweet(text) {
    try {
        const response = await client.v2.tweet(text);
        console.log('Tweet publicado:', response.data);
    } catch (error) {
        console.error('Error al publicar el tweet:', error);
    }
}

// Texto del tweet
const tweets = [
    "¿Cuál es tu serie favorita de todos los tiempos? ¡A mí me encanta #StrangerThings!",
    "Acabo de ver #TheLastOfUs y fue increíble. ¿Quién más está obsesionado con esta serie?",
    "¡La nueva película de Marvel es épica! 🎬 ¿Cuál es tu héroe favorito?",
    "No puedo dejar de pensar en el final de #BreakingBad. ¿Qué te pareció a ti?",
    "¡Es hora de una maratón de #HarryPotter! 🧙‍♂️ ¿Cuál es tu película favorita de la saga?",
    "¿Alguien ha visto #TheBear? ¡Es la serie del momento y no puedo esperar para el próximo episodio!",
    "El regreso de #GameOfThrones fue impresionante. ¿Qué opinas del último episodio?",
    "¡Acabo de terminar de ver #MoneyHeist y estoy en shock! 😱 ¿Qué te pareció el final?",
    "¿Cuál es tu película de ciencia ficción favorita? 🚀 ¡Recomiéndame alguna!",
    "¡No puedo esperar a la nueva temporada de #TheWitcher! 🎮 ¿Qué expectativas tienes?",
    "¿Alguien más se está viendo la serie #Succession? ¡Es una montaña rusa de emociones!",
    "¿Tienes alguna recomendación de película de terror para esta noche? 👻 #HorrorMovies",
    "Acabo de ver #Inception y aún estoy tratando de entender el final. ¿Qué opinas tú?",
    "¡El último episodio de #TheOffice fue un viaje nostálgico! ¿Cuál es tu episodio favorito?",
    "¿Qué serie estás viendo ahora mismo? 📺 Yo estoy enganchado con #Ozark.",
    "¡Recomendación de la semana! #Parasite es una película que no te puedes perder. 🎥",
    "¿Cuál es la mejor adaptación de un libro que has visto? 📚 #TheLordOfTheRings",
    "¡Maraton de películas de #StarWars en camino! 🌌 ¿Cuál es tu personaje favorito?",
    "¿Alguien ha visto #Daredevil en Netflix? ¡Es brutal! 💥",
    "¡La banda sonora de #GuardiansOfTheGalaxy es simplemente perfecta! 🎶 ¿Qué canción te gusta más?",
];


const tweetsToFamous = [
    ".¡Qué gran momento! @BarackObama siempre sabe cómo inspirar con sus palabras.",
    ".Acabo de ver el último video de @BillieEilish y es absolutamente impresionante. 🎶",
    ".¡Feliz cumpleaños a @selenagomez! 🎉 Espero que tengas un día increíble.",
    ".No puedo esperar para el nuevo lanzamiento de @ArianaGrande. ¡Siempre nos sorprende! 🌟",
    ".La actuación de @Zendaya en la última temporada de #Euphoria ha sido increíble. 👏",
    ".El estilo de @Rihanna siempre está a otro nivel. ¡Definitivamente una ícono de la moda! 👑",
    ".No puedo dejar de pensar en el discurso de @Oprah en la última gala. ¡Tan poderoso! ✨",
    ".¡@TomHolland1996 está deslumbrante en la nueva película de Spider-Man! 🕷️",
    ".El nuevo álbum de @Drake está en repeat. ¡Genial como siempre! 🔥",
    ".Las fotos de @KimKardashian en la última sesión de fotos son simplemente increíbles. 📸",
    ".¡El nuevo libro de @StephenKing es aterradoramente bueno! ¿Ya lo has leído? 📚",
    ".La última entrevista de @ChrisEvans fue fascinante. ¡Un tipo muy interesante! 🎥",
    ".Siempre me sorprende la creatividad de @LadyGaga. ¡Su última actuación fue mágica! 🌟",
    ".¡Felicidades a @shakira por el éxito de su nueva canción! ¡Sigue brillando! 🎶",
    ".No puedo esperar para ver el nuevo proyecto de @RyanReynolds. ¡Siempre elige papeles geniales! 🎬",
    ".La última foto de @DwayneJohnson en Instagram es épica. ¡Esa fuerza es real! 💪",
    ".¡@EllenDeGeneres sigue haciendo reír a todos con su humor único! 😂",
    ".El talento de @EmmaWatson es inigualable. ¡Su trabajo en el nuevo proyecto es fenomenal! 🎭",
    ".La última colaboración de @KanyeWest es un éxito total. ¡Qué genio de la música! 🎵",
    ".La moda de @GigiHadid siempre está en tendencia. ¡Inspírate con sus looks! 👗",
];


let cont = 0;
let contF = 0;
// Publica un tweet cada 60 minutos (3600000 ms)
setInterval(() => {
    postTweet(tweets[cont]);
    cont = (cont + 1) % tweets.length;
}, 3600000); // 3600000 ms = 60 minutos

// Menciona a un famoso cada 45 minutos (2700000 ms)
setInterval(() => {
    postTweet(tweetsToFamous[contF]);
    contF = (contF + 1) % tweetsToFamous.length;
}, 2700000); // 2700000 ms = 45 minutos
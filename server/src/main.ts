// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

const teamMembers = [
  {
    id: 1,
    name: {
      first: "Marwane",
      last: "Ben Khalifa",
      paragraph:
        "Belle contribution à la dynamique de groupe, toujours impliquée dans l'amélioration des fonctionnalités et avec une grande flexibilité pour toucher à différentes parties du projet.",
    },
    linkedin: "https://www.linkedin.com/in/marwane-ben-khalifa-283413335/",
    picture: {
      medium: "/assets/images/Marwane.png",
    },
  },
  {
    id: 2,
    name: {
      first: "Pierre",
      last: "De Castelbajac",
      paragraph:
        "Une forte implication technique et une volonté de résoudre les défis rencontrés, tout en contribuant à maintenir une ambiance positive dans l’équipe.",
    },
    linkedin: "https://www.linkedin.com/in/pierre-de-castelbajac/",
    picture: {
      medium: "/assets/images/Pierre.png",
    },
  },
  {
    id: 3,
    name: {
      first: "Thomas",
      last: "Lemallier",
      paragraph:
        "Projet stimulant où chacun a pu explorer différentes facettes du développement, avec une excellente synergie d’équipe et une bonne ambiance tout au long du processus.",
    },
    linkedin: "https://www.linkedin.com/in/thomaslemallier/",
    picture: {
      medium: "/assets/images/Thomas.png",
    },
  },
  {
    id: 4,
    name: {
      first: "Nicolas",
      last: "Chiche",
      paragraph:
        "Engagement solide avec une participation active sur tous les aspects du projet, montrant une réelle polyvalence et un bon esprit d’équipe.",
    },
    linkedin: "https://www.linkedin.com/in/nicolas-chiche-79903b2b0/",
    picture: {
      medium: "/assets/images/Nico.png",
    },
  },
];
app.get("/api/teamMembers", (req, res, next) => {
  res.json(teamMembers);
});
const smashArray = [
  {
    image: "/assets/images/Mario.png",
    name: "Mario",
    order: "1",
    description:
      "Mario est un personnage très populaire de Nintendo dont il est la mascotte, ainsi que le personnage principal de l'Univers Mario. Il apparaît dans tous les volets de la série Super Smash Bros.. C'est un combattant agile et puissant. ",
  },
  {
    image: "/assets/images/Donkey-kong.png",
    name: "Donkey-Kong",
    order: "2",
    description:
      "Donkey Kong, aussi nommé DK est le personnage principal de l'Univers Donkey Kong et quelquefois en tant qu'antagoniste dans l' Univers de Mario. ",
  },
  {
    image: "/assets/images/Luigi.png",
    name: "Luigi",
    order: "3",
    description:
      "Luigi est un personnage connu de l'Univers Mario. Il est le petit frère de Mario. Il à un jeu à son effigie qui se nomme Luigi's mansion ",
  },
  {
    image: "/assets/images/Peach.png",
    name: "Peach",
    order: "4",
    description:
      "La Princesse Peach, aussi anciennement connue sous le nom Princesse Toadstool en dehors du Japon, est un personnage principal de l'Univers Mario. C'est la princesse du Royaume Champignon.  ",
  },
  {
    image: "/assets/images/Bowser.png",
    name: "Bowser",
    order: "5",
    description:
      "Bowser est le principal antagoniste de l'Univers Mario. Bowser ressemble à une grosse tortue à tête de dragon et aux cornes de taureau. Il a une épaisse carapace à épines et une crête rouge écarlate. Il possède des bracelets noirs sur ses poignets et épaules et un collier de la même couleur et même apparence que ses bracelets attaché à son cou.  ",
  },
  {
    image: "/assets/images/Dr Mario.png",
    name: "Dr Mario",
    order: "6",
    description:
      "Docteur Mario est Mario tel qu'il apparaît dans les jeux de la série Dr. Mario. Il apparaît pour la première fois en combattant dans Melee, où il est séparé de Mario.  ",
  },
  {
    image: "/assets/images/Harmonie.png",
    name: "Harmonie",
    order: "7",
    description:
      " Harmonie est un personnage de l'Univers Mario. Elle apparaît comme combattante aux côtés de Luma.Harmonie est apparue la première fois dans Super Mario Galaxy, en 2007.   ",
  },
  {
    image: "/assets/images/BowserJr.png",
    name: "Bowser Jr.",
    order: "8",
    description:
      "Bowser Jr. est le fils de Bowser et le deuxième antagoniste principal de l'Univers Mario. ",
  },
  {
    image: "/assets/images/PlantePiranha.png",
    name: "Plante Piranha",
    order: "9",
    description:
      "C'est des plantes carnivores rouges avec des taches blanches. Leur tige est normalement verte, mais dans Super Smash Bros., elle est marron. ",
  },
  {
    image: "/assets/images/KingKRool.png",
    name: "King K. Rool",
    order: "10",
    description:
      "King K. Rool est un antagoniste principal de l'Univers Donkey Kong.King K. Rool est un gros crocodile vert bipède qui porte une couronne en or et une grande cape rouge et des bracelets dorés.  ",
  },
  {
    image: "/assets/images/Diddy-Kong.png",
    name: "Diddy Kong",
    order: "11",
    description:
      "Diddy Kong est un personnage principal de l'Univers Donkey Kong. Il est le fidèle acolyte et meilleur ami de Donkey Kong.  ",
  },
  {
    image: "/assets/images/Link.jpg",
    name: "Link",
    order: "12",
    description:
      "Link est le protagoniste principal de l'Univers Zelda. C'est l'ami d'enfance de la Princesse Zelda. Il apparait dans tous les jeux de la série comme personnage de départ, faisant partie des 12 personnages originaux.  ",
  },
  {
    image: "/assets/images/Zelda.jpg",
    name: "Zelda",
    order: "13",
    description:
      "La Princesse Zelda est un personnage principal de l'Univers Zelda. Bien que la série porte son nom et qu'elle joue un rôle majeur, ce n'est pas elle le personnage principal. Zelda apparaît en tant que combattante depuis Melee.  ",
  },
  {
    image: "/assets/images/Sheik.jpg",
    name: "Sheik",
    order: "14",
    description:
      "Sheik est un personnage de l'Univers Zelda, et c'est une transformation de la Princesse Zelda. Sheik apparaît pour la première fois dans Super Smash Bros. Melee. Malgré son apparence masculine, Sheik est une femme.  ",
  },
  {
    image: "/assets/images/Ganondorf.jpg",
    name: "Ganondorf",
    order: "15",
    description:
      "Ganondorf est l'antagoniste principal de l'Univers Zelda. Il possède le fragment de la Triforce symbolisant la Force. Sa forme animale est nommée Ganon. ",
  },
  {
    image: "/assets/images/LinkJeune.jpg",
    name: "Link enfant",
    order: "16",
    description:
      "Link enfant est la version enfante du Link de The Legend of Zelda: Ocarina of Time. Tout comme lui, il porte une tunique verte, qui est celle portée par les Kokiris, le peuple qui l'a adopté. Cependant, il se bat à l'aide de l'épée Kokiri et du Bouclier Mojo. ",
  },
  {
    image: "/assets/images/LinkCartoon.jpg",
    name: "Link Cartoon",
    order: "17",
    description:
      "Link Cartoon est un des personnages principaux de l'Univers Zelda. C'est tout simplement Link lors de divers apparitions dans quelques jeux. Link Cartoon est un des personnages principaux de l'Univers Zelda. C'est tout simplement Link lors de divers apparitions dans quelques jeux.  ",
  },
  {
    image: "/assets/images/Samus.jpg",
    name: "Samus",
    order: "18",
    description:
      "Samus Aran est la principale protagoniste de l'Univers Metroid. Elle combat les Pirates de la Galaxie. Samus apparaît dans tous les jeux de la série comme personnage de départ, en plus d'avoir une version sans sa combinaison. ",
  },
  {
    image: "/assets/images/SamusSansArmure.jpg",
    name: "Samus sans arumure",
    order: "19",
    description:
      "La combinaison Zéro de Samus est la tenue portée par la chasseuse de primes quand sa combinaison de puissance est désactivée. ",
  },
  {
    image: "/assets/images/Ridley.jpg",
    name: "Ridley",
    order: "20",
    description: "Ridley est un antagoniste principal de l'Univers Metroid. ",
  },
  {
    image: "/assets/images/SamusSombre.jpg",
    name: "Samus sombre",
    order: "21",
    description:
      "Samus sombre est une antagoniste de l'Univers Metroid dans la série Metroid Prime.  ",
  },
  {
    image: "/assets/images/Yoshi.jpg",
    name: "Yoshi",
    order: "22",
    description:
      "Yoshi est un personnage important de l'Univers Mario et le principal de l'Univers Yoshi. Il apparaît en tant que personnage jouable disponible dès le départ dans tous les jeux de la série.  ",
  },
  {
    image: "/assets/images/Kirby.jpg",
    name: "Kirby",
    order: "23",
    description:
      "Kirby est un personnage connu de Nintendo et le principal protagoniste de l'Univers Kirby. Il a été créé par Masahiro Sakurai, qui a aussi créé la série Super Smash Bros.. Il apparaît dans tous les jeux comme personnage de départ. ",
  },
  {
    image: "/assets/images/MetaKnight.jpg",
    name: "Meta Knight",
    order: "24",
    description:
      "Meta Knight est un personnage principal de l'Univers Kirby. C'est le rival de Kirby, et aussi son mentor. Il apparaît dans Super Smash Bros. Melee en tant qu'un Trophée et devient jouable dans Super Smash Bros. Brawl.  ",
  },
  {
    image: "/assets/images/RoiDadidou.jpg",
    name: "Roi Dadidou",
    order: "25",
    description:
      "Roi Dadidou est un personnage très récurent, parfois antagoniste, parfois protagoniste, de l'Univers Kirby.  ",
  },
  {
    image: "/assets/images/Fox.jpg",
    name: "Fox McCloud",
    order: "26",
    description:
      "Fox McCould est le protagoniste principal de l'Univers Star Fox. Fox McCloud est le leader de l'équipe de mercenaires Star Fox, dont il a repris les rennes après la disparition de son père, James McCloud.  ",
  },
  {
    image: "/assets/images/Falco.jpg",
    name: "Falco Lombardi",
    order: "27",
    description:
      "Falco Lombardi est un personnage principal de l'Univers Star Fox.Falco Lombardi est un membre de l'équipe Star Fox et le plus proche ami de Fox McCloud ainsi que son second. Falco faisait partie d'une troupe de voyous, mais à chaque fois que l'on lui pose une question sur son passé, il l'évite aussitôt ou change de sujet.   ",
  },
  {
    image: "/assets/images/Wolf.jpg",
    name: "Wolf O'Donnell",
    order: "28",
    description:
      "Wolf O'Donnell est un personnage de l'Univers Star Fox, et le commandant de Star Wolf, l'équipe rivale de Star Fox. Wolf est le rival de Fox McCloud, depuis l'école navale de Corneria ils se disputaient toujours la place de « premier pilote de ligne ».  ",
  },
  {
    image: "/assets/images/Pikachu.jpg",
    name: "Pikachu",
    order: "29",
    description:
      "Pikachu est une créature de l'Univers Pokémon, dont il est la mascotte. Pikachu est un Pokémon ressemblant à une souris, plus particulièrement au pika. Il est de type éléctrique  ",
  },
  {
    image: "/assets/images/Rondoudou.jpg",
    name: "Rondoudou",
    order: "30",
    description:
      "Rondoudou est une créature de l'Univers Pokémon. Elle apparaît dans tous les jeux de la série Super Smash Bros. comme jouable. Rondoudou est un Pokémon de type Normal, introduit dans Pokémon Rouge et Bleu. Il peut évoluer en Grodoudou au contact d'une Pierre Lune.   ",
  },
  {
    image: "/assets/images/Mewtwo.jpg",
    name: "Mewtwo",
    order: "31",
    description:
      "Mewtwo est un Pokémon légendaire de l'Univers Pokémon. Il apparaît dans Melee, et est un des 5 personnages à ne pas retourner dans Brawl. Il revient dans Smash 4 comme le premier personnage en contenu téléchargeable dans la série. Mewtwo, appelé le Pokémon Génétique, est un Pokémon légendaire de type Psy introduit dans Pokémon Rouge et Bleu. Il est le 150ème Pokémon dans l'ordre du Pokédex National.   ",
  },
  {
    image: "/assets/images/Pichu.jpg",
    name: "Pichu",
    order: "32",
    description:
      "Pichu est une créature de l'Univers Pokémon. Il apparaît dans Super Smash Bros. Melee mais ne retourne pas dans les jeux suivants. Pichu est une pré-évolution de Pikachu, introduit avec la deuxième génération.   ",
  },
  {
    image: "/assets/images/DresseurDePokemon.jpg",
    name: "Dresseur de Pokémon",
    order: "33",
    description:
      "Le Dresseur de Pokémon est un personnage de l'Univers Pokémon, qui capture des Pokémon et fait des combats avec. L'équipe de ce dresseur est composée de Carapuce, Herbizarre et Dracaufeu. Il représente la première génération de Pokémon. Ce dresseur se nomme Red par défaut dans la série, mais la série Super Smash Bros. le laisse sans nom.   ",
  },
  {
    image: "/assets/images/Lucario.jpg",
    name: "Lucario",
    order: "34",
    description:
      "Lucario est un Pokémon de l'Univers Pokémon. C'est un combattant jouable qui fut introduit dans Super Smash Bros. Brawl pour représenter la quatrième génération de Pokémon. Lucario, appelé le Pokémon Aura, est un Pokémon de type Combat et Acier introduit dans Pokémon Diamant et Perle. Il est la forme évoluée de Riolu.  ",
  },
  {
    image: "/assets/images/Amphinobi.jpg",
    name: "Amphinobi",
    order: "35",
    description:
      "Amphinobi est une créature de l'Univers Pokémon. Amphinobi, appelé le Pokémon Ninja, est un Pokémon de type Eau et Ténèbres introduit dans Pokémon X et Y. Il est l'évolution finale de Grenousse, le Pokémon de départ de type Eau à Kalos.    ",
  },
  {
    image: "/assets/images/Felinferno.jpg",
    name: "Félinferno",
    order: "36",
    description:
      "Félinferno est une créature de l'Univers Pokémon. Il est apparu comme combattant pour la première fois dans Super Smash Bros. Ultimate. Félinferno, appelé le Pokémon Vil Catcheur, est un Pokémon de type Feu et Ténèbres introduit dans Pokémon Soleil et Lune. Il est l'évolution finale de Flamiaou, le Pokémon de départ de type feu de la région d'Alola.  ",
  },
  {
    image: "/assets/images/CaptainFalcon.jpg",
    name: "Capitaine Falcon",
    order: "37",
    description:
      "Capitaine Falcon, de son vrai nom Douglas Jay Falcon, est le personnage principal de l'Univers F-Zero. Captain Falcon est un chasseur de primes âgé de 36 ans ainsi qu'un pilote émérite des courses F-Zero. Il s'est bâti une forte réputation dans le milieu des chasseurs de primes ce qui lui a valu de se faire de nombreux ennemis, notamment le sinistre Black Shadow. Il pilote le Blue Falcon, un bolide équilibré en poids et en vitesse.  ",
  },
  {
    image: "/assets/images/Ness.jpg",
    name: "Ness",
    order: "38",
    description:
      "Ness est le personnage principal du deuxième jeu de l'Univers EarthBound. C'est un garçon qui a des pouvoirs psychiques. Il apparaît dans tous les jeux de la série Super Smash Bros. Ness est un petit garçon vivant avec sa mère et sa sœur dans la banlieue de Onett, une bourgade tranquille dans le pays d'Eagleland.Un soir, une météorite s'écrasa près de la ville. Ness part voir de quoi il s'agit et découvre une espèce d'abeille mécanique, Buzz Buzz, qui lui apprend qu'elle vient de dix ans dans le futur, où le monde a été détruit par le terrible Giygas, aussi connu sous le nom du Destructeur Universel, et lui parle d'une légende où trois garçons et une fille le vaincront grâce à la sagesse, au courage, et à l'amitié. Ness va alors partir à l'aventure pour arrêter la menace de Giygas.   ",
  },
  {
    image: "/assets/images/Lucas.jpg",
    name: "Lucas",
    order: "39",
    description:
      "Lucas est un personnage de l'Univers EarthBound, tout comme Ness. Il est le protagoniste de Mother 3. Il apparait comme un personnage plus timide et un peu moins courageux que Ness.     ",
  },
  {
    image: "/assets/images/IceClimbers.jpg",
    name: "Ice Climbers",
    order: "40",
    description:
      "Les Ice Climbers sont les principaux protagonistes de l'Univers Ice Climber. Ce sont des partenaires, Popo et Nana, qui escaladent des montagnes. ",
  },
  {
    image: "/assets/images/Marth.jpg",
    name: "Marth",
    order: "41",
    description:
      "Marth est le personnage principal du premier jeu de l'Univers Fire Emblem, une série de jeux vidéo RPG. Il apparaît comme combattant depuis Super Smash Bros. Melee.  ",
  },
  {
    image: "/assets/images/Roy.jpg",
    name: "Roy",
    order: "42",
    description:
      "Roy est un personnage principal de l'Univers Fire Emblem. Roy est un personnage à débloquer dans Melee, ce qui marque ses débuts et sa première apparition en dehors du Japon.   ",
  },
  {
    image: "/assets/images/Ike.jpg",
    name: "Ike",
    order: "43",
    description:
      "Ike est un personnage principal de l'Univers Fire Emblem. Il apparaît comme personnage jouable depuis Super Smash Bros. Brawl.   ",
  },
  {
    image: "/assets/images/Daraen.jpg",
    name: "Daraen",
    order: "44",
    description:
      "Daraen est un personnage emplie de mystère, ses compétences en stratégie militaire sont assurément inégalées, à tel point qu'une armée à ses ordres pourrait triompher même en effectif limité. Son génie est tel qu'il peut improviser une tactique sur le fait ou mettre au point une nouvelle sans inspiration.   ",
  },
  {
    image: "/assets/images/Lucina.jpg",
    name: "Lucina",
    order: "45",
    description:
      "Lucina est un personnage de l'Univers Fire Emblem. Elle est une des protagonistes de Fire Emblem: Awakening.Lucina est la fille de Chrom, qui lui a enseigné à se battre avant sa mort des mains de Grima.     ",
  },
  {
    image: "/assets/images/Corrin.jpg",
    name: "Corrin",
    order: "46",
    description:
      "Corrin est un personnage de l'Univers Fire Emblem. Il est le personnage principal du jeu Fire Emblem: Fates et l'avatar jouable de ce jeu.    ",
  },
  {
    image: "/assets/images/Chrom.jpg",
    name: "Chrom",
    order: "47",
    description:
      "Chrom est un personnage originaire de l'Univers Fire Emblem. Il est l'un des deux personnages principaux de Fire Emblem: Awakening avec Daraen. Il appartient à la classe de Lord, traditionnellement réservée aux héros. Chrom est le père de Lucina ainsi que le descendant de Marth.     ",
  },
  {
    image: "/assets/images/Mr.Game&Watch.jpg",
    name: "Mr. Game & Watch",
    order: "48",
    description:
      "Mr. Game & Watch est un personnage de l'Univers Game & Watch, une série de consoles avec un jeu chacune.      ",
  },
  {
    image: "/assets/images/Wario.jpg",
    name: "Wario",
    order: "49",
    description:
      "Wario est le personnage principal de l'Univers Wario, ainsi qu'un personnage récurrent des jeux secondaires de l'Univers Mario. Il apparait comme personnage jouable de Super Smash Bros. depuis Brawl.    ",
  },
  {
    image: "/assets/images/Pit.jpg",
    name: "Pit",
    order: "50",
    description:
      "Pit est le protagoniste de l'Univers Kid Icarus. Pit est un ange, il ressemble ainsi à un humain doté d'une tunique blanche, d'ailes et d'une couronne de feuilles de lauriers sur sa tête.   ",
  },
  {
    image: "/assets/images/Palutena.jpg",
    name: "Palutena",
    order: "51",
    description:
      "Paluténa est une protagoniste de l'Univers Kid Icarus. Palutena est une déesse qui possède de longs cheveux verts ainsi que des yeux verts aussi. Elle est vêtue d'une robe blanche ainsi que de plusieurs accessoires couleur or.    ",
  },
  {
    image: "/assets/images/PitMalefique.jpg",
    name: "Pit Maléfique",
    order: "52",
    description:
      "Pit maléfique surnommé Tip par Pit et Palutena, est un double de Pit apparu pour la première fois dans Kid Icarus: Uprising. Malgré son nom, il a plutôt un rôle d'anti-héros.      ",
  },
  {
    image: "/assets/images/Olimar.jpg",
    name: "Olimar",
    order: "53",
    description:
      "Olimar est le personnage principal de l'Univers Pikmin. Il est toujours accompagné des Pikmin. Olimar est originaire de la planète Hocotate et est un employé de l'entreprise Hocotate Fret.    ",
  },
  {
    image: "/assets/images/ROB.jpg",
    name: "R.O.B",
    order: "54",
    description:
      "R.O.B. (abréviation de Robotic Operating Buddy, littéralement « copain d'exploitation robotique »), est un accessoire de la Nintendo Entertainment System (Famicom au Japon).     ",
  },
  {
    image: "/assets/images/MarieUltimate.jpg",
    name: "Marie",
    order: "55",
    description:
      "Marie est un personnage de l'Univers Animal Crossing. Marie a fait sa première apparition dans Animal Crossing: New Leaf. Elle est l'assistante du maire et l'aide à réaliser ses projets, elle pourra aussi lui en proposer, elle gère également les problèmes de voisinage, ainsi que le changement de l'hymne et du drapeau du village. Elle peut aussi faire l'évaluation de la ville.      ",
  },
  {
    image: "/assets/images/EntraineuseWiiFit.jpg",
    name: "Entraineuse Wii Fit",
    order: "56",
    description:
      "L'Entraîneuse Wii Fit est un personnage de l'Univers Wii Fit. Il est également possible d'incarner un Entraîneur.   ",
  },
  {
    image: "/assets/images/LittleMac.jpg",
    name: "Little Mac",
    order: "57",
    description:
      "Little Mac est un personnage de l'Univers Punch-Out!!. Little Mac est le personnage incarné dans la série de jeux vidéo Punch Out!!. Ce sont des jeux de combat de boxe dont le but est de battre tous les adversaires. Le jeu le plus récent de cette série est Punch Out!! Wii.   ",
  },
  {
    image: "/assets/images/Shulk.jpg",
    name: "Shulk",
    order: "58",
    description:
      "Shulk est le personnage principal de Xenoblade Chronicles et un nouveau venu dans Super Smash Bros.  ",
  },
  {
    image: "/assets/images/DuoDuckHunt.jpg",
    name: "Duck Hunt",
    order: "59",
    description:
      "Duck Hunt, est un terme servant à définir le chien, le canard et le tireur invisible utilisant le Zapper, issus du jeu Duck Hunt. Dans le jeu Duck Hunt, le canard est une des cibles à abattre avec le zapper. Le chien apparaissait en début de partie et sortait parfois des buissons en tenant un des canards abattus ou pour se moquer du joueur si il ratait un des volatiles.     ",
  },
  {
    image: "/assets/images/Bayonetta.jpg",
    name: "Bayonetta",
    order: "60",
    description:
      "Bayonetta, de son vrai nom Cereza, est le personnage principal de son univers éponyme. Cereza est née de l'union d'un Lumen et d'une sorcière de l'Umbra, et est, en quelque sorte, à l'origine de la guerre entre les deux clans.    ",
  },
  {
    image: "/assets/images/Inkling.jpg",
    name: "Inkling",
    order: "61",
    description:
      "Les Inkling sont les personnages principaux de l'Univers Splatoon. Suite à une forte montée des océans faisant disparaître l'espèce humaine. Les créatures marines ont évolués pour devenir la nouvelle espèce dominante, parmi eux les Inklings.     ",
  },
  {
    image: "/assets/images/Snake.jpg",
    name: "Solid Snake",
    order: "62",
    description:
      "Solid Snake, David de son vrai nom est le protagoniste principal de l'Univers Metal Gear, une série créée par Konami. C'est un agent-espion.  ",
  },
  {
    image: "/assets/images/Sonic.jpg",
    name: "Sonic",
    order: "63",
    description:
      "Sonic the Hedgehog est le personnage principal de l'Univers Sonic, une série de jeux de SEGA dont il est la mascotte.    ",
  },
  {
    image: "/assets/images/MegaMan.jpg",
    name: "Mega Man",
    order: "64",
    description:
      "Mega Man, de son vrai nom Rock, est le personnage principal de l'Univers Mega Man, une série créée par Capcom. Rock est un androïde, conçu par le Docteur Thomas Light, vivant avec sa sœur Roll aux côtés de son créateur.     ",
  },
  {
    image: "/assets/images/Pac-Man.jpg",
    name: "Pac-Man",
    order: "65",
    description:
      "PAC-MAN (aussi écrit Pac-Man) est le personnage principal de son univers éponyme, une série créée par Namco.Pac-Man est l'un des premiers personnages de jeu vidéo, et, avec Mario, Link et Mega Man l'un des plus reconnaissables et emblématiques.  ",
  },
  {
    image: "/assets/images/SimonBelmont.jpg",
    name: "Simon",
    order: "66",
    description:
      "Simon Belmont est un personnage principal de l'Univers Castlevania. Il est membre du Clan Belmont, une famille de chasseurs de vampire combattant depuis des siècles le comte Dracula.   ",
  },
  {
    image: "/assets/images/RichterBelmont.jpg",
    name: "Richter",
    order: "67",
    description:
      "Richter Belmont est un personnage principal de l'Univers Castlevania.Richter est un descendant de Simon Belmont, le chasseur de vampires, ayant vécu au 18e siècle.   ",
  },
  {
    image: "/assets/images/Ryu.jpg",
    name: "Ryu",
    order: "68",
    description:
      "Ryu est le personnage principal de la série Street Fighter et le second personnage jouable appartenant à Capcom. Il apparait pour la première fois dans Smash 4 comme un personnage téléchargeable. Ryu est le personnage principal de la série Street Fighter et le second personnage jouable appartenant à Capcom. Il apparait pour la première fois dans Smash 4 comme un personnage téléchargeable.      ",
  },
  {
    image: "/assets/images/Ken.jpg",
    name: "Ken",
    order: "69",
    description:
      "Ken Masters est le fils unique de la riche famille américaine Masters. Enfant gâté, son père l'envoya au Dojo de Gouken, un vieil ami, pour qu'il lui apprenne la discipline. D'abord peu enclin à s'entrainer, il finit par s'y faire.  ",
  },
  {
    image: "/assets/images/Cloud.jpg",
    name: "Cloud",
    order: "70",
    description:
      "Cloud Strife est le personnage principal du jeu Final Fantasy VII, ainsi que le personnage le plus connu de l'Univers Final Fantasy. Il apparait pour la première fois dans Smash 4 comme un personnage téléchargeable. Il apparait également dans la série Kingdom Hearts. Cloud est né au village de Nibelheim, bouc émissaire des habitants qui n'hésitent pas à lui faire endosser la responsabilité de divers incidents et à lui faire subir des brimades, il décide à quatorze ans de s'engager dans le prestigieux corps d'élite de la ShinRa, le SOLDAT, ",
  },
];
app.get("/api/smashArray", (req, res, next) => {
  res.json(smashArray);
});
// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });

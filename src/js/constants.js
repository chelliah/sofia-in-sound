import lost_in_translation__single from "../data/img/lost_in_translation__single_frame.jpg";
import lost_in_translation__full from "../data/img/lost_in_translation__full.jpg";
import marie_antoinette__single from "../data/img/marie_antoinette__single_frame.jpg";
import marie_antoinette__full from "../data/img/marie_antoinette__full.jpg";
import the_virgin_suicides__single from "../data/img/the_virgin_suicides__single_frame.jpg";
import the_virgin_suicides__full from "../data/img/the_virgin_suicides__full.jpg";
import somewhere__single from "../data/img/somewhere__single_frame.jpg";
import somewhere__full from "../data/img/somewhere__full.jpg";
import the_bling_ring__single from "../data/img/the_bling_ring__single_frame.jpg";
import the_bling_ring__full from "../data/img/the_bling_ring__full.jpg";


function timeInSeconds(minutes = 0, seconds) {
    return minutes * 60 + seconds;
}

export const TAGS = {
    diegetic: 'diegetic',

    non_diegetic: 'non-diegetic',
    isolation: 'isolation',
    in_company: 'in company',
    heart: 'heart',
    curious: 'curious',
    ambient: 'ambient',
    intro: 'intro',
    end_credits: 'end_credits',
    repeat: 'repeat',
    frequent_artist: 'frequent_artist',
    remix: 'remix',
    period_accurate: 'period_accurate',
    character_introduction: 'character_introduction',
    favorite_scene_in_movie: 'favorite_scene_in_movie',
    performed: 'performed'

}

//https://api.spotify.com/v1/tracks?ids=19MfnjgDrMYOy74LPEEmop,3ZSDb3YFnD4R3GZeRewBA2

// {
//     name: "",
//     artist: "",
//     start: timeInSeconds(, ),
//     end: timeInSeconds(, ),
//     tags: [],
//     //spotify:track:
//     uri: ""
// },

export const SONGS = {
    lost_in_translation: [
        {
            name: "City Girl",
            artist: "Kevin Shields",
            start: timeInSeconds(0,42),
            end: timeInSeconds(1,1),
            tags: [TAGS.non_diegetic, TAGS.intro],
        },
        {
            name: "Girls",
            artist: "Death In Vegas",
            start: timeInSeconds(1,7),
            end: timeInSeconds(2,31),
            tags: [TAGS.non_diegetic, TAGS.character_introduction],
            //spotify:track:
            uri: "spotify:track:1298aTMtgjFRKkvas3KIaZ"
        },
        {
            name: "Minuetto",
            artist: "Dominic Sands",
            start: timeInSeconds(3,49),
            end: timeInSeconds(4,2),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: ""
        },
        {
            name: "The Thrill Is Gone",
            artist: "Julie London",
            start: timeInSeconds(4,3),
            end: timeInSeconds(5,19),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:2MhpoyUQ1gl6P4yVDwKxH3"
        },
        {
            name: "On The Subway",
            artist: "Brian Reitzell & Roger J. Manning Jr",
            start: timeInSeconds(12,0),
            end: timeInSeconds(12,40),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            //spotify:track:
            youtube: "https://www.youtube.com/watch?v=HB8TSsvMPcw"
        },
        {
            name: "Fantino",
            artist: "Sebastian Tellier",
            start: timeInSeconds(14,28),
            end: timeInSeconds(15,14),
            tags: [TAGS.non_diegetic, TAGS.ambient ],
            //spotify:track:
            uri: "spotify:track:2AhczuNgqzAyKDHtDMFgVC"
        },
        {
            name: "Shibuya",
            artist: "Brian Reitzell & Roger J. Manning Jr",
            start: timeInSeconds(19,0),
            end: timeInSeconds(19,29),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            //spotify:track:
            youtube: "https://www.youtube.com/watch?v=F4C-VBH9f8U"
        },

        {
            name: "Hopeless Romance",
            artist: "Maxton Schulte",
            start: timeInSeconds(0,0),
            end: timeInSeconds(0,0),
            tags: [],
            //spotify:track:
            uri: "spotify:track:2k2wECSLjBF2Purv1TwMdK"
        },

        // {
        //     name: "Chord Left",
        //     artist: "Agnes Obel",
        //     start: timeInSeconds(0,0),
        //     end: timeInSeconds(0,0),
        //     tags: [],
        //     //spotify:track:
        //     uri: "spotify:track:3SelopnR6OJ9pS2NIH5RHI"
        // },
        {
            name: "Torn Into",
            artist: "Mount Sims",
            start: timeInSeconds(20,1),
            end: timeInSeconds(20,20),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: ""
        },
        {
            name: "Scarborough Fair/Canticle",
            artist: "Simon and Garfunkel",
            start: timeInSeconds(23,36),
            end: timeInSeconds(24,8 ),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:53uzBMME2GSfpUVtOtiLvA"
        },
        // {
            // 31ish to 33ish 
        //     name: "Blue Atmosphere",
        //     artist: "Francesco Santucci, Antonello Vannucchi, Giorgio Rosciglione, Giovanni Cristiani",
        //     start: timeInSeconds(0,0),
        //     end: timeInSeconds(0,0),
        //     tags: [],
        //     //spotify:track:
        //     uri: "spotify:track:5xGCPtdqZGjG15Q9Kqzp46"
        // },
        {
            name: "Love Gun",
            artist: "Rick James",
            start: timeInSeconds(34,38),
            end: timeInSeconds(35,35),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: "spotify:track:20HLXTEdpPJAxXW7byYXaR"
        },
        {
            name: "Muyu",
            artist: "Des-Row Union",
            start: timeInSeconds(35,43),
            end: timeInSeconds(36,5),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: ""
        },
        {
            name: "You Stepped Out of a Dream",
            artist: "Nat King Cole (performed by Catherine Lambert)",
            start: timeInSeconds(37,7),
            end: timeInSeconds(38,50),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:2wggYMBTqq7qzIJK42n4Tt"
        },
        {
            name: "Tommib",
            artist: "Squarepusher",
            start: timeInSeconds(40,31),
            end: timeInSeconds(41,25),
            tags: [TAGS.non_diegetic, TAGS.favorite_scene_in_movie],
            //spotify:track:
            uri: "spotify:track:5bgbePi06Jpajb3CfgEhgJ"
        },
        {
            name: "The State We're In",
            artist: "The Chemical Brothers",
            start: timeInSeconds(43,42),
            end: timeInSeconds(45,23),
            tags: [TAGS.diegetic],
            //spotify:track:
            // actual part of track is later on (last minute)
            uri: "spotify:track:5cTitgnXxwBuRUJMEnEgtk"
        },
        {
            name: "She Gets Around",
            artist: "TV Eyes",
            start: timeInSeconds(45,24),
            end: timeInSeconds(46,31 ),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: "spotify:track:6HDKdu5JvkzNoK4UG7wlBY"
        },
        {
            name: "Feeling I Get",
            artist: "Mary Butterworth Group",
            start: timeInSeconds(47,9),
            end: timeInSeconds(47,56),
            tags: [TAGS.diegetic],
            //spotify:track:
            youtube: "https://www.youtube.com/watch?v=KMfB8CL1pug"
        },
        {
            name: "Too Young",
            artist: "Phoenix",
            start: timeInSeconds(47,57),
            end: timeInSeconds(48,24),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: "spotify:track:2THkQauDWMvJgXFGPY4iKB"
        },

        {
            name: "God Save The Queen",
            artist: "Sex Pistoles (performed by Fumihiro Hayashi)",
            start: timeInSeconds(48,25),
            end: timeInSeconds(48,49),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:6ui6l3ZNvlrGQZArwo8195"
        },
        {
            name: "Fighting For",
            artist: "Anthony Lazaro",
            start: timeInSeconds(0,0),
            end: timeInSeconds(0,0),
            tags: [],
            //spotify:track:
            uri: "spotify:track:0l7vf9vQYZMfc3GQdJBAU0"
        },
        {
            name: "(What's So Funny 'Bout) Peace, Love and Understanding",
            artist: "Elvis Costello & The Attractions (performed by Bill Murray)",
            start: timeInSeconds(48,50),
            end: timeInSeconds(49,40),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:0dhzPXfQUdjNVsjVV7n4iD"
        },
        {
            name: "Brass In Pocket",
            artist: "Pretenders (performed by Scarlett Johannson)",
            start: timeInSeconds(49,41),
            end: timeInSeconds(50,29),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:3mAlVFFUrIBZcHSRXY0ik6"
        },
        {
            name: "More Than This",
            artist: "Roxy Music (performed by Bill Murray)",
            start: timeInSeconds(50,33),
            end: timeInSeconds(51,40),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:6SsP9PE7JT83QZA8kEYHVV"
        },
        {
            name: "Kaze Wo Atsume",
            artist: "Bini Cocotte",
            start: timeInSeconds(51,41),
            end: timeInSeconds(52,29),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:4LKzli0rhdrSkeOuyuuyr3"
        },
        {
            name: "Sometimes",
            artist: "My Bloody Valentine",
            start: timeInSeconds(52,30),
            end: timeInSeconds(54,9),
            tags: [TAGS.non_diegetic],
            //spotify:track:
            uri: "spotify:track:4muQTwBka05lBLGy7lSDKF"
        },
        {
            name: "Fuck the Pain Away",
            artist: "Peaches",
            start: timeInSeconds(63,10),
            end: timeInSeconds(64,37),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: "spotify:track:1XHFob24QklIXtLRopKirJ"
        },
        {
            name: "Nobody Does It Better",
            artist: "Carly Simon",
            start: timeInSeconds(65,10),
            end: timeInSeconds(65,54),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:4LvtB7drFpQ4UzmFHcSnCC"
        },
        {
            name: "Are You Awake?",
            artist: "Kevin Shields",
            start: timeInSeconds(65, 55 ),
            end: timeInSeconds(67, 20),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            youtube: "https://www.youtube.com/watch?v=v5ynOUVjYx8"
        },
        {
            name: "Alone in Kyoto",
            artist: "Air",
            start: timeInSeconds(73,25),
            end: timeInSeconds(76,20),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            //spotify:track:
            uri: "spotify:track:40UlFC0dIxv7lAEJaPZLnm"
        },
        // {
        //     name: "Midnight At The Oasis",
        //     artist: "Maria Muldaur",
        //     start: timeInSeconds(0,0),
        //     end: timeInSeconds(0,0),
        //     tags: [],
        //     //spotify:track:
        //     uri: "spotify:track:63Nj3NsQkLQs2MKgWk1Di6"
        // },
        {
            name: "So Into You",
            artist: "Atlanta Rhythym Section",
            start: timeInSeconds(87,23),
            end: timeInSeconds(88,18),
            tags: [TAGS.diegetic, TAGS.performed],
            //spotify:track:
            uri: "spotify:track:5duHt5pYPW8kN5ufMbrBVc"
        },
        {
            name: "Just LIke Honey",
            artist: "The Jesus and Mary Chain",
            start: timeInSeconds(93,51),
            end: timeInSeconds(96,46),
            tags: [TAGS.non_diegetic, TAGS.end_credits],
            //spotify:track:
            uri: "spotify:track:11L2mT8T10C8ITMcJv1ipy"
        },
        {
            name: "City Girl",
            artist: "Kevin Shields",
            start: timeInSeconds(96,47),
            end: timeInSeconds(99,34),
            TAGS: [TAGS.non_diegetic, TAGS.end_credits],
            youtube: "https://www.youtube.com/watch?v=x-JQe3f6tc0"
        },
        {
            name: "Kaze Wo Atsume",
            artist: "Bini Cocotte",
            start: timeInSeconds(99,35),
            end: timeInSeconds(101,38),
            tags: [TAGS.non_diegetic, TAGS.end_credits],
            //spotify:track:
            uri: "spotify:track:4LKzli0rhdrSkeOuyuuyr3"
        },
        // {
        //     name: "La Dolce Vita",
        //     artist: "Franco Ferrara and His Orchestra",
        //     start: timeInSeconds(0,0),
        //     end: timeInSeconds(0,0),
        //     tags: [],
        //     //spotify:track:
        //     uri: "spotify:track:5dOOHrgDyKmTflXUhywmeO"
        // },
        // {
        //     name: "When Doves Cry",
        //     artist: "Patti Smith",
        //     start: timeInSeconds(0,0),
        //     end: timeInSeconds(0,0),
        //     tags: [],
        //     //spotify:track:
        //     uri: "spotify:track:10RKmQqpGEOnHORPp5fPej"
        // },
        // {            
        //     name: "Bad",
        //     artist: "Starless",
        //     start: timeInSeconds(0,0),
        //     end: timeInSeconds(0,0),
        //     tags: [],
        //     uri: "spotify:track:7Mdq4qEWM9eqMNwZOyr1I3"
        // }


    ],
    somewhere: [
        {
            name: "Love Like A Sunset Part I",
            artist: "Phoenix",
            start: timeInSeconds(3,10),
            end: timeInSeconds(4,0),
            tags: [TAGS.non_diegetic, TAGS.intro],
            //spotify:track:
            uri: "spotify:track:0oliFCF8f7IhkFXjFPoQ7J"
        },
        {
            name: "My Hero",
            artist: "Foo Fighters",
            start: timeInSeconds(4,11),
            end: timeInSeconds(6,48),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: "spotify:track:4dVbhS6OiYvFikshyaQaCN"
        },
        {
            name: "1 Thing",
            artist: "Amerie",
            start: timeInSeconds(13,21),
            end: timeInSeconds(15,25 ),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: "spotify:track:1mnqraQ8oV8MX92rdOFLWW"
        },
        {
            name: "Cool",
            artist: "Gwen Stefani",
            start: timeInSeconds(18,6),
            end: timeInSeconds(21,5),
            tags: [TAGS.diegetic, TAGS.favorite_scene_in_movie],
            //spotify:track:
            uri: "spotify:track:1oPHQirLVcgj85NWdiyuJD"
        },
        {
            name: "Love Theme From Kiss",
            artist: "Kiss",
            start: timeInSeconds(23,7),
            end: timeInSeconds(24,10),
            tags: [],
            //spotify:track:
            uri: "spotify:track:2YIjGaUpOAjCJlhQFYsqLH"
        },
        {
            name: "Look",
            artist: "Sebastien Tellier",
            start: timeInSeconds(24,11),
            end: timeInSeconds(25,52),
            tags: [],
            //spotify:track:
            uri: "spotify:track:0GVQb2UqgxEUrXidPgklFj"
        },
        {
            name: "Massage Music",
            artist: "William Storkson",
            start: timeInSeconds(39,32),
            end: timeInSeconds(41,12),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: ""
        },
        // {
        //     name: "Gandhi Fix",
        //     artist: "William Storkson",
        //     start: timeInSeconds(0,0),
        //     end: timeInSeconds(0,0),
        //     tags: [],
        //     //spotify:track:
        //     uri: ""
        // },
        {
            name: "So Lonely",
            artist: "The Police",
            start: timeInSeconds(43,9),
            end: timeInSeconds(44,14),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: "spotify:track:3rNYilJa7V26eOvQqSpbbk"
        },
        {
            name: "20th Century Boy",
            artist: "T. Rex",
            start: timeInSeconds(44,31),
            end: timeInSeconds(45,58),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: "spotify:track:66hdYurKbEfP74fvWtR7mj"
        },
        // {
        //     name: "Boo Riley",
        //     artist: "Boo Riley",
        //     start: timeInSeconds(0,0),
        //     end: timeInSeconds(0,0),
        //     tags: [],
        //     //spotify:track:
        //     uri: "spotify:track:6SgvkqEE5hhvnkDHjHtv0W"
        // },
        {
            name: "Che Si Fa",
            artist: "Valeria Marini",
            start: timeInSeconds(61,13),
            end: timeInSeconds(63,3),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: ""
        },
        {
            name: "Teddy Bear",
            artist: "Romulo",
            start: timeInSeconds(64,2),
            end: timeInSeconds(65,11),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: ""
        },
        {
            name: "I'll Try Anything Once",
            artist: "The Strokes",
            start: timeInSeconds(73,11),
            end: timeInSeconds(76,25),
            tags: [TAGS.non_diegetic],
            //spotify:track:
            uri: "spotify:track:1k4OsQujxXPLij0ZsTFlMx"
        },
        //some guitar loop around 79 min
        {
            name: "Love Like A Sunset Part II",
            artist: "Phoenix",
            start: timeInSeconds(91,1),
            end: timeInSeconds(95,10),
            tags: [TAGS.end_credits],
            //spotify:track:
            uri: "spotify:track:4V134V3PE3H1kep1J7I9eA"
        },
        {
            name: "Smoke Gets In Your Eyes",
            artist: "Bryan Ferry",
            start: timeInSeconds(95,11 ),
            end: timeInSeconds(98,0),
            tags: [TAGS.end_credits],
            //spotify:track:
            uri: "spotify:track:1ZmvxisQ7JWqmybY2PC5Ip"
        },

    ],
    the_virgin_suicides: [
        //Some first Trac, starts 33 seconds ends 1:55 

        {
            name: "Highschool Lover",
            artist: "Air",
            start: timeInSeconds(0, 33),
            end: timeInSeconds(1, 55),
            tags: [TAGS.repeat, TAGS.non_diegetic],
            uri: "spotify:track:366QpkppDb9f5TVamPSpgH"
        },
        {
            name: "Clouds Up",
            artist: "Air",
            start: timeInSeconds(2, 16),
            end: timeInSeconds(2, 59),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            uri: "spotify:track:7IPh7bbIG7fbd6mbsiB6Hp"
        },
        {
            name: "On The Horizon",
            artist: "Sloan",
            start: timeInSeconds(3, 24),
            end: timeInSeconds(4, 0),
            tags: [TAGS.non_diegetic, TAGS.period_accurate],
            uri: "spotify:track:49F6sRFxioTJPm3cZwcFM4"
        },
        {
            name: "Dirty Trip",
            artist: "Air",
            start: timeInSeconds(9, 27),
            end: timeInSeconds(10, 29),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            uri: "spotify:track:6WIxikWHp2rSKsVzhkF5r2"
        },

        {
            name: "A Dream Goes On Forever",
            artist: "Todd Rundgren",
            start: timeInSeconds(12, 30),
            end: timeInSeconds(15, 33),
            tags: [TAGS.diegetic, TAGS.period_accurate],
            uri: "spotify:track:2zJgQIH5rgIEREageHqCjM"
        },
        {
            name: "The Air That I Breathe",
            artist: "The Hollies",
            start: timeInSeconds(16, 15),
            end: timeInSeconds(17, 32),
            tags: [],
            uri: "spotify:track:6yLIqXX9edg1x0HZS7cZEv"
        },
        {
            name: "Highschool Lover",
            artist: "Air",
            start: timeInSeconds(17, 43),
            end: timeInSeconds(19, 56),
            tags: [TAGS.repeat, TAGS.non_diegetic],
            uri: "spotify:track:366QpkppDb9f5TVamPSpgH"
        },

        {
            name: "Ce Matin La",
            artist: "AIR",
            start: timeInSeconds(25, 40),
            end: timeInSeconds(27, 10),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:0pEmzblUxXvzIYnJpu8gWW"
        },
        {
            name: "Magic Man",
            artist: "Heart",
            start: timeInSeconds(35, 50),
            end: timeInSeconds(37, 45),
            tags: [TAGS.non_diegetic, TAGS.character_introduction],
            uri: "spotify:track:1IwXugXE0e3Gt3p6LM6Bs0"
        },
        {
            name: "How Can You Mend A Broken Heart",
            artist: "Al Green",
            start: timeInSeconds(39, 3),
            end: timeInSeconds(39, 59),
            tags: [TAGS.diegetic],
            uri: "spotify:track:6lUXneXZ9jc3HSMHgd8oqh"
        },
        {
            name: "Crazy On You",
            artist: "Heart",
            start: timeInSeconds(45, 9),
            end: timeInSeconds(46, 6),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:1szpCWtXOh3CGZogyCYPrj"
        },

        {
            name: "Everything You've Done Wrong",
            artist: "Sloan",
            start: timeInSeconds(53, 52),
            end: timeInSeconds(54, 53),
            tags: [TAGS.diegetic],
            uri: "spotify:track:5sQcygaZgUxU7BzMqmi6Is"
        },
        {
            name: "Strange Magic",
            artist: "ELO",
            start: timeInSeconds(55, 14),
            end: timeInSeconds(56, 53),
            tags: [TAGS.diegetic],
            uri: "spotify:track:7cY7GAhOWKPGDeFzKEAyj2"
        },

        {
            name: "I'm Not In Love",
            artist: "10cc",
            start: timeInSeconds(57, 16),
            end: timeInSeconds(59, 10),
            tags: [TAGS.diegetic],
            uri: "spotify:track:5HQEmiV2lKnSO6qa2fsR7x"
        },
        {
            name: "Come Sail Away",
            artist: "Styx",
            start: timeInSeconds(59, 18),
            end: timeInSeconds(61, 7),
            tags: [TAGS.diegetic],
            uri: "spotify:track:0PsbWiVtix5FoTZ1s00mEl"
        },

        {
            name: "Highschool Lover",
            artist: "Air",
            start: timeInSeconds(63, 15),
            end: timeInSeconds(64, 50),
            tags: [TAGS.repeat, TAGS.non_diegetic],
            uri: "spotify:track:366QpkppDb9f5TVamPSpgH"
        },

        {
            name: "Highschool Lover",
            artist: "Air",
            start: timeInSeconds(73, 43),
            end: timeInSeconds(74, 42),
            tags: [TAGS.repeat, TAGS.non_diegetic],
            uri: "spotify:track:366QpkppDb9f5TVamPSpgH"
        },
        // some random mambo song around 75:40

        {
            name: "Hello It's Me",
            artist: "Todd Rundgren",
            start: timeInSeconds(78, 6),
            end: timeInSeconds(78, 22),
            tags: [TAGS.diegetic],
            uri: "spotify:track:3gHFKiDanj4d2rqgHlRFFc"
        },


        {
            name: "Alone Again (Naturally)",
            artist: "Gilbert O'Sullivan",
            start: timeInSeconds(78, 32),
            end: timeInSeconds(78, 54),
            tags: [TAGS.diegetic],
            uri: "spotify:track:6vuEG9sZtC4W2zT64f7zLF"
        },

        {
            name: "Run To Me",
            artist: "Bee Gees",
            start: timeInSeconds(78, 55),
            end: timeInSeconds(79, 16),
            tags: [TAGS.diegetic],
            uri: "spotify:track:4zK1pYVKMB13es6Bim0muF"
        },

        {
            name: "So Far Away",
            artist: "Carole King",
            start: timeInSeconds(79, 17),
            end: timeInSeconds(79, 53),
            tags: [TAGS.diegetic],
            uri: "spotify:track:4HHge4zAyIw3pkrtFzmwCl"
        },

        {
            name: "Dirty Trip",
            artist: "Air",
            start: timeInSeconds(80, 37),
            end: timeInSeconds(81, 23),
            tags: [TAGS.ambient, TAGS.non_diegetic],
            uri: "spotify:track:6WIxikWHp2rSKsVzhkF5r2"
        },

        {
            name: "Empty House",
            artist: "Air",
            start: timeInSeconds(86, 10),
            end: timeInSeconds(87, 30),
            tags: [TAGS.ambient, TAGS.non_diegetic],
            uri: "spotify:track:1Dmw6eyEuKScrkh2Y8l4fb"
        },

        {
            name: "Empty House",
            artist: "Air",
            start: timeInSeconds(88, 6),
            end: timeInSeconds(90, 28),
            tags: [TAGS.ambient, TAGS.non_diegetic],
            uri: "spotify:track:1Dmw6eyEuKScrkh2Y8l4fb"
        },

        {
            name: "Playground Love",
            artist: "Air",
            start: timeInSeconds(91, 8),
            end: timeInSeconds(94, 30),
            tags: [TAGS.ambient, TAGS.end_credits],
            uri: "spotify:track:052z2UsE2wPrHsBJ9tly0g"
        },

        {
            name: "Dark Messages",
            artist: "Air",
            start: timeInSeconds(94, 31),
            end: timeInSeconds(95, 25),
            tags: [TAGS.ambient, TAGS.end_credits],
            uri: "spotify:track:4sZL5qbJ6VU0y8vcjShkIS"
        },

        {
            name: "Clouds Up",
            artist: "Air",
            start: timeInSeconds(95, 26),
            end: timeInSeconds(96, 50),
            tags: [TAGS.ambient, TAGS.end_credits],
            uri: "spotify:track:7IPh7bbIG7fbd6mbsiB6Hp"
        },


        //unplaced
        // {
        //     name: "How Many Times",
        //     artist: 'Sloan',
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: ""
        // },


        // {
        //     name: "End it Peacefully",
        //     artist: "Sloan",
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: ""
        // },
        // {
        //     name: "The Good In Everyone",
        //     artist: "Sloan",
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: "spotify:track:20eg0KIEFJLEywzDYMfi2s"
        // },
        // {
        //     name: "Bathroom Girl",
        //     artist: "Air",
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: "spotify:track:75da4TDuprIIxMhjUbbl63"
        // },
        // {
        //     name: "Cemetary Party",
        //     artist: "Air",
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: "spotify:track:65bi0pq577npdVoHCqF7dc"
        // },
        // {
        //     name: "The Word Hurricane",
        //     artist: "Air",
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: "spotify:track:7guWevC6eZXA0w442BvOzZ"
        // },
        // {
        //     name: "Afternoon Sister",
        //     artist: "Air",
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: "spotify:track:5mMMfaR62R2YAqp2hY0AXX"
        // },
        // {
        //     name: "Ghost Song",
        //     artist: "Air",
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: "spotify:track:7bTRS1LJ7Feb257tCyWou8"
        // },
        // {
        //     name: "Dead Bodies",
        //     artist: "Air",
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: "spotify:track:3q7zy96PuGhQSGG8ef0KaU"
        // },
        // {
        //     name: "Suicide Underground",
        //     artist: "Air",
        //     start: timeInSeconds(undefined,undefined ),
        //     end: timeInSeconds(undefined, undefined),
        //     tags: [],
        //     uri: "spotify:track:3gA6Qr47GPKHsthQDHmZSI"
        // }
    ],
    marie_antoinette: [
        {
            name: "Natural's not in it",
            artist: 'Gang of Four',
            start: timeInSeconds(0, 17),
            end: timeInSeconds(2, 10),
            tags: [TAGS.non_diegetic, TAGS.intro],
            //spotify:track:
            uri: "spotify:track:19MfnjgDrMYOy74LPEEmop"
        },
        {
            name: "Opus 17",
            artist: "Dustin O'Halloran",
            start: timeInSeconds(3, 43),
            end: timeInSeconds(5, 30),
            tags: [TAGS.non_diegetic],
            //spotify:track:
            uri: "spotify:track:1WMq7lBD7yndrdGfNxMUoG"
        },
        {
            name: "The Melody of a Fallen Tree",
            artist: "Windsor for the Derby",
            start: timeInSeconds(8, 13),
            end: timeInSeconds(11, 43),
            tags: [TAGS.non_diegetic],
            //spotify:track:
            uri: "spotify:track:3NajfY7p2Si4qVvHba51X3"
        },
        {
            name: "I Don't Like it Like This",
            artist: "The Radio Dept.",
            start: timeInSeconds(12, 32),
            end: timeInSeconds(13, 39),
            tags: [TAGS.non_diegetic],
            //spotify:track:
            uri: "spotify:track:3UhlrzAvnbKrAjm0hnW3yi"
        },
        {
            name: "Jynweythek",
            artist: "Aphex Twin",
            start: timeInSeconds(14, 43),
            end: timeInSeconds(16, 56),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            //spotify:track:
            uri: "spotify:track:7etelDpVxaPTzmeZrYo8Qy"
        },
        {
            name: "Deuxième livre d'orgue contenant la Messe et les hymnes de l'Église: No. 22",
            artist: "Emmanuel Mandrin, Les Demoiselles de Saint-Cyr",
            start: timeInSeconds(16, 57),
            end: timeInSeconds(18, 15),
            tags: [TAGS.diegetic],
            //spotify:track:
            uri: "spotify:track:1W2vGEDp9ep7GSBZvZSSEX"
        },
        {
            name: "Les Indes Galantes - Menuets por les Guerriers et Amazones I & II",
            artist: "Jean-Phillipe Rameau",
            start: timeInSeconds(19, 18),
            end: timeInSeconds(20, 38),
            tags: [TAGS.diegetic],
            uri: "spotify:track:5ryArG1m8qw1WPh0qulujt"
        },
        {
            name: "Concierto in G Major, RV 151: Alla Rustica",
            artist: "Antonio Vivaldi",
            start: timeInSeconds(22, 48),
            end: timeInSeconds(27, 50),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:5BfdbgohEH1i90UgqGyKwe"
        },
        {
            name: "Pulling our Weight",
            artist: "The Radio Dept.",
            start: timeInSeconds(31, 30),
            end: timeInSeconds(32, 18),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:6DJZaJrrOFKqSIVH8X64Ha"
        },
        {
            name: "Il Secondo Gionrno Instrumental",
            artist: "Air",

            start: timeInSeconds(33, 50),
            end: timeInSeconds(35, 20),
            tags: [TAGS.non_diegetic],
            // uri: "spotify:track:6DJZaJrrOFKqSIVH8X64Ha"
        },

        {
            name: "Concierto in G Major, RV 151: Alla Rustica",
            artist: "Antonio Vivaldi",
            start: timeInSeconds(35, 48),
            end: timeInSeconds(36, 30),
            tags: [TAGS.non_diegetic, TAGS.repeat],
            uri: "spotify:track:5BfdbgohEH1i90UgqGyKwe"
        },
        {
            name: "Concierto in G Major, RV 151: Alla Rustica",
            artist: "Antonio Vivaldi",
            start: timeInSeconds(40, 17),
            end: timeInSeconds(41, 0),
            tags: [TAGS.non_diegetic, TAGS.repeat],
            uri: "spotify:track:5BfdbgohEH1i90UgqGyKwe"
        },
        {
            name: "Keen on Boys",
            artist: 'The Radio Dept.',
            start: timeInSeconds(43, 33),
            end: timeInSeconds(44, 45),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:5r8qASAZBBafcpDKfBEP7q"
        },
        {
            name: "Aux Laguers D'Appolon",
            artist: "Jean-Phillipe Rameau",
            start: timeInSeconds(47, 55),
            end: timeInSeconds(49, 36),
            tags: [TAGS.diegetic],
        },
        {
            name: "Opus 23",
            artist: "Dustin O'Halloran",

            start: timeInSeconds(50, 24),
            end: timeInSeconds(52, 22),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:5UfD6D86jhWyFW8yDOHmMZ"
        },
        {
            name: "I Want Candy",
            artist: "Bow Wow Wow",

            start: timeInSeconds(55, 31),
            end: timeInSeconds(58, 15),
            tags: [TAGS.non_diegetic, TAGS.frequent_artist],
            uri: "spotify:track:6J8IwGX3oHi7x9B57vmMMW"
        },
        {
            name: "Hong Kong Garden",
            artist: "Siouxsie and the Banshees",

            start: timeInSeconds(58, 41),
            end: timeInSeconds(61, 10),
            tags: [TAGS.non_diegetic, TAGS.remix],
            uri: "spotify:track:6zQhANi5mDTELfSuUFPx4Q"
        },
        {
            name: "Aphrodesiac",
            artist: "Bow Wow Wow",

            start: timeInSeconds(61, 13),
            end: timeInSeconds(63, 20),
            tags: [TAGS.non_diegetic, TAGS.frequent_artist],
            uri: "spotify:track:11uNH4rrkCF1EoCLBlKvtR"
        },
        {
            name: "Fools Rush In",
            artist: "Bow Wow Wow",

            start: timeInSeconds(61, 14),
            end: timeInSeconds(64, 52),
            tags: [TAGS.non_diegetic, TAGS.frequent_artist, TAGS.remix],
            uri: "spotify:track:5ZvPW0yyIXhFSXTeNMM3Ay"
        },
        {
            name: "Plainsong",
            artist: "The Cure",

            start: timeInSeconds(67, 20),
            end: timeInSeconds(68, 8),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:4gcfxHL1iRgP0RHCDYMNIo"
        },
        {
            name: "Ceremony",
            artist: "New Order",

            start: timeInSeconds(68, 9),
            end: timeInSeconds(71, 53),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:61E8w4M1XI9PSYjWNXIRkA"
        },
        {
            name: "Tommib Help Buss",
            artist: "Squarepusher",

            start: timeInSeconds(72, 13),
            end: timeInSeconds(73, 38),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            uri: "spotify:track:5RQjC6zC0Jj166iNydg654"
        },
        {
            name: "Ou Boivent Les Loups",
            artist: "Phoenix",

            start: timeInSeconds(81, 33),
            end: timeInSeconds(82, 24),
            tags: [TAGS.diegetic],
            uri: "spotify:track:5RQjC6zC0Jj166iNydg654"
        },
        {

            name: "C'est mon ami",
            artist: "Marie Antoinette",
            start: timeInSeconds(87, 4),
            end: timeInSeconds(87, 44),
            tags: [TAGS.diegetic],
        },
        {
            name: "Kings of the Wild Frontier",
            artist: "Adam and the Ants",

            start: timeInSeconds(93, 33),
            end: timeInSeconds(94, 20),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:4MwOjoiUSWzGJNFEw8AZKZ"
        },
        {
            name: "Avril 14th",
            artist: "Aphex Twin",
            start: timeInSeconds(95, 11),
            end: timeInSeconds(96, 7),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            uri: "spotify:track:2MZSXhq4XDJWu6coGoXX1V"
        },
        {
            name: "Sonata in D Minor, K. 213",
            artist: "Domenico Scarlatti, Andreas Staier",

            start: timeInSeconds(96, 10),
            end: timeInSeconds(97, 58),
            tags: [TAGS.diegetic],
            uri: "spotify:track:6uERKrBW0utRJ4inF6H0wO"
        },
        {
            name: "What Ever Happened",
            artist: "The Strokes",
            start: timeInSeconds(97, 59),
            end: timeInSeconds(98, 47),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:78Gzxi27GuNHTfkn2BylG4"
        },
        {
            name: "Tristes Apprêts, Pâles Flabeaux",
            artist: "Jean-Phillipe Ramueau",
            start: timeInSeconds(101, 14),
            end: timeInSeconds(106, 13),
            tags: [TAGS.diegetic],
            uri: "spotify:track:19fS86UTw1ZfbgsEdPTKSw"
        },
        {
            name: "Opus 36",
            artist: "Dustin O'Halloran",
            start: timeInSeconds(107, 18),
            end: timeInSeconds(109, 17),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:7pVljAGKTGUKGtF7ju8orQ"
        },
        {
            name: "All Cats are Grey",
            artist: "The Cure",
            start: timeInSeconds(115, 29),
            end: timeInSeconds(120, 0),
            tags: [TAGS.end_credits],
            uri: "spotify:track:2ivExgZt9Inzro5wa4yAYy"
        },

        {
            name: "Jynweythek",
            artist: "Aphex Twin",
            start: timeInSeconds(120, 1),
            end: timeInSeconds(122, 13),
            tags: [TAGS.end_credits, TAGS.ambient],
            //spotify:track:
            uri: "spotify:track:7etelDpVxaPTzmeZrYo8Qy"
        },
    ],
    the_bling_ring: [

        // unplaced = Bassnectar
        {
            name: 'Crown on the ground',
            artist: 'Sleigh Bells',
            start: 107,
            end: 244,
            tags: [TAGS.non_diegetic],
            //spotify:track:
            uri: "spotify:track:19MfnjgDrMYOy74LPEEmop"
        },
        {
            name: '9 Piece (feat. Lil Wayne)',
            artist: 'Rick Ross',
            start: 479,
            end: 501,
            tags: [TAGS.diegetic],
            uri: "spotify:track:3ZSDb3YFnD4R3GZeRewBA2"
        },
        {
            name: 'Ouroboros',
            artist: 'Oneohtrix Point Never',
            start: 744, // 12:24
            end: 753,
            tags: [TAGS.character_introduction, TAGS.ambient],
            uri: "spotify:track:5yFY7FgEZiytkUGoV2wqGY"
        },
        {
            name: 'Sunshine (feat. M.I.A.)',
            artist: 'Rye Rye',
            start: 15 * 60 + 33,//15:33,
            end: 16 * 60 + 56,
            description: 'shopping scene after stealing porsche, brash, careless',
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:2KjHbkUy6hcwS6YINpnVkb"

        },
        {
            name: '212 (feat. Lazy Jay)',
            artist: 'Azealia Banks',
            start: timeInSeconds(17, 8),
            end: timeInSeconds(19, 59),
            description: 'first club scene meeting everyone',
            tags: [TAGS.diegetic],
            uri: "spotify:track:54sMiQ5jrVchHzapoOG70B"

        },
        {
            //ACTUALLY PROBABLY THE BLING RING SUITE
            // not o100% sure on this one but i think this ambient song repeats
            // ambient texture
            // warm feelings of friendship
            name: 'Ouroboros',
            artist: 'Oneohtrix Point Never',
            start: timeInSeconds(20, 10),
            end: timeInSeconds(20, 42),
            tags: [TAGS.repeat, TAGS.ambient],
            uri: "spotify:track:5yFY7FgEZiytkUGoV2wqGY"
        },
        {
            name: 'Drakkar Noir',
            artist: 'Phoenix',
            start: timeInSeconds(21, 58),
            end: timeInSeconds(22, 10),
            tags: [TAGS.non_diegetic],
            uri: "spotify:track:7js4P7UxtvCuZaCJPlrNYb"
        },
        {
            // playing in the background while they try on clothes
            name: 'Gucci Bag',
            artist: 'Reema Major',
            start: timeInSeconds(25, 54),
            end: timeInSeconds(27, 0),
            tags: [TAGS.diegetic],
            uri: "spotify:track:3EKKUOVEgWHJdLLQTKC8kB"
        },
        {
            // in paris hiltons club room
            name: 'Big Lights',
            artist: 'Sammy Adams',
            start: timeInSeconds(30, 25),
            end: timeInSeconds(30, 50),
            tags: [TAGS.diegetic],
            uri: "spotify:track:5pFBNoba1FG0WVa5HwWZ9C"
        },
        {
            // first club track
            //maybe can delete this one
            name: 'Dans Beat',
            artist: 'Brien Reitzel',
            start: timeInSeconds(30, 58),
            end: timeInSeconds(31, 11),
            tags: [TAGS.diegetic],
            // uri: "spotify:track:5pFBNoba1FG0WVa5HwWZ9C"
        },
        {
            // car scene
            name: 'Bad Girls',
            artist: 'M.I.A.',
            start: timeInSeconds(31, 12),
            end: timeInSeconds(31, 45),
            tags: [TAGS.diegetic],
            uri: "spotify:track:6nzXkCBOhb2mxctNihOqbb"
        },
        {
            // car scene
            name: 'Drop it Low (feat Chris Brown)',
            artist: 'Ester Dean',
            start: timeInSeconds(32, 29),
            end: timeInSeconds(34, 0),
            tags: [TAGS.diegetic],
            uri: "spotify:track:5wuXWTCiKIlNEXfwAuTY1G"
        },
        {
            // car scene
            name: 'All of the Lights',
            artist: 'Kanye West',
            start: timeInSeconds(35, 31),
            end: timeInSeconds(36, 9),
            tags: [TAGS.diegetic],
            uri: "spotify:track:22L7bfCiAkJo5xGSQgmiIO"
        },
        {
            // playing in the background while they try on clothes
            name: 'Arabic Princess',
            artist: 'Reema Major',
            start: timeInSeconds(38, 47),
            end: timeInSeconds(39, 18),
            tags: [TAGS.diegetic],
            // no uri available
            // uri: "spotify:track:3EKKUOVEgWHJdLLQTKC8kB"
        },
        {
            name: 'Freeze',
            artist: 'Klaus Schulze',
            start: timeInSeconds(42, 14),
            end: timeInSeconds(43, 25),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            // no uri available
            uri: "spotify:track:5mHtUWgWPJ2Oi2440y0XCi"
        },
        {
            name: 'Halleluwah',
            artist: 'Can',
            start: timeInSeconds(43, 32),
            end: timeInSeconds(45, 25),
            tags: [TAGS.non_diegetic],
            // no uri available
            uri: "spotify:track:7mKdniZq79l9y3AEn6NJTJ"
        },
        {
            //selling watches
            name: 'Money Machine',
            artist: '2 Chainz',
            start: timeInSeconds(48, 15),
            end: timeInSeconds(49, 55),
            tags: [TAGS.diegetic],
            // no uri available
            uri: "spotify:track:7EyXVUqk1C5cqCXkgWqtUp"
        },
        {
            name: 'Levels',
            artist: 'Avicii',
            start: timeInSeconds(50, 11),
            end: timeInSeconds(52, 6),
            tags: [TAGS.non_diegetic, TAGS.remix],
            // no uri available
            uri: "spotify:track:6dfXwa0dI1sBm4CIePuOYM"
        },
        {
            name: 'Power',
            artist: 'Kanye West',
            start: timeInSeconds(52, 38),
            end: timeInSeconds(53, 39),
            tags: [TAGS.non_diegetic],
            // no uri available
            uri: "spotify:track:2gZUPNdnz5Y45eiGxpHGSc"
        },
        {
            name: 'Locomotion',
            artist: 'Plastikman',
            start: timeInSeconds(54, 20),
            end: timeInSeconds(55, 12),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            // no uri available
            uri: "spotify:track:2gZUPNdnz5Y45eiGxpHGSc"
        },

        // some ambient track 56:20 to 57:16

        {
            name: 'Everythang',
            artist: 'Jeezy',
            start: timeInSeconds(57, 42),
            end: timeInSeconds(58, 31),
            tags: [TAGS.diegetic],
            // no uri available
            uri: "spotify:track:1k05vKbEVa4U4kXcl2EPde"
        },
        {
            name: 'FML',
            artist: 'Deadmau5',
            start: timeInSeconds(58, 32),
            end: timeInSeconds(59, 40),
            tags: [TAGS.non_diegetic, TAGS.remix],
            // no uri available
            uri: "spotify:track:1k05vKbEVa4U4kXcl2EPde"
        },
        // {
        //     // this one might be wrong
        //     name: 'Showers of ink',
        //     artist: 'Loscil',
        //     start: timeInSeconds(62, 3),
        //     end: timeInSeconds(62, 29),
        //     tags: [TAGS.non_diegetic, TAGS.ambient],
        //     // no uri available
        //     uri: "spotify:track:7C3XiKizAdg5FHx4UN0gTW"
        // },
        {
            name: 'FML',
            artist: 'Deadmau5',
            start: timeInSeconds(62, 49),
            end: timeInSeconds(64, 5),
            tags: [TAGS.non_diegetic],
            // no uri available
            uri: "spotify:track:1k05vKbEVa4U4kXcl2EPde"
        },

        //some ambient texture 65:02, 65:43

        {

            name: 'Ouroboros',
            artist: 'Oneohtrix Point Never',
            start: timeInSeconds(69, 34),
            end: timeInSeconds(70, 6),
            tags: [TAGS.repeat, TAGS.ambient],
            uri: "spotify:track:5yFY7FgEZiytkUGoV2wqGY"
        },

        {
            name: 'Showers of ink',
            artist: 'Loscil',
            start: timeInSeconds(78, 20),
            end: timeInSeconds(79, 56),
            tags: [TAGS.non_diegetic, TAGS.ambient],
            // no uri available
            uri: "spotify:track:7C3XiKizAdg5FHx4UN0gTW"
        },
        {
            name: 'Bankrupt',
            artist: 'Phoenix',
            start: timeInSeconds(82, 32),
            end: timeInSeconds(83, 10),
            tags: [TAGS.non_diegetic, TAGS.end_credits],
            // no uri available
            uri: "spotify:track:2Fw7XYFpb58HYHWGKvgERC"
        },
        {
            name: 'Super Rich Kids',
            artist: 'Frank Ocean',
            start: timeInSeconds(83, 11),
            end: timeInSeconds(88, 1),
            tags: [TAGS.non_diegetic, TAGS.end_credits],
            // no uri available
            uri: "spotify:track:0K9oqDmJBgSFjXU1bUY9Fk"
        },

        {
            name: 'Bling Ring Suite',
            artist: 'Brian Reitzell, OPN',
            start: timeInSeconds(88, 2),
            end: timeInSeconds(90, 20),
            tags: [TAGS.non_diegetic, TAGS.ambient, TAGS.end_credits],
            // no uri available
            uri: "spotify:track:7mmUOQu99LtVG6oI2qlokW"
        },

    ]
}

export const MOVIES = {
    the_virgin_suicides: {
        label: "The Virgin Suicides",
        id: "the_virgin_suicides",
        full: the_virgin_suicides__full,
        placeholder: the_virgin_suicides__single,
        height: 192,
        seconds: 5820
    },
    lost_in_translation: {
        label: "Lost In Translation",
        id: "lost_in_translation",
        full: lost_in_translation__full,
        placeholder: lost_in_translation__single,
        height: 173,
        seconds: 6106
    },
    marie_antoinette: {
        label: "Marie Antoinette",
        id: "marie_antoinette",
        full: marie_antoinette__full,
        placeholder: marie_antoinette__single,
        height: 180,
        seconds: 7355
    },
    somewhere: {
        label: "Somewhere",
        id: "somewhere",
        full: somewhere__full,
        placeholder: somewhere__single,
        height: 176,
        seconds: 5907
    },
    the_bling_ring: {
        label: "The Bling Ring",
        id: "the_bling_ring",
        full: the_bling_ring__full,
        placeholder: the_bling_ring__single,
        height: 172,
        seconds: 5433
    }
};


export const DISPLAY_SIZES = {
    mobile: "mobile",
    tablet: "tablet",
    desktop: "desktop"
};
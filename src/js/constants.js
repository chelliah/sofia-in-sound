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


function timeInSeconds(minutes, seconds) {
    return minutes*60 + seconds;
}

export const TAGS = {
    diegetic: 'diegetic',

    non_diegetic: 'non-diegetic',
    isolation: 'isolation',
    in_company: 'in company',
    heart: 'heart',
    curious: 'curious',
    ambient: 'ambient',
    end_credits: 'end_credits'

}

https://api.spotify.com/v1/tracks?ids=19MfnjgDrMYOy74LPEEmop,3ZSDb3YFnD4R3GZeRewBA2


// unplaced = loscil - Showers of Ink, 
export const SONGS = {
    the_bling_ring: [
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
            tags: [TAGS.in_company, TAGS.curious, TAGS.ambient],
            uri: "spotify:track:5yFY7FgEZiytkUGoV2wqGY"
        },
        {
            name: 'Sunshine (feat. M.I.A.)',
            artist: 'Rye Rye',
            start: 15*60 + 33,//15:33,
            end: 16*60 + 56,
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
            tags: [TAGS.in_company, TAGS.curious, TAGS.non_diegetic, TAGS.ambient],
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
            end: timeInSeconds(34, 00),
            tags: [TAGS.diegetic],
            uri: "spotify:track:5wuXWTCiKIlNEXfwAuTY1G"
        },
        {
            // car scene
            name: 'All of the Lights',
            artist: 'Kanye West',
            start: timeInSeconds(35, 31),
            end: timeInSeconds(36, 09),
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
            end: timeInSeconds(52, 06),
            tags: [TAGS.non_diegetic],
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
            tags: [TAGS.non_diegetic],
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
            tags: [TAGS.in_company, TAGS.curious, TAGS.non_diegetic, TAGS.ambient],
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
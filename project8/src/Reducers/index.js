import song1 from "../images/song1.jpg"
import song2 from "../images/song2.jpg"
import song3 from "../images/song3.jpg"

export const songReducer = ()=>{
    return[{
        title:"Tum Hi Aana",
        duration:"3:45",
        movie:"Marjaavaan",
        released: 2020,
        artist:"Jubin Nautiyal",
        song:song1,
        url:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    },
    {
        title:"Oh Humsafar",
        duration:"4:10",
        movie: "Frolic Neha Kakkar",
        released: 2019,
        artist:"Neha Kakkar, Tony Kakkar",
        song:song2,
        url:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    },
    {
        title:"Pachtaoge",
        duration:"2:50",
        movie: "Ultimate Love Songs - Arijit Singh",
        released: 2020,
        artist:"Arijit Singh",
        song:song3,
        url:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    }
];
}

   export const selectedSongReducer=(selectedSong=null,action)=>
    {
        switch(action.type)
        {
            case "SONGS":
                return action.payload;
            default:
                return selectedSong;    
        }

    }

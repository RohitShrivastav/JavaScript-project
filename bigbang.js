
const fetch = require('node-fetch');

const getData = (seasonNumber, episodeNumber) => {

    console.log("data fetched Successfully");

fetch("https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json")

.then( (res)=>{
    return res.json();
} )
.then( (data) =>{
    console.log("here starts the function");
    // console.log(data);
    const episodeDetails = data._embedded.episodes.find( (element)  => {
        return element.season === seasonNumber && element.number === episodeNumber            
})
if (episodeDetails){
    console.log(episodeDetails.name);
}else {
    console.log("wrong data input");
}



} ).catch( () =>{
    console.log("Unable to fetch data from file !!");
} );


}

getData(1,2);

    


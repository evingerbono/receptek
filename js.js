$(function(){
    beolvas("recept.json", megjelenit);
});

function beolvas(eleresiut,callback){
    fetch("recept.json")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.receptek);
            callback(data.receptek);
        })
        .catch((err)=>console.log(err));
}

function megjelenit(tomb){
    let txt= "<table>";
    tomb.forEach(function(recept, index) {
        txt+="<tr id="+index+">";
        for(const key in recept){
            txt+="<td>";
            txt+=recept[key];
            txt+="</td>";
        }
        txt+="</tr>"
    });
    txt+="</table>";
    $(".tartalom").append(txt);

    $(".tartalom table tr").on("click", function(){
        let aktID = $(this).attr("id")
        console.log(aktID);
        $(this).toggleClass("kiemel");
        aktreceptmegj(tomb,aktID);
    });
}

function aktreceptmegj(tomb,aktID){
    $(".recepthely").empty();
    let aktrecept=tomb[aktID]
    tomb.kep
        for(const key in aktrecept){
            if (key=="Kep") {
                $(".recepthely").append(`<img src="${aktrecept[key]}"alt="Étel">`);
            }
            else{
                $(".recepthely").append(`<p>${aktrecept[key]}</p`);
            }
        }

}

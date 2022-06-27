var express=require("express");
var bodyParser=require("body-parser");
const https=require("https");   
var app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    var name="Bro whats up";
    res.sendFile(__dirname+"/index.html");
    
})

app.post("/",function(req,res){
    const a=req.body.picker;
    console.log(a);
    if (a==="0"){
        var b="Dipayal";
    }
    else if(a=="1"){
        var b="Dadeldhura";
    }
    else if(a=="2"){
        var b="Dhangadi";
    }
    else if(a=="3"){
        var b="Birendranagar";
    }
    else if(a=="4"){
        var b="Nepalgunj";
    }
    else if(a=="5"){
        var b="Jumla";
    }
    else if(a=="6"){
        var b="Ghorahi";
    }
    else if(a=="7"){
        var b="Pokhara";
    }
    else if(a=="8"){
        var b="Bhairahawa";
    }
    else if(a=="9"){
        var b="Simara";
    }
    else if(a=="10"){
        var b="Kathmandu";
    }
    else if(a=="11"){
        var b="Okhaldhunga";
    }
    else if(a=="12"){
        var b="Taplejung";
    }
    else if(a=="13"){
        var b="Dhankuta";
    }
    else if(a=="14"){
        var b="Biratnagar";
    }
    else if(a=="15"){
        var b="Jomsom";
    }
    else if(a=="16"){
        var b="Dharan";
    }

    else if(a=="17"){
        var b="Lumle";
    }
    else if(a=="18"){
        var b="Jankapur";
    }
    else if(a=="19"){
        var b="Jiri";
    }
    else{
        var b="Sorry we couldn't find";
    }
    const url="https://nepal-weather-api.herokuapp.com/api/?place="+b;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData=JSON.parse(data);

            const max=parseFloat(weatherData.max);
            const min=parseFloat(weatherData.min);
            const kathmandu=parseFloat((max+min)/2);
            res.write("<h1>The avg temp of "+b+ " is "+kathmandu+"</h1>");
            res.write("<form action='/' method='get'><button>Back</button></form>");
            res.send();
        })
    })

})





app.listen(3000,function(){
    console.log("Server is listening to port 3000");
})
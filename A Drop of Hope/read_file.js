var fs= require('fs');
var data = "";

var readstream = fs.createReadStream('AboutUs.txt');

readstream.setEncoding('UTF-8');//Unified Text Format

readstream.on('data',function(result){
    data  +=result; //Concatinating the each word/sentence
});

readstream.on('end',function(result){
    data = "<!DOCTYPE html><html><head><title>About Us</title></head><body><h1>About Us</h1><p>"+data+"</p></body></html>"
    var writestream = fs.createWriteStream('AboutUs.html');//When File is not present, new file gets created
writestream.write(data,'UTF-8');
writestream.end();
});
/**
 * Created by josh on 1/29/16.
 */
var express=require('express'),
    port = process.env.PORT || 1338;
    app = express();

app.use(express.static(__dirname));


app.get('/switchVideo', function(req, res){
    var files = ["videos/test1.webm", "videos/test2.webm", "videos/test3.webm"]
    res.send(files[Math.floor((Math.random() * 3))]);

});

app.listen(port);


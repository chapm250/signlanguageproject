/**
 * Created by josh on 1/29/16.
 */
var express=require('express'),
    port = process.env.PORT || 1338;
    app = express();

app.use(express.static(__dirname));


app.get('/switchVideo', function(req, res){
    res.send("videos/test2.webm");
});

app.listen(port);


/**
 * Created by josh on 1/29/16.
 */
var express=require('express'),
    port = process.env.PORT || 1338;
    app = express();

app.use(express.static(__dirname));


app.get('/switchVideo', function(req, res){
    var files = ["videos/all.webm", "videos/and.webm", "videos/none.webm", "videos/about.webm", "videos/above.webm", "videos/algebra.webm"
        , "videos/almost.webm", "videos/as.webm", "videos/below.webm", "videos/both.webm", "videos/calculus.webm"
        , "videos/count.webm", "videos/decrease.webm", "videos/divide.webm", "videos/empty.webm", "videos/enough.webm", "videos/equal.webm"
        , "videos/fedup.webm", "videos/few.webm", "videos/figure.webm", "videos/full.webm", "videos/geometry.webm", "videos/half.webm"
        , "videos/heavy.webm", "videos/increase.webm", "videos/large.webm", "videos/light.webm", "videos/limit.webm", "videos/little.webm"
        , "videos/many.webm", "videos/math.webm", "videos/measure.webm", "videos/more.webm", "videos/most.webm", "videos/much.webm", "videos/none.webm"
        , "videos/overflow.webm", "videos/percent.webm", "videos/proportion.webm", "videos/small.webm", "videos/statistics.webm", "videos/subtract.webm"
        , "videos/than.webm", "videos/too.webm", "videos/total.webm", "videos/trigonometry.webm", "videos/very.webm", "videos/weigh.webm", "videos/wide.webm"
        , "videos/width.webm"];

    res.send(files[Math.floor((Math.random() * files.length))]);

});

app.listen(port);


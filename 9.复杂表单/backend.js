router.post('/getProvince', function (req, res, next) {
res.header({ "Access-Control-Allow-Origin": "*" });
var province=[];
for(var i in data)
{
province[i]=data[i].region.name;
}
res.json(province);
});

router.post('/getCity', function (req, res, next) {
res.header({ "Access-Control-Allow-Origin": "*" });
var citys=[];
var province=req.body.province;
for(var i in data){
if(data[i].region.name==province)
{
var city_full=data[i].region.state;
for(var j in city_full)
citys[j]=city_full[j].name;
break;
}
}
res.json(citys);
});

router.post('/getDictinct', function (req, res, next) {
res.header({ "Access-Control-Allow-Origin": "*" });
var distincts=[];
var province=req.body.province;
var city=req.body.city;
for(var i in data){
if(data[i].region.name==province)
{
var citys=data[i].region.state;
for(var j in citys){
if(citys[j].name==city){
distincts=citys[j].city;
break;
}
}
break;
}
}
res.json(distincts);
});
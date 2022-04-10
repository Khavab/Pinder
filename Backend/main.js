add_login(file,logs,usfile,overuser)
{
    var dict = {};
    $.getJSON(file, function (json) {
    for (var key in json) {
        var t = key.split("@");
        if(t.length==2 && t[1].length==7){
            if (json.hasOwnProperty(key)) {
                var item = json[key];
                dict = {key:item};
            }
        }
    }
    });

    var fs = require('fs');
    fs.readFile(logs, function (data) {
        var json = JSON.parse(data);
        json.push(dict);
        fs.writeFile(logs, JSON.stringify(json));
    });


    var bb = {}
    $.getJSON(usfile, function (json) {
        bb=json
    });

    var fs = require('fs');
    fs.readFile(overuser, function (data2) {
        var json = JSON.parse(data2);
        json.push(bb);
        fs.writeFile(overuser, JSON.stringify(json));
    });

}

verify_login(file)
{

    var dict2={};
    $.getJSON("logins.json", function (json) {
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var item = json[key];
            dict2 = {key:item};
        }
    }
    });

    var keyss = Object.keys(dict2);

    $.getJSON(file, function (json) {
    for (var key in json) {
        if(keyss.includes(key)){
            if (json.hasOwnProperty(key)) {
                var item = json[key];
                if(dict2[key]==item){
                    var dictstring = JSON.stringify("true");
                    var fs = require('fs');
                    fs.writeFile("loginboolean.json", dictstring);
                    return;
                }
            }
        }

    }
    var dictstring = JSON.stringify("false");
    var fs = require('fs');
    fs.writeFile("loginboolean.json", dictstring);
    });

}


constructor2(file)
{//org,ptype,name,time,address,feem,feef,themed,theme){//,limit,gratio=null){
    var org = [];
    var ptype = [];
    var nam = [];
    var time = [];
    var address = [];
    var feem = [];
    var feef = [];
    var themed = [];
    var theme = [];
    var distance=[];
    $.getJSON(file, function (json) {
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            org.push(key);
            var item = json[key];
            ptype.push(item.ptype);
            nam.push(item.name);
            time.push(item.time);
            address.push(item.address);
            feem.push(item.feem);
            feef.push(item.feef);
            themed.push(item.themed);
            theme.push(item.theme);
            distance.push(item.distance);
        }
    }
    });
    return org,ptype,nam,time,address,feem,feef,themed,theme,distance;
    // org = org;
    // ptype = ptype;
    // name = name;
    // time = time;
    // address = address;
    // feem = feem;
    // feef = feef
    // theme = themed;
    // theme = theme;
    // limit = limit;
    // gratio = gratio;
    // interested = 0;
    // b =0
    // g=0
    // other=0
}

// change_mfee(x){
//     feem=x;
// }
//
// change_mfee(x){
//     feem=x;
// }




constructor(curuser,overuser,jjj)
{//email,username,birthday,gender,themed,ptype,previous,interested,non_interested,model=null){
    var email=0;
    var usernam = 0;
    var birthday = 0;
    var gender = 0;
    var themed = 0;
    var ptype = 0;
    var interested = 0;
    var non_interested = 0;
    $.getJSON(curuser, function (json1) {
        for (var key2 in json1) {
            $.getJSON(overuser, function (json) {
            for (var key in json) {
                if (json.hasOwnProperty(key)&& key==key2) {
                    email=key;
                    var item = json[key];
                    usernam = item.usernam;
                    birthday = item.birthday;
                    gender = item.gender;
                    themed = item.themed;
                    ptype = item.ptype;
                    interested = item.interested;
                    non_interested = item.noninterested;

                }
            }
            });
        }

    });


    var model = tf.loadLayersModel(jjj);
    if(model==null){
        var model = tf.sequential({layers:
            [tf.layers.dense({inputShape: [4], units: 10, activation: 'relu'}),
                tf.layers.dense({units: 4, activation: 'relu'}),
                tf.layers.dense({units: 1, activation: 'softmax'}),]});
        model.compile({optimizer: tf.train.adam(), loss: tf.losses.meanSquaredError, metrics: ['mse'],});
    }
    // var model = tf.sequential({layers:
    //         [tf.layers.dense({inputShape: [3], units: 10, activation: 'relu'}),
    //             tf.layers.dense({units: 1, activation: 'softmax'}),]});
    // model.compile({optimizer: tf.train.adam(), loss: tf.losses.meanSquaredError, metrics: ['mse'],});

    return email,usernam,birthday,gender,themed,ptype,interested,non_interested,model;
}


// check_age(){
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//
//     if(birthday[2]+18<yyyy){
//         var dictstring = JSON.stringify("false");
//         var fs = require('fs');
//         fs.writeFile("ageboolean.json", dictstring);
//         return
//     }
//     else if(birthday[0]<mm){
//         var dictstring = JSON.stringify("false");
//         var fs = require('fs');
//         fs.writeFile("ageboolean.json", dictstring);
//         return
//     }
//     else if(birthday[1]<dd){
//         var dictstring = JSON.stringify("false");
//         var fs = require('fs');
//         fs.writeFile("ageboolean.json", dictstring);
//         return
//     }
//     else{
//         var dictstring = JSON.stringify("true");
//         var fs = require('fs');
//         fs.writeFile("ageboolean.json", dictstring);
//         return
//     }
//
// }



add_interested(n,curuser,overuser,jjj)
{
    var bb = {}
    $.getJSON(n, function (json) {
        bb=json
    });
    email,usernam,birthday,gender,themed,ptype,interested,non_interested,model = construct(curuser,overuser,jjj);
    interested.push(bb);
    dict = {email:{"usernam":usernam,"birthday":birthday,"gender":gender,"themed":themed,"ptype":ptype,"interested":interested,"noninterested":non_interested}};
    var fs = require('fs');
    fs.readFile(overuser, function (data) {
        var json = JSON.parse(data);
        json.push(dict);
        fs.writeFile(overuser, JSON.stringify(json));
    });
}

add_notinterested(n,curuser,overuser)
{
    var bb = {}
    $.getJSON(n, function (json) {
        bb=json
    });
    email,usernam,birthday,gender,themed,ptype,interested,non_interested,model = construct(curuser,overuser,mm);
    non_interested.push(bb);
    dict = {email:{"usernam":usernam,"birthday":birthday,"gender":gender,"themed":themed,"ptype":ptype,"interested":interested,"noninterested":non_interested}};
    var fs = require('fs');
    fs.readFile(overuser, function (data) {
        var json = JSON.parse(data);
        json.push(dict);
        fs.writeFile(overuser, JSON.stringify(json));
    });
}

format_data(partifile,curuser,overuser,jjj)
{
    email,usernam,birthday,gender,themed,ptype,interested,non_interested,model = construct(curuser,overuser,jjj);
    org,ptype,nam,time,address,feem,feef,themed,theme,distance = constructor2(partifile);
    let inputs = [];
    let output = [];
    if(gender=="male"){
        for(let n=0; n<org.length;n++){
            inputs.push([distance[n],feem[n],ptype[n],themed[n]]);
            if(non_interested.includes(org[n])){
                ouput.push(0);
            }
            else{
                ouput.push(1);
            }
        }
    }
    else{
        for(let n=0; n<org.length;n++){
            inputs.push([distance[n],feef[n],ptype[n]])
            if(non_interested.includes(org[n])){
                ouput.push(0);
            }
            else{
                ouput.push(1);
            }
        }
    }

    return inputs,output


}

train_model(inputs,outputs,modell,saff)
{
    modell.fit(inputs, outputs, {epochs: 1000, batchSize: 1});
    modell.save(saff);
}

prefer_order(partifile,curuser,overuser,jjj)
{
    // for(let n=0; n<parties.length;n++){
    //     if(parties[n].themed==true && themed==false){
    //         parties.splice(n,1);
    //         n--;
    //     }
    //     else if(!ptype.includes(parties[n].ptype)){
    //         parties.splice(n,1);
    //         n--;
    //     }
    //
    // }

    let inputs,output = format_data(partifile,curuser,overuser,jjj);
    email,usernam,birthday,gender,themed,ptype,interested,non_interested,modell = construct(curuser,overuser,jjj);
    train_model(inputs,output,modell,jjj);
    email,usernam,birthday,gender,themed,ptype,interested,non_interested,modell = construct(curuser,overuser,jjj);
    let results = [];
    for(let n=0; n<inputs.length;n++){
        results.push(modell.predict(inputs[n]));
    }
    output.sort();
    var dictstring = JSON.stringify(output);
    var fs = require('fs');
    fs.writeFile("results.json", dictstring);
}


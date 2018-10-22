
var table_1; //global variables for the tables
var table_2;
var table_3;

var today = new Date(); //variables for date manipulation
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0
var yyyy = today.getFullYear();

var is_light = false; //variable used for the theme
$('.table-responsive').css("display","none");
hideLoader(false);
$(document).ready( function () { //if there is data on the local storage
    
    if(localStorage.getItem('memory')){
        let table_data = JSON.parse(localStorage.getItem("table_data"));
        let total_tweets = localStorage.getItem("total_tweets");
        let default_tab = localStorage.getItem("default-tab");
        let color_palette = JSON.parse(localStorage.getItem("color_palette"));
        table_1=$('#table_account_1').DataTable({
            "aaSorting": [[ table_data.table_1.column, table_data.table_1.orientation ]],
            "pageLength": total_tweets,
            reponsive:true,
            "bLengthChange": false,
            dom:"<'myfilter'f>t",
            "columns": [{
                "type":"date",
                "render": function(data, type, row) {
                    let date = new Date(data);
                    let aux = (date.getMonth() + 1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                  return aux;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            }]
        });
        table_2 = $('#table_account_2').DataTable({
            "aaSorting": [[ table_data.table_2.column, table_data.table_2.orientation ]],
            "pageLength": total_tweets,
            "bLengthChange": false,
            reponsive:true,
            dom:"<'myfilter'f>t",
            "columns": [{
                "type":"date",
                "render": function(data, type, row) {
                    let date = new Date(data);
                    let aux = (date.getMonth() + 1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                  return aux;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            }]
        });
        table_3 = $('#table_account_3').DataTable({
            "aaSorting": [[ table_data.table_3.column, table_data.table_3.orientation]],
            "pageLength": total_tweets,
            "bLengthChange": false,
            reponsive:true,
            dom:"<'myfilter'f>t",
            "columns": [{
                "type":"date",
                "render": function(data, type, row) {
                    let date = new Date(data);
                    let aux = (date.getMonth() + 1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                  return aux;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            }]
        });
        
        //loads the data from local storage
        $("#number_of_tweets").val(total_tweets);
        $("#default_table").val(default_tab);
        $("body").css("background","-moz-linear-gradient(top,  "+color_palette.from+" 0%, "+color_palette.to+" 50%)" );
        $("body").css("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%,"+color_palette.from+"), color-stop(50%,"+color_palette.to+"))" );
        $("body").css("background","-webkit-linear-gradient(top,  "+color_palette.from+" 0%,"+color_palette.to+" 50%)" );
        $("body").css("background","-o-linear-gradient(top,  "+color_palette.from+") 0%,"+color_palette.to+" 50%)" );
        $("body").css("background","-ms-linear-gradient(top,  "+color_palette.from+" 0%,"+color_palette.to+" 50%)" );
        $("body").css("background","linear-gradient(to bottom,  "+color_palette.from+" 0%,"+color_palette.to+" 50%)" );
        document.getElementById("color_from").value = color_palette.from;
        document.getElementById("color_to").value = color_palette.to;
        
        if(brightnessByColor(color_palette.from)<60.000){
            
            $(".color-change").css("color","#e2e2e2");
            $("#table_account_1_filter").css("color","#e2e2e2");
            $("#table_account_2_filter").css("color","#e2e2e2");
            $("#table_account_3_filter").css("color","#e2e2e2");
        }
        $("#"+default_tab).click();

    }else{ //if the local storage is empty
        table_1=$('#table_account_1').DataTable({
            "aaSorting": [[ 0, "desc" ]],
            "pageLength": 30,
            "bLengthChange": false,
            reponsive:true,
            dom:"<'myfilter'f>t",
            "columns": [{
                "type":"date",
                "render": function(data, type, row) {
                    let date = new Date(data);
                    let aux = (date.getMonth() + 1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                  return aux;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            }]
        });
        table_2 = $('#table_account_2').DataTable({
            "aaSorting": [[ 0, "desc" ]],
            "pageLength": 30,
            "bLengthChange": false,
            reponsive:true,
            dom:"<'myfilter'f>t",
            "columns": [{
                "type":"date",
                "render": function(data, type, row) {
                    let date = new Date(data);
                    let aux = (date.getMonth() + 1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                  return aux;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            }]
        });
        table_3 = $('#table_account_3').DataTable({
            "aaSorting": [[ 0, "desc" ]],
            "pageLength": 30,
            "bLengthChange": false,
            reponsive:true,
            dom:"<'myfilter'f>t",
            "columns": [{
                "type":"date",
                "render": function(data, type, row) {
                    let date = new Date(data);
                    let aux = (date.getMonth() + 1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                  return aux;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            },
            {
                "render": function(data, type, row) {
                  return data;
                }
            }]
        });
        
        document.getElementById("color_from").value = "#d9e8f1";
        document.getElementById("color_to").value = "#1da1f2";
        load_data("makeschool");
    }
    
    today = mm+'/'+dd+'/'+yyyy;
    today_date = today;

    $("#date_from_1").kendoDatePicker({
        min: "2000-01-01",
        max: today
    });

    $("#date_from_2").kendoDatePicker({
        min: "2000-01-01",
        max: today
    });

    $("#date_from_3").kendoDatePicker({
        min: "2000-01-01",
        max: today
    });
    
    $("#date_from_1").attr("readonly", true);
    $("#date_from_2").attr("readonly", true);
    $("#date_from_3").attr("readonly", true);

    table_1.on( 'order.dt', function ( e, diff, edit ) {
        save_changes();
    });
    table_2.on( 'order.dt', function ( e, diff, edit ) {
        save_changes();
    });
    table_3.on( 'order.dt', function ( e, diff, edit ) {
        save_changes();
    });

} );
function save_changes(){ //save every change that the user made on real time
    let table_data = {
       table_1:{
       column:0,
       orientation:""
       },
       table_2:{
           column:0,
           orientation:""
       },
       table_3:{
           column:0,
           orientation:""
       }
    };
    let date_range = {}; //TODO Implement dateRange
    let total_tweets = 0;
    let color_palette = {};
    let default_tab = "";
    
    let order_aux = table_1.order();
    table_data.table_1.column = order_aux[0][0];
    table_data.table_1.orientation = order_aux[0][1];
    
    order_aux = table_2.order();
    table_data.table_2.column = order_aux[0][0];
    table_data.table_2.orientation = order_aux[0][1];
    
    order_aux = table_3.order();
    table_data.table_3.column = order_aux[0][0];
    table_data.table_3.orientation = order_aux[0][1];
    //TODO save dateRange
    
    total_tweets = $("#number_of_tweets").val();

    default_tab = $("#default_tab").val();

    color_palette = {
        from:$("#color_from").val(),
        to:$("#color_to").val()
    }
    
    localStorage.setItem('table_data', JSON.stringify(table_data));
    localStorage.setItem('total_tweets', total_tweets);
    localStorage.setItem('memory', 1);
    localStorage.setItem('color_palette', JSON.stringify(color_palette));
    localStorage.setItem("default-tab", default_tab);
    
}
function load_data(user_account){ //loads the raw data from the api
    hideLoader(false);
    $("#fetch-error").hide();
    $("#no-data").hide();
    let user_data="";
    let data="";
    
    if(user_account.includes("-tab")){
        user_account = user_account.replace("-tab","");
    }

    if(!(user_account == "settings")){
        document.getElementById("total_tweets_"+user_account).innerHTML = "";
        $.ajax({
            url: "http://localhost:7890/1.1/statuses/user_timeline.json?count="+$("#number_of_tweets").val()+"&screen_name="+user_account,
            success:function(resp){
                data = JSON.parse(resp);
                user_data = data[0].user;
                
                document.getElementById("total_tweets_"+user_account).innerHTML = "Showing "+data.length+" tweets";
                switch(user_account){
                    case "makeschool": 
                        $("#avatar_1").attr("src",user_data.profile_image_url_https);
                        $("#link_to_profile_1").attr("href","https://twitter.com/"+data[0].user.screen_name).attr("target","_blank");
                    break;

                    case "newsycombinator": 
                        $("#avatar_2").attr("src",user_data.profile_image_url_https);
                        $("#link_to_profile_2").attr("href","https://twitter.com/"+data[0].user.screen_name).attr("target","_blank");
                    break;

                    case "ycombinator":
                        $("#avatar_3").attr("src",user_data.profile_image_url_https);
                        $("#link_to_profile_3").attr("href","https://twitter.com/"+data[0].user.screen_name).attr("target","_blank");
                    break;
                }
                $("#avatar_1").attr("src",user_data.profile_image_url_https);
                $("#link_to_profile_1").attr("href","https://twitter.com/"+data[0].user.screen_name).attr("target","_blank");
                
                data_sort (data,user_account)
            },
            error:function(err){
                console.log('ajax request failed');
                //make alert visible
                $("#fetch-error").show();
            }
        });
    }else{
        hideLoader(true);
    }
}

function render_tables(data, user_account){ //renders the table
    if(data){
        switch(user_account){
            case "makeschool":
                table_1.clear();
                table_1.rows.add(data);
                table_1.draw();
            break;
        
            case "newsycombinator":
                table_2.clear();
                table_2.rows.add(data);
                table_2.draw();
            break;
        
            case "ycombinator":
                table_3.clear();
                table_3.rows.add(data);
                table_3.draw();
            break;
        }
        hideLoader(true);
    }else{ //if there is no data, it clears it
        $("#no-data").show();

        table_1.clear();
        table_2.clear();
        table_3.clear();

        table_1.draw();
        table_2.draw();
        table_3.draw();
    }
    
}

function change_bg(){ //changes the gradient background
    $("body").css("background","-moz-linear-gradient(top,  "+$("#color_from").val()+" 0%, "+$("#color_to").val()+" 50%)" );
    $("body").css("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%,"+$("#color_from").val()+"), color-stop(50%,"+$("#color_to").val()+"))" );
    $("body").css("background","-webkit-linear-gradient(top,  "+$("#color_from").val()+" 0%,"+$("#color_to").val()+" 50%)" );
    $("body").css("background","-o-linear-gradient(top,  "+$("#color_from").val()+") 0%,"+$("#color_to").val()+" 50%)" );
    $("body").css("background","-ms-linear-gradient(top,  "+$("#color_from").val()+" 0%,"+$("#color_to").val()+" 50%)" );
    $("body").css("background","linear-gradient(to bottom,  "+$("#color_from").val()+" 0%,"+$("#color_to").val()+" 50%)" );
    if(brightnessByColor($("#color_from").val())<40.000){ //checks if the background is too dark or too light, changes the font color accordingly
        is_light = true;
        $(".color-change").css("color","#e2e2e2");
        $("#table_account_1_filter").css("color","#e2e2e2");
        $("#table_account_2_filter").css("color","#e2e2e2");
        $("#table_account_3_filter").css("color","#e2e2e2");
    }else{
        $(".color-change").css("color","#212529");
        $("#table_account_1_filter").css("color","#212529");
        $("#table_account_2_filter").css("color","#212529");
        $("#table_account_3_filter").css("color","#212529");
    }
    save_changes();
}

function change_length_table(){ //changes the number of tweets of the table
    $("#table_account_1").DataTable().page.len($("#number_of_tweets").val());
    $("#table_account_2").DataTable().page.len($("#number_of_tweets").val());
    $("#table_account_3").DataTable().page.len($("#number_of_tweets").val());
}

function update_dates(data, user_account){ //updates the date picker with the data of the first request
    let date_from = new Date(data[0][0]);
    let aux_to = (parseInt(date_from.getMonth()) + 1)+"/"+parseInt(date_from.getDate())+"/"+parseInt(date_from.getFullYear());
    
    switch(user_account){
        case "makeschool":
            document.getElementById("date_from_1").value = aux_to;
        break;
    
        case "newsycombinator":
            document.getElementById("date_from_2").value = aux_to;
        break;
    
        case "ycombinator":
            document.getElementById("date_from_3").value = aux_to;
        break;
    }
}

function search_date(id,date_class){ //function is called when the users filters by date, it's a verification of the date
    hideLoader(false);
    $("#fetch-error").hide();
    $("#no-data").hide();
    date_class = date_class.split(" ");
    date_class = date_class[0];
    
    let verif_date_from = new Date($("#"+id).val());

    let date_from_data = (verif_date_from.getUTCMonth()+1)+"/"+verif_date_from.getUTCDate()+"/"+verif_date_from.getUTCFullYear();

    if(verif_date_from == 'Invalid Date'){
        document.getElementById("error_"+date_class).innerHTML = 'Please enter a Valid Date';
        document.getElementById("error_"+date_class).setAttribute("style","color:#ff1117;font-weight: bold;");
        return;
    }else{
        document.getElementById("error_"+date_class).innerHTML = '';
    }

    search_data(date_from_data,date_class); //proceeds to search for data
}

function search_data(date_from,date_class){ //function for the search by date
    let url = ""; //url of the request
    let user_account = ""; //account used for the request
    date_from = date_from.split("/");
    switch(date_class){ // This API only show the tweets on a date range of a week, I made it so it also shows the mentions of the user
        case "date_1": 
            user_account ="makeschool";
            url = 'http://localhost:7890/1.1/search/tweets.json?q='+user_account+'&count='+$("#number_of_tweets").val()+'&until='+date_from[2]+"-"+date_from[0]+"-"+date_from[1]+"&result_type=recent"; 
        break;

        case "date_2": 
            user_account = "newsycombinator";
            url = 'http://localhost:7890/1.1/search/tweets.json?q='+user_account+'&count='+$("#number_of_tweets").val()+'&until='+date_from[2]+"-"+date_from[0]+"-"+date_from[1]+"&result_type=recent"; 
        break;

        case "date_3":
            user_account = "ycombinator";
            url = 'http://localhost:7890/1.1/search/tweets.json?q='+user_account+'&count='+$("#number_of_tweets").val()+'&until='+date_from[2]+"-"+date_from[0]+"-"+date_from[1]+"&result_type=recent"; 
        break;
    }
    console.log(url);
    $.ajax({
        url: url,
        success:function(resp){
            data = JSON.parse(resp);
            if(data.statuses.length != 0){ //verify empty response
                console.log("here");
            data = data.statuses;
            console.log(data);
            user_data = data[0].user;
            
            
            switch(date_class){
                case "date_1": 
                    document.getElementById("total_tweets_makeschool").innerHTML = "Showing "+data.length+" tweets";
                break;

                case "date_2": 
                    document.getElementById("total_tweets_newsycombinator").innerHTML = "Showing "+data.length+" tweets";
                break;

                case "date_3":
                    document.getElementById("total_tweets_ycombinator").innerHTML = "Showing "+data.length+" tweets";
                break;
            }
            
            data_sort (data,user_account);
            }else{ //if empty
                switch(date_class){
                    case "date_1": 
                        document.getElementById("total_tweets_makeschool").innerHTML = "Showing 0 tweets";
                    break;
    
                    case "date_2": 
                        document.getElementById("total_tweets_newsycombinator").innerHTML = "Showing 0 tweets";
                    break;
    
                    case "date_3":
                        document.getElementById("total_tweets_ycombinator").innerHTML = "Showing 0 tweets";
                    break;
                }
                data_sort (null,user_account);
            }
        },
        error:function(err){
            console.log('ajax request failed');
            //make alert visible
            $("#fetch-error").show();
        }
    });
}

function hideLoader(toggle, is_settings) { //function for the loader SVG
    if(toggle){
        $.when($('.twitter-loader').fadeOut()).then(function() {
            $('.tab-pane').fadeIn();
            $('.tab-pane').css("display","none");
            $('.active').css("display","block");
            $('.table-responsive').css("display","none");
        });

    }else{
        $('.twitter-loader').fadeIn();
        $('.tab-pane').fadeOut()
        $('.tab-pane').css("display","none");
        $('.table-responsive').css("display","none");
        $('.active').css("display","block");
    }
    
}

function data_sort(total_data,user_account){ //this function sorts the data to the correct table and parse it
    console.log(total_data);
    let tweet_created_at;   //aux variable for the date format
    let data_to_render = []; //parsed data, this is send to the render function
    let aux_array = []; //aux array for the parsed data
    let tweet_url = ""; //variable for the url of th tweet
    let content = ""; //content of the tweet
    if(total_data == null){ //checks if the data is empty
        render_tables(null, user_account);
    }else{
    for(i=0;i<total_data.length;i++){ //proceeds with the parse of the data
        tweet_url = "https://twitter.com/"+total_data[i].user.screen_name+"/status/"+total_data[i].id_str;

        if(total_data[i].retweeted_status){ //checks if it is a retweet

            content = total_data[i].retweeted_status.text; // here is where the urls are changed by actual urls

            for(j=0;j<total_data[i].entities.user_mentions.length;j++){
                content = content.replaceAll("@"+total_data[i].entities.user_mentions[j].screen_name,"<a href='https://twitter.com/"+total_data[i].entities.user_mentions[j].screen_name+"' target='_blank'>@"+total_data[i].entities.user_mentions[j].screen_name+"</a>")
            }

            for(j=0;j<total_data[i].retweeted_status.entities.user_mentions.length;j++){
                content = content.replaceAll("@"+total_data[i].retweeted_status.entities.user_mentions[j].screen_name,"<a href='https://twitter.com/"+total_data[i].retweeted_status.entities.user_mentions[j].screen_name+"' target='_blank'>@"+total_data[i].retweeted_status.entities.user_mentions[j].screen_name+"</a>")
            }

            for(j=0;j<total_data[i].retweeted_status.entities.urls.length;j++){
                content = content.replace(total_data[i].retweeted_status.entities.urls[j].url,"<a href='"+total_data[i].retweeted_status.entities.urls[j].url+"' target='_blank'>"+total_data[i].retweeted_status.entities.urls[j].url+"</a>")
            }

            for(j=0;j<total_data[i].retweeted_status.entities.hashtags.length;j++){
                content = content.replaceAll("#"+total_data[i].entities.hashtags[j].text,"<a href='https://twitter.com/hashtag/"+total_data[i].entities.hashtags[j].text+"' target='_blank'>#"+total_data[i].entities.hashtags[j].text+"</a>")
            }

            if(total_data[i].retweeted_status.entities.media){
                for(j=0;j<total_data[i].retweeted_status.entities.media.length;j++){
                    content = content.replace(total_data[i].retweeted_status.entities.media[j].url,"<a href='"+total_data[i].retweeted_status.entities.media[j].url+"' target='_blank'>"+total_data[i].retweeted_status.entities.media[j].url+"</a>")
                }
            }

            content = content+" (Tweet from: <a href='https://twitter.com/"+total_data[i].retweeted_status.user.screen_name+"' target='_blank'>@"+total_data[i].retweeted_status.user.screen_name+"</a>)";
            
        }else{ //if not a retweet

            content = total_data[i].text;

            for(j=0;j<total_data[i].entities.user_mentions.length;j++){
                content = content.replaceAll("@"+total_data[i].entities.user_mentions[j].screen_name,"<a href='https://twitter.com/"+total_data[i].entities.user_mentions[j].screen_name+"' target='_blank'>@"+total_data[i].entities.user_mentions[j].screen_name+"</a>")
            }

            for(j=0;j<total_data[i].entities.urls.length;j++){
                content = content.replace(total_data[i].entities.urls[j].url,"<a href='"+total_data[i].entities.urls[j].url+"' target='_blank'>"+total_data[i].entities.urls[j].url+"</a>")
            }

            for(j=0;j<total_data[i].entities.hashtags.length;j++){
                content = content.replaceAll("#"+total_data[i].entities.hashtags[j].text,"<a href='https://twitter.com/hashtag/"+total_data[i].entities.hashtags[j].text+"' target='_blank'>#"+total_data[i].entities.hashtags[j].text+"</a>")
            }

            if(total_data[i].entities.media){
                for(j=0;j<total_data[i].entities.media.length;j++){
                    content = content.replace(total_data[i].entities.media[j].url,"<a href='"+total_data[i].entities.media[j].url+"' target='_blank'>"+total_data[i].entities.media[j].url+"</a>")
                }
            }
        }

        if(total_data[i].entities.media){ //checks if there is media in the tweet
            for(j=0;j<total_data[i].entities.media.length;j++){
                content = content.replace(total_data[i].entities.media[j].url,"<a href='"+total_data[i].entities.media[j].url+"' target='_blank'>"+total_data[i].entities.media[j].url+"</a>")
            }
        }

        tweet_created_at = new Date(total_data[i].created_at); //takes the timestamp of the tweet
        
        aux_array = [
            tweet_created_at,
            content,
            "<a href='"+tweet_url+"' target='_blank'><button class='btn btn-info'>View</button></a>"
        ]
        
        data_to_render.push(aux_array);  //array for the parsed data
    }
    render_tables(data_to_render, user_account); //send to the render function
    update_dates(data_to_render,user_account); //updates the date picker
    }
}

String.prototype.replaceAll = function(strReplace, strWith) { //function used to ignore caps on any char
    var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var reg = new RegExp(esc, 'ig');
    return this.replace(reg, strWith);
}

function brightnessByColor (color) { //function for the caculation of brightness of the background
    var color = "" + color, isHEX = color.indexOf("#") == 0, isRGB = color.indexOf("rgb") == 0;
    if (isHEX) {
      var m = color.substr(1).match(color.length == 7 ? /(\S{2})/g : /(\S{1})/g);
      if (m) var r = parseInt(m[0], 16), g = parseInt(m[1], 16), b = parseInt(m[2], 16);
    }
    if (isRGB) {
      var m = color.match(/(\d+){3}/g);
      if (m) var r = m[0], g = m[1], b = m[2];
    }
    if (typeof r != "undefined") return ((r*299)+(g*587)+(b*114))/1000;
  }
/*
function pruneAndPrint(){
    var feed = $("#pagelet_welcome_box,#pagelet_navigation, [id^=rightCol], [id^=stream_pagelet]");
    var message = $('#distracted'); 
    feed.remove();
}

function repeatFunction(func) {
    pruneAndPrint();
    repeatFunction(func);
 /*  setTimeout(function() {
        repeatFunction(func, delay);
    }, delay);
}

setInterval(pruneAndPrint,10);
//repeatFunction(pruneAndPrint);
//
//pruneAndPrint();
//repeatFunction(pruneAndPrint,100);
*/

function pruneAndPrint(){
   var feed = $( "#pagelet_welcome_box,#pagelet_navigation, #rightCol, #stream_pagelet");
    $( "#mainContainer").css("margin", "10px 150px auto 165px");    
   var message = $('#distracted');
  if (message.length == 0) {
	message = $('<h1>')
            .attr('id', 'distracted')
            .text("I won't let facebook distract me")
            .css('font-size', '30px')
            .css('margin','200px 300px 300px 75px')
            .css('position','absolute')
      .css('text-align','center')
        $('#contentCol').before(message);
	}
    feed.hide();
}

setInterval(pruneAndPrint,10);

/*                                                                                                            [id^=pagelet_welcome_box],[id^=pagelet_navigation], [id^=rightCol], [id^=stream_pagelet]
    if(feed.length == 0){                                                                                     
        message.remove();                                                                                     
    } else if (message.length ==0){                                                                           
        message = $('<h1>')                                                                                   
        .attr('id','distracted')                                                                              
        .css('font-size',30)                                                                                  
        .css("position","relative")                                                                           
        .text("I won't get distracted")                                                                       
                                                                                                              
        $('[data-location=maincolumn]').append(message);                                                      
    }                                                                                                         
*/

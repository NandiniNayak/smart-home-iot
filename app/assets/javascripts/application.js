$(document).ready(function(){
    // loadDocOn();
    // loadDocOff();

});

function loadDocOn(){
    $.ajax({
            type: "POST",
            url: '/lamps',
            dataType: "json",
            // headers added to solve 422 unprocessable entity error
            headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), // Optional
                  'Content-Type': 'application/json'
            },
            // stringify to solve post 400 bad request error
            data: JSON.stringify({'status': 1}),
            success: function(data){
                console.log(data);
            },
            //  error: function(xhr, textStatus, error) {
            //  alert(xhr.statusText+""+textStatus+""+error);
            //  }
           
        });
}

function loadDocOff(){
    $.ajax({
            type: "POST",
            url: '/lamps',
            dataType: "json",
            // headers added to solve 422 unprocessable entity error
            headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), // Optional
                  'Content-Type': 'application/json'
            },
            // stringify to solve post 400 bad request error
            data: JSON.stringify({'status': 0}),
            success: function(data){
                console.log(data);
            },
            //  error: function(xhr, textStatus, error) {
            //  alert(xhr.statusText+""+textStatus+""+error);
            //  }
           
        });
}





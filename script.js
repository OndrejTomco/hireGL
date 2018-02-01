$(function(){

    $("#loginBtn").click(verifyInput);

    function verifyInput(){
        
        var userName = $("#usr").val();
        var pass = $("#pass").val();
        
        if(userName.length <1 || pass.length <1){
            $("#warning").css("visibility", "visible");
            console.log('hey');
        }

        else{
            $("#warning").css("visibility","hidden" );

            $.ajax({
                url:"akademiasovy.ddns.net:8081/api/auth/login",
                data: { format: 'json'},
                error: function(){
                   $("#error").html('not Found');
                },
                dataType: "json",
                success : createTable,
                type: 'POST'
    
            });
        }

    }





});
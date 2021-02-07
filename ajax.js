setInterval(function() {
    $(document).ready(function() {
        $(".outputs").load("io.html");
    });

    for(let i = 0; i < 8; i++) {
        let input_switch = $("#i0" + i + " input[type=submit]").val()
        let output_switch = $("#q0" + i + " input[type=button]").val()
    
    
        if(input_switch == 1) {
            $("#i0" + i + " input").addClass("active");
            $("#i0" + i + " input[type=hidden]").val(0);
        }
        else {
            $("#i0" + i + " input[type=submit]").removeClass("active");
            $("#i0" + i + " input[type=hidden]").val(1);
        }
    
        if(output_switch == 1) {
            $("#q0" + i + " input").addClass("active");
            $("#q0" + i + " input[type=hidden]").val(0);
        }
        else {
            $("#q0" + i + " input").removeClass("active");
            $("#q0" + i + " input[type=hidden]").val(1);
        }
    }
}, .0000000000000001);


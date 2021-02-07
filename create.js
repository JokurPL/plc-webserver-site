const create = () => {
    for(let i = 0; i< 8; i++) {
        let input_template = $([
            "<div class='switch input-switch'>",
            "<h2>I0." + i +":</h2>",
            "<!-- AWP_In_Variable Name=\'\"Input_0" + i + "\"\' -->",
            "<form method='post' id='i0" + i + "'>",
            "  <input type='hidden'  name='\"Input_0" + i + "\"' value='0'>" ,   
            "    <input type='submit' name='\"Input_0" + i + "\"' value=':=\"Input_0" + i + "\":'>", 
            "</form>",
            "</div>"
            ].join("\n"));

            $(".inputs").append(input_template)
    }

    for(let i = 0; i < 6; i++) {
        let output_template = $([
            "<div class='switch'>",
            "<h2>Q0." + i +"</h2>",
            "<form method='post' id='q0" + i + "'>",
            "  <input type='hidden' value='1'>" ,
            "    <input type='button' name='\"Output_0" + i + "\"' value=':=\"Output_0" + i + "\":'>",
            "</form>",
            "</div>"
            ].join("\n"));

        $(".outputs").append(output_template)
    }

}

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
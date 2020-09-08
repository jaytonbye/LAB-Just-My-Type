$(document).ready(()=>{
    $('#keyboard-upper-container').hide()

    $(document).keydown((e)=>{
        if (e.keyCode == 16){
            $('#keyboard-upper-container').show()
            $('#keyboard-lower-container').hide()
        }
    })
    $(document).keyup((e)=>{
        if (e.keyCode == 16){
            $('#keyboard-upper-container').hide()
            $('#keyboard-lower-container').show()
        }
    })

    $(document).keypress((e)=>{
        $(`#${e.keyCode}`).css('backgroundColor','yellow')
        setTimeout(()=>{
            $(`#${e.keyCode}`).css('backgroundColor','')
        },200)
        
    })

    /*
    $(document).keyup((e)=>{
        $(`#${e.keyCode}`).css('backgroundColor','white')
    })
    */
})
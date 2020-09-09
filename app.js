$(document).ready(()=>{
    $('#keyboard-upper-container').hide()

    let currentSentence = 0
    let currentLetter = 0
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

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
        $($letter).appendTo($('#target-letter'))
        currentLetter++
    })
    
    

    let $sentence = `<p>${sentences[currentSentence]}</p>`
    let $letter = `<p>${sentences[currentSentence][currentLetter]}</p>`
    $($sentence).appendTo($('#sentence'))

})
function infoAlumne() {
    var alumne = {
    "codeInstitut": "1111",
    "nameInstitut": "Esteve terradas - illa",
    "alumnes": {
        "alumne": {
            "name": "Adrian",
            "firstname": "Pradas",
            "lastname": "Muños-Reja",
            "code": "Alumne1",
            "edat": "25"
    }
}

    jQuery.each(institut['alumnes'], function( i, mp){
        $('.datos').first().append('<li><div class="collapsible-header">'+mp['code']+' - '+mp['name']+'</div><div class="collapsible-body"><div class="row"></div></div></li>');
        jQuery.each(mp['ufs'], function(x, uf){
            $('.row').last().append('<div id="uf" class="col s6"><span>'+uf['code']+' - '+uf['name']+'</span></div>');
        })
    });
}
}

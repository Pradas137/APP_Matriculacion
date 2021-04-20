(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs({ "swipeable": true });
  });
})(jQuery)

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    $(document).ready(function(){
        $('.collapsible').collapsible();
        matriculacionInfo();
        user();
    });  
}
function user(){
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
    }
    $.each(alumne['alumnes'], function( i, user){
    $('.user').first().append('<form>'+'<div class="card-panel z-depth-5">'+'<div class="col s6 m12 l12 center">'+' <img src="images/destiny.jpg" alt="" class="responsive-img circle" style="width:200px;"><h1>Dades de Alumne</h1>'+'</div>'+'<div class="">'+'<label style="font-size:15px;">Nom: </label>'+'<span>'+ user['name']+'</span>'+'</div> '+'<div class="">'+'<label style="font-size:15px;">Cognom1: </label>'+'<span>'+user['firstname']+'</span>'+'</div>'+'<div class="">'+'<label style="font-size:15px;">Cognom2 :</label>'+'<span>'+user['lastname']+'</span>'+'</div>'+'<div class="">'+'<label id="edat" style="font-size:15px;">edat: </label>'+'<span>'+user['edat']+'</span>'+'</div>'+'</div>'+'</div>'+'</div>'+'</form>');
});
}

function matriculacionInfo(){
    var institut = {
    "code": "IC01",
    "name": "Desenvolupament d'aplicaciones Webs",
    "hours": "2000",
    "modules": {
        "MP06": {
            "code": "MP06",
            "name": "Desenvolupament web entorn client",
            "hours": "150",
            "ufs": {
                "UF1": {
                    "code": "UF1",
                    "name": "Sintaxis del lenguaje"
                },
                "UF2": {
                    "code": "UF2",
                    "name": "Estructuras definidas por el programador"
                },
                "UF3": {
                    "code": "UF3",
                    "name": "DOM"
                },
                "UF4": {
                    "code": "UF4",
                    "name": "Comunicación asíncrona cliente-servidor"
                }
            }
        },
        "MP07": {
            "code": "MP07",
            "name": "Desenvolupament web en entorn servidor",
            "hours": "200",
            "ufs": {
                "UF1": {
                    "code": "UF1",
                    "name": "Desenvolupament web entorn servidor"
                },
                "UF2": {
                    "code": "UF2",
                    "name": "Generació dinàmica de pàgines web"
                },
                "UF3": {
                    "code": "UF3",
                    "name": "Accés a dades"
                },
                "UF4": {
                    "code": "UF4",
                    "name": "Serveis web"
                }
            }
        },
        "MP08": {
            "code": "MP08",
            "name": "Desplegament d'aplicacions web",
            "hours": "200",
            "ufs": {
                "UF1": {
                    "code": "UF1",
                    "name": "Servidor web i de transferència d'arxius"
                },
                "UF2": {
                    "code": "UF2",
                    "name": "Servidors d'aplicacions"
                },
                "UF3": {
                    "code": "UF3",
                    "name": "Desplegament"
                },
                "UF4": {
                    "code": "UF4",
                    "name": "control de versions i documentació"
                }
            }
        },
        "MP09": {
            "code": "MP09",
            "name": "Disseny d'interfícies Web",
            "hours": "66",
            "ufs": {
                "UF1": {
                    "code": "UF1",
                    "name": "Disseny de la interfície",
                    "horas": "28"
                },
                "UF2": {
                    "code": "UF2",
                    "name": "Elements multimèdia: creació i integració",
                    "horas": "19"
                },
                "UF3": {
                    "code": "UF3",
                    "name": "Accessibilitat i usabilitat web",
                    "horas": "19"
                }
            }
        },
        "DUAL": {
            "code": "DUAL",
            "name": "Apps Híbrides i Javascript entorn servidor",
            "hours": "200",
            "ufs": {
                "UF1": {
                    "code": "UF1",
                    "name": "NodeJS"
                },
                "UF2": {
                    "code": "UF2",
                    "name": "Apps Híbrides amb Cordova"
                }
            }
        },
        "Proyecto": {
            "code": "PR",
            "name": "Credito de Sintesis",
            "hours": "400",
            "ufs": {
                "UF1": {
                    "code": "UF1",
                    "name": "Proyecto"
                }
            }
        }
    }
}
$.each(institut['modules'], function( i, mp){
    var horas = "horas";
    $('.collapsible').first().append('<li><div class="collapsible-header">'+mp['code']+' - '+mp['name']+' ----> '+horas+'('+mp['hours']+')'+'</div><div class="collapsible-body"><div class="row"></div></div></li>');
    $.each(mp['ufs'], function(x, uf){
    $('.row').last().append('<label><div id="uf" class="col s6"><input type="checkbox" class="filled-in case"><span>'+uf['code']+' - '+uf['name']+'</span></div></label>');
    })
});

$(".selectall").on("click", function() {
  $(".case").prop("checked", this.checked);
});

$(".case").on("click", function() {
  if ($(".case").length == $(".case:checked").length) {
    $("#selectall").prop("checked", true);
  } else {
    $(".selectall").prop("checked", false);
  }
});
}

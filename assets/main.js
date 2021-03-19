$(document).ready(function (){
    Snack1();
    Snack2();
    Snack3();

});


function Snack1(){

    let name,peso;
    var myForm_$ = $("form#my_Form");
    var biciclette  = [];
    myForm_$.submit(function( event ) {

        // Variabili


        // Annullamento invio dati (Refresh page)
        event.preventDefault();

        let my_btn_Input_$ = $("form#my_Form > button > input");

        const nameKey1_Bici = 'name';
        const nameKey2_Bici = 'peso';

        const bicicletta = {
            [nameKey1_Bici]: $(my_btn_Input_$).eq(0).val(),
            [nameKey2_Bici]: parseInt($(my_btn_Input_$).eq(1).val()),
        };

        const {name, peso} = bicicletta;
        biciclette.push({name,peso});

        add_Dati(name,peso);

        // Reset valori input
        $(my_btn_Input_$).eq(0).val("");
        $(my_btn_Input_$).eq(1).val("");
    });


    $("#my_Table  button").click( function(){
        var biciPiùLeggera;

        let itemSuccessivo = biciclette[0].peso;
        let indexSuccessivoMin = 0;

        for (var i = 1; i < biciclette.length; i++) {

            if (itemSuccessivo > biciclette[i].peso) {
                itemSuccessivo = biciclette[i].peso;
                indexSuccessivoMin = i;
            }
        }

        $("#tabellaBici").children().hide();

        console.log(biciclette[indexSuccessivoMin].name);
        let itemPiuLeggera = `<tr class="text-success bicicletta border border-success"><td class="nome bg-transparent"><strong>${biciclette[indexSuccessivoMin].name}</strong>
        </td><td><strong>${biciclette[indexSuccessivoMin].peso}</strong></td></tr>`;

        $("#tabellaBici").append(itemPiuLeggera);
        console.log(biciclette);

        setTimeout(function(){
            $("#tabellaBici").children().remove();
            biciclette  = [];
            console.log(biciclette);
        },3000);

    });

    function add_Dati(nome,peso){
        let str = `<tr class="bicicletta text-success border border-dark"><td class="nome"><strong>${nome}</strong>
        </td><td><strong>${peso}</strong></td></tr>`;
        $("#tabellaBici").append(str);
    };
}




function Snack2(){
    // Variabili
    const squadre = [];

    var my_Form_Calcio_$ = $("form#my_Form_Calcio");
    my_Form_Calcio_$.submit(function( event ) {
        // Annullamento invio dati (Refresh page)
        event.preventDefault();

        // Variabili jquery
        let my_btn_Input_$ = $("form#my_Form_Calcio > button > input");

        const nameKey = 'name';
        const nameKey2 = 'punti';
        const nameKey3 = 'falliSubiti';

        const squadra = {
            [nameKey] : $(my_btn_Input_$).val(),
            [nameKey2]: add_Punti(),
            [nameKey3]: add_FalliSubiti(),
        };

        // Reset valori input
        $(my_btn_Input_$).val("");
        console.log(squadra.name);

        squadre.push(squadra);
        console.log(squadre);

        let squadraRowTable;
        $("#my_Table_Calcio  button").click( function(){
            var newArraySquadre = [];
            for (var i = 0; i < squadre.length; i++) {

                const {name,falliSubiti} = squadre[i];
                newArraySquadre.push({name,falliSubiti})

                squadraRowTable += `<tr class="text-success border border-dark border border-success"><td class="nome bg-transparent"><strong>${newArraySquadre[i].name}</strong>
                </td><td><strong>${newArraySquadre[i].falliSubiti}</strong></td></tr>`;
            }

            $("#tabellaSquadre").html(squadraRowTable);

        });

        function add_Punti() {
            return numeriRandom();
        }

        function add_FalliSubiti() {
            return numeriRandom();
        }

        function numeriRandom() {
            var num = Math.floor(Math.random() * 100 + 1);
            return num;
        }
    });

}

function Snack3(){


}

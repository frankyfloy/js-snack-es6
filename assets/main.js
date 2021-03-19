$(document).ready(function (){
    Snack1();
    Snack2();
    Snack3();

});


// Jsnack gatti
function Snack3(){


    const gatti = [];

    var myForm_$ = $("form#my_Form_Gatti");

    myForm_$.submit(function( event ) {

        // Annullamento invio dati (Refresh page)
        event.preventDefault();

        let my_btn_Input_$ = $("form#my_Form_Gatti > button > input");



        const gatto = {
            name: $(my_btn_Input_$).eq(0).val(),
            età: parseInt($(my_btn_Input_$).eq(1).val()),
            colore: $(my_btn_Input_$).eq(2).val(),
            sesso: $(my_btn_Input_$).eq(3).val()
        };

        gatti.push(gatto)

        // Reset valori input
        $(my_btn_Input_$).eq(0).val("");
        $(my_btn_Input_$).eq(1).val("");
        $(my_btn_Input_$).eq(2).val("");
        $(my_btn_Input_$).eq(3).val("");
    });


    $("#my_Table_Gatti button").click( function(){
        console.log(gatti);

        gatti.forEach((element) => {
            console.log(element.name);
            add_Dati(element.name,element.colore)
        });

        const a_gattiM = gatti.filter((element) => {
        return element.sesso === "maschio";
        });

        const a_gattiF = gatti.filter((element) => {
        return element.sesso === "femmina";
        });

        console.log(a_gattiM);
        console.log(a_gattiF);

        // TODO: da finire (Stanco)




        // let itemPiuLeggera = `<tr class="text-success bicicletta border border-success"><td class="nome bg-transparent"><strong>${biciclette[indexSuccessivoMin].name}</strong>
        // </td><td><strong>${biciclette[indexSuccessivoMin].peso}</strong></td></tr>`;

        // $("#tabellaBici").append(itemPiuLeggera);
        // console.log(biciclette);

        // setTimeout(function(){
        //     $("#tabellaBici").children().remove();
        //     biciclette  = [];
        //     console.log(biciclette);
        // },3000);

    });

    function add_Dati(nome,colore){
        let str = `<tr class="text-success border border-dark"><td class="nome"><strong>${nome}</strong>
        </td><td><strong>${colore}</strong></td></tr>`;
        $("#tabellaGatti").append(str);
    };


}




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

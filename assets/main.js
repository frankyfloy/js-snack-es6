$(document).ready(function (){
    Snack1();
    Snack2();

});


function Snack1(){


    let name,peso;


    var myForm_$ = $("form#my_Form");

    myForm_$.submit(function( event ) {

        // Variabili
        var biciclette  = [];
        var biciPiùLeggera;


        // Annullamento invio dati (Refresh page)
        event.preventDefault();

        let my_btn_Input_$ = $("form#my_Form > button > input");

        const nameKey = 'peso';

        const bicicletta = {
            name: $(my_btn_Input_$).eq(0).val(),
            [nameKey]: $(my_btn_Input_$).eq(1).val(),
        };

        const {name, peso} = bicicletta;
        biciclette.push(bicicletta);

        add_Dati(name,peso);

        $("#my_Table  button").click( function(){



            let itemSuccessivo = biciclette[0];
            let indexItemSuccessivo = 0;
            console.log(biciclette);

            for (var i = 1; i < biciclette.length; i++) {

                if (itemSuccessivo.peso <= biciclette[i].peso) {
                    biciPiùLeggera = itemSuccessivo;
                    indexItemSuccessivo = i;

                }else {
                    biciPiùLeggera = biciclette[i];
                    indexItemSuccessivo = i;
                    console.log(biciPiùLeggera);
                    console.log(indexItemSuccessivo);
                }

            }

            console.log(biciclette[indexItemSuccessivo].name);
            // console.log(biciclette[indexItemSuccessivo][peso]);
            $("#tabellaBici").children().hide();

            let itemPiuLeggera = `<tr class="text-success bicicletta border border-success"><td class="nome bg-transparent"><strong>${biciclette[indexItemSuccessivo].name}</strong>
            </td><td><strong>${biciclette[indexItemSuccessivo].peso}</strong></td></tr>`;

            $("#tabellaBici").append(itemPiuLeggera);

        });

        // Reset valori input
        $(my_btn_Input_$).eq(0).val("");
        $(my_btn_Input_$).eq(1).val("");


        function add_Dati(nome,peso){
            let str = `<tr class="bicicletta text-success border border-dark"><td class="nome"><strong>${nome}</strong>
            </td><td><strong>${peso}</strong></td></tr>`;
            $("#tabellaBici").append(str);
        };
    });
}


function Snack2(){

    var my_Form_Calcio_$ = $("form#my_Form_Calcio");
    my_Form_Calcio_$.submit(function( event ) {
        // Annullamento invio dati (Refresh page)
        event.preventDefault();

        // Variabili jquery
        let my_btn_Input_$ = $("form#my_Form_Calcio > button > input");

        // Variabili
        const squadre = [];

        const nameKey = 'name';
        const nameKey2 = 'punti';
        const nameKey3 = 'falliSubiti';

        const squadra = {
            [nameKey] : $(my_btn_Input_$).val(""),
            [nameKey2]: add_Punti(),
            [nameKey3]: add_FalliSubiti(),
        };

        // Reset valori input
        $(my_btn_Input_$).val("");
        console.log(squadra.name);

        squadre.push(squadra);



        $("#my_Table_Calcio  button").click( function(){

            for (var i = 0; i < squadre.length; i++) {

                const tmpSquadra = squadre[i];

                const {name, falliSubiti} = tmpSquadra;
                console.log(name);
                console.log(falliSubiti);
                const [studentOne, studentTwo] = squadre;
                let squadraRowTable = `<tr class="text-success squadra border border-success"><td class="nome bg-transparent"><strong>${name}</strong>
                </td><td><strong>${falliSubiti}</strong></td></tr>`;

                $("#tabellaSquadre").append(squadraRowTable);
            }

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

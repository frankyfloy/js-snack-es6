$(document).ready(function (){
    controller();
});


function controller(){

    // Variabili globali
    var biciclette  = [];
    let name,peso;
    var biciPiùLeggera;

    var myForm_$ = $("form#my_Form");

    myForm_$.submit(function( event ) {
        // Annullamento invio dati (Refresh page)
        event.preventDefault();

        var my_btn_Input_$ = $("form#my_Form > button > input");

        const nameKey = 'peso';

        const bicicletta = {
            name: $(my_btn_Input_$).eq(0).val(),
            [nameKey]: $(my_btn_Input_$).eq(1).val(),
        };

        const {name, peso} = bicicletta;
        biciclette.push(bicicletta);

        add_Dati(name,peso);

        $("#my_Table > button").click( function(){

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

            let itemPiuLeggera = `<tr class="bicicletta bg-white text-color_Blk border border-dark"><td class="nome"><strong>${biciclette[indexItemSuccessivo].name}</strong>
            </td><td><strong>${biciclette[indexItemSuccessivo].peso}</strong></td></tr>`;

            $("#tabellaBici").append(itemPiuLeggera);

        });

        // Reset valori input
        $(my_btn_Input_$).eq(0).val("");
        $(my_btn_Input_$).eq(1).val("");


        function add_Dati(nome,peso){
            let str = `<tr class="bicicletta bg-white text-color_Blk border border-dark"><td class="nome"><strong>${nome}</strong>
            </td><td><strong>${peso}</strong></td></tr>`;
            $("#tabellaBici").append(str);
        };
    });
}

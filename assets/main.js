$(document).ready(function (){
    Snack1();
    Snack2();
    Snack3();

});


// Jsnack gatti -----------------------------------------
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


    $("#contBtn_Print button.first").click( function(){
        $("#contBtn_Print").hide();

        let buttonBack = `<button type="button" class="myBtnController text-uppercase text-light border-success pl-2 mb-2">Back</button></div>`;
        $("#my_Table_Gatti").append(buttonBack);

        // TODO: Risolvere in modo chiaro il reset della tabella e dell' array gatti
        $("#my_Table_Gatti > button").click( function(){
            $("#tabellaGattiHeaderCol").children().remove();
            $("#tabellaGatti").children().remove();
            $("#contBtn_Print").show();
            this.remove();
        });

        let header_Col = `<tr class="bg-black border rounded text-light"><th><strong>Nome</strong></th><th><strong>Colore</strong></th></tr>`;
        $("#tabellaGattiHeaderCol").append(header_Col);

        gatti.forEach((element) => {
            add_Dati(element.name,element.colore)
        });
    });


    $("#contBtn_Print button.last").click( function(){
        $("#contBtn_Print").hide();
        const a_gattiM = gatti.filter((element) => {
        return element.sesso === "maschio";
        });

        const a_gattiF = gatti.filter((element) => {
        return element.sesso === "femmina";
        });

        // Unione dei 2 array maschi/femmine
        const mergedGatti_M_f = [...a_gattiM ,...a_gattiF];

        let buttonBack = `<button type="button" class="myBtnController text-uppercase text-light border-success mb-2">Stampa nome colore e sesso</button></div>`;
        $("#my_Table_Gatti").append(buttonBack);

        // TODO: Risolvere in modo chiaro il reset della tabella e dell' array gatti
        $("#my_Table_Gatti > button").click( function(){
            $("#tabellaGattiHeaderCol").children().remove();
            $("#tabellaGatti").children().remove();
            $("#contBtn_Print").show();
            this.remove();
        });

        let header_Col = `<tr class="bg-black border rounded text-light"><th class=""><strong>Nome</strong></th><th class=""><strong>Colore</strong></th><th class=""><strong>Sesso</strong></th></tr>`;
        $("#tabellaGattiHeaderCol").append(header_Col);

        mergedGatti_M_f.forEach((element) => {

            if (element.sesso === "maschio") {
                let età = element.età
                element.opacityEtà = 0.05 * età;
                add_Dati(element.name,element.colore,element.sesso,element.opacityEtà);
            }else if(element.sesso === "femmina"){
                let età = element.età
                element.opacityEtà = 0.05 * età;
                add_Dati(element.name,element.colore,element.sesso,element.opacityEtà);
            }
        });
    });


    function add_Dati(...myArguments){

        if (myArguments.length === 2) {

            let str = `<tr class="text-success border border-dark"><td class="nome"><strong>${myArguments[0]}</strong>
            </td><td><strong>${myArguments[1]}</strong></td></tr>`;

            $("#tabellaGatti").append(str);

        }else if(myArguments.length === 4){

            if (myArguments[2] == "femmina") {
                let str = `<tr class="bg-black text-danger border border-dark"><td class="nome"><strong>${myArguments[0]}</strong>
                </td><td><strong>${myArguments[1]}</strong></td><td><strong><i class="fas fa-ribbon fa-social fa-2x" style="color:rgba(204, 0, 153,${myArguments[3]} );"></i></strong></td></tr>`;
                $("#tabellaGatti").append(str);
            }else if (myArguments[2] == "maschio") {
                let str = `<tr class="bg-black text-primary border border-dark"><td class="nome"><strong>${myArguments[0]}</strong>
                </td><td><strong>${myArguments[1]}</strong></td><td><strong><i class="fas fa-ribbon fa-social fa-2x" style="color:rgba(51, 51, 204,${myArguments[3]} );"></i></strong></td></tr>`;
                $("#tabellaGatti").append(str);

            }
        }
    };
}

// ------------------ fine jsnack gatti



function Snack1(){

    let name,peso;
    var myForm_$ = $("form#my_Form");
    var biciclette  = [];

    myForm_$.submit(function( event ) {
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

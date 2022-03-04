window.onload = function() {
    datasetCustom();
}

//Abrir link - Comercial
function c1() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=ClientePatrocinador',"_self");
};
function c2() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=ProdutosServi%C3%A7o',"_self");
};
function c3() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=Cadastro_Master',"_self");
};
function c4() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=cronograma_estudo',"_self");
};

//Abrir link - Amostra
function a1() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=cadastro_amostra',"_self");
};
function a2() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=movimenta%C3%A7%C3%A3o_amostra',"_self");
};

//Abrir link - Financeiro
function f1() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=Contas%20a%20Pagar',"_self");
};
function f2() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=cadastro_fornecedor',"_self");
};

//Abrir link - Recrutamento
function r1() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/page_cadastro_participante',"_self");
};
function r2() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/relatorio_participantes',"_self");
};

//Abrir link - Suporte
function s1() {
    window.open('https://medcininstituto120196.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?processID=TI_Medcin',"_self");
};

function datasetCustom() {
    var dataset_custom = DatasetFactory.getDataset("credenciais", null, null, null);
    var user = dataset_custom.values[0].USER;

    var c1 = DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST);
    var constraint = new Array(c1);
    var dataset = DatasetFactory.getDataset("colleagueGroup", null, constraint, null);
    
    var nRow = dataset.values.length;

    for (var i = 0; i < nRow; i++) {

        var group = dataset.values[i]["colleagueGroupPK.groupId"];

        if (group == 'Comercial') {
            $('#comercial').removeClass();
        }
        if (group == 'Amostra') {
            $('#amostra').removeClass();
        }
        if (group == 'Financeiro') {
            $('#financeiro').removeClass();
        }
        if (group == 'Recrutamento') {
            $('#recrutamento').removeClass();
        }
        if (group == 'Suporte TI') {
            $('#suporte').removeClass();
        }

    }
    
}

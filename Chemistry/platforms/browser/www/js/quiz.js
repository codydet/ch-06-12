var myApp = new Framework7();

var $$ = Dom7;

var icon=[];
var reCo =["n3","n2","n2","n2","n2","n2","n2","n2","n2","n2"];
var reUs =["n2","n1","n1","n1","n1","n1","n1","n1","n1","n1"];
var q1q1 ="A Tabela abaixo apresenta o mol, em gramas, de várias substâncias:<br><table border='1'><tr><td>Substância	</td><td>HCl</td><td>O<sub>3</sub></td><td>C<sub>5</sub>H<sub>12</sub></td><td>H<sub>2</sub>O</td></tr><tr><td>Massa Molar (g/mol)</td><td>36,5</td><td>48,0</td><td>72,0</td><td>18,0</td></tr></table><br>Comparando massas iguais dessas substâncias, a que apresenta maior número de moléculas é";
//Questão-Respsota Correta-Explicação
var quequiz1 = [
  {que:q1q1,corr:'H&#x2082;O',exp:'A água apresenta a menor massa molar 18 g/mol, logo considerando massas iguais (em gramas) para as substâncias, a água apresentará o maior número de moléculas.'},
  {que:'',corr:'',exp:''},
  {que:'',corr:'',exp:''},
  {que:'',corr:'',exp:''},
  {que:'',corr:'',exp:''},
  {que:'',corr:'',exp:''},
  {que:'',corr:'',exp:''},
  {que:'',corr:'',exp:''},
  {que:'',corr:'',exp:''},
  {que:'',corr:'',exp:''}
];
function altq(sel)
  {
    reUs[sel.id-1]=sel.options[sel.selectedIndex].value;
  }

function stage1(){
  var txttemp;
  var ace=0;
  for(i=0;i<10;i++){
    if (reUs[i]==reCo[i]){
      ace=ace+1;
      txttemp='<a href="" id="'+i+'" onclick="popovercorr(this.id,this)"><img src="img/ot/corr.png" width=25></a>';
    }else{
      txttemp='<a href="" id="'+i+'" onclick="popovercorr(this.id,this)"><img src="img/ot/wron.png" width=25></a>';
    }
    icon[i] = txttemp;
  }
  var por=(ace/10)*100;
  popupcorr(por);
}

function limpar(){
  reUs =["n2","n1","n1","n1","n1","n1","n1","n1","n1","n1"];
}

function modalstage1(opc){
  myApp.alert('Você acertou '+opc+'%','Porcentagem de acerto');
}

function setpor(quiz,por){
  txt = quiz +" "+ por+"% de acerto ";
  document.getElementById(quiz).innerHTML=txt;
}


function popovercorr(id,od){
  var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p>Questão: '+quequiz1[id].que+'</p>'+
                          '<p>Resposta Correta: '+quequiz1[id].corr+'</p>'+
                          '<p>Explicação: '+quequiz1[id].exp+'</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>'
  myApp.popover(popoverHTML, od);
}

function popupcorr(porc){
  var popupHTML = '<div class="popup">'+
    '<div class="content-block">'+
      '<center><div style="font-family:serif; font-size:150%; line-height:1.6;">Porcentagem de Acertos '+porc+'%</div>'+
      '<table class="tablevisu">'+
        '<tr>'+
          '<td class="tablevisu">Questão 01: '+icon[0]+'</td>'+
          '<td class="tablevisu">Questão 02: '+icon[1]+'</td>'+
        '</tr>'+
        '<tr>'+
          '<td class="tablevisu">Questão 03: '+icon[2]+'</td>'+
          '<td class="tablevisu">Questão 04: '+icon[3]+'</td>'+
        '</tr>'+
        '<tr>'+
          '<td class="tablevisu">Questão 05: '+icon[4]+'</td>'+
          '<td class="tablevisu">Questão 06: '+icon[5]+'</td>'+
        '</tr>'+
        '<tr>'+
          '<td class="tablevisu">Questão 07: '+icon[6]+'</td>'+
          '<td class="tablevisu">Questão 08: '+icon[7]+'</td>'+
        '</tr>'+
        '<tr>'+
          '<td class="tablevisu">Questão 09: '+icon[8]+'</td>'+
          '<td class="tablevisu">Questão 10: '+icon[9]+'</td>'+
        '</tr>'+
      '</table></center>'+
      '<center><a href="#" onclick="limpar()" class="close-popup button button-fill color-red">Fechar</a> Clique no icone para mais informações</center>'+
  '  </div>'+
  '</div>'
  myApp.popup(popupHTML);
}

function qui1que1 () {
  var popupHTML = '<div class="popup">'+
                    '<div class="content-block">'+
                      '<select id=1 name="q1" onchange="altq(this)">'+
                        '<option name="n1" value="n1">Numero 1</option>'+
                        '<option name="n2" value="n2">Numero 2</option>'+
                        '<option name="n3" value="n3">Numero 3</option>'+
                        '<option name="n4" value="n4">Numero 4</option>'+
                      '</select>'+
                      '<div class="item-content">'+
                        '<div class="item-inner">'+
                          '<div class="item-title">Questão 01</div>'+
                          '<div class="item-after smart-select-value"></div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'
  myApp.popup(popupHTML);
}

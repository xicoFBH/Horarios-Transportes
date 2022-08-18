// ANO E VERSÃO

var ano = new Date().getFullYear();
var versao = "v2.1.1";

// FUNÇÃO PARA MOSTRAR HORÁRIO

function mostrarHorario (horarioAMostrar)
{
  if (horarioAMostrar == "metroMondegoIda")
  {
    document.getElementsByClassName("botaoHorario")[0].style.border = "3px solid black";
    /*
    document.getElementsByClassName("botaoHorario")[1].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[2].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[3].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[4].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[5].style.border = "2px solid black";
    */

    for (i = 0; i <= 5; i++)
    {
      if (i === 0) { continue; }
      document.getElementsByClassName("botaoHorario")[i].style.border = "2px solid black";
    }

    /*!!!!!!!!!!!!!!!!!!!!
    TABELA 1 SEGUNDA A SEXTA
    !!!!!!!!!!!!!!!!!!!!*/

    /*
    titulo1 = document.createElement("h3");
    titulo1.innerHTML = "Segunda a Sexta";
    document.getElementById("conteudo").appendChild(titulo1);

    tabela1 = document.createElement("table");
    tabela1.id = "tabela1";
    document.getElementById("conteudo").appendChild(tabela1);

    headers = document.createElement("tr");
    headers.innerHTML = "<th>Lousã</th><th>São José</th><th>Portagem</th><th>Tipo</th>";
    document.getElementById("tabela1").appendChild(headers);
    */
    //document.getElementsByTagName("table")[0].appendChild(headers);

    /*
    for (i = 0; i < metroMondegoIda.length; i++)
    {
      linha = document.createElement("tr");
      linha.id = "linha"+i;
      document.getElementsByTagName("table")[0].appendChild(linha);
      for (j = 0; j < metroMondegoIda[i].length; j++)
      {
        dados =  document.createElement("td");
        dados.innerHTML = metroMondegoIda[i][j];
        document.getElementById("linha"+i).appendChild(dados);
      }
    }
    */

    /*!!!!!!!!!!!!!!!!!!!!
    TABELA 2 SÁBADO
    !!!!!!!!!!!!!!!!!!!!*/

    /*
    titulo2 = document.createElement("h3");
    titulo2.innerHTML = "Sábado";
    document.getElementById("conteudo").appendChild(titulo2);

    tabela2 = document.createElement("table");
    tabela2.id = "tabela2";
    document.getElementById("conteudo").appendChild(tabela2);

    headers = document.createElement("tr");
    headers.innerHTML = "<th>Lousã</th><th>São José</th><th>Portagem</th><th>Tipo</th>";
    document.getElementById("tabela2").appendChild(headers);
    //document.getElementsByTagName("table")[0].appendChild(headers);
    
    for (i = 0; i < metroMondegoIdaSabado.length; i++)
    {
      linha2 = document.createElement("tr");
      linha2.id = "linha2_"+i;
      document.getElementById("tabela2").appendChild(linha2);
      for (j = 0; j < metroMondegoIdaSabado[i].length; j++)
      {
        dados =  document.createElement("td");
        dados.innerHTML = metroMondegoIdaSabado[i][j];
        document.getElementById("linha2_"+i).appendChild(dados);
      }
    }
    */
    
    document.getElementById("conteudo").innerHTML = 
      "<h3>Segunda a Sexta</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Serpins</th><th>Lousã</th><th>São José</th><th>Portagem</th><th>Tipo</th>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[0]+"</td><td>"+metroMondegoIda[0][0]+"</td><td>"+metroMondegoIda[0][1]+"</td><td>"+metroMondegoIda[0][2]+"</td><td>"+metroMondegoIda[0][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[1]+"</td><td>"+metroMondegoIda[1][0]+"</td><td>"+metroMondegoIda[1][1]+"</td><td>"+metroMondegoIda[1][2]+"</td><td>"+metroMondegoIda[1][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[2]+"</td><td>"+metroMondegoIda[2][0]+"</td><td>"+metroMondegoIda[2][1]+"</td><td>"+metroMondegoIda[2][2]+"</td><td>"+metroMondegoIda[2][3]+"</td>"+
      "</tr>"+ 
      "<tr class='comRestricao'>"+
      "<td>"+metroMondegoIdaSerpins[3]+"</td><td>"+metroMondegoIda[3][0]+"</td><td>"+metroMondegoIda[3][1]+"</td><td>"+metroMondegoIda[3][2]+"</td><td>"+metroMondegoIda[3][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[4]+"</td><td>"+metroMondegoIda[4][0]+"</td><td>"+metroMondegoIda[4][1]+"</td><td>"+metroMondegoIda[4][2]+"</td><td>"+metroMondegoIda[4][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[5]+"</td><td>"+metroMondegoIda[5][0]+"</td><td>"+metroMondegoIda[5][1]+"</td><td>"+metroMondegoIda[5][2]+"</td><td>"+metroMondegoIda[5][3]+"</td>"+
      "</tr>"+
      "<tr class='comRestricao'>"+
      "<td>"+metroMondegoIdaSerpins[6]+"</td><td>"+metroMondegoIda[6][0]+"</td><td>"+metroMondegoIda[6][1]+"</td><td>"+metroMondegoIda[6][2]+"</td><td>"+metroMondegoIda[6][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[7]+"</td><td>"+metroMondegoIda[7][0]+"</td><td>"+metroMondegoIda[7][1]+"</td><td>"+metroMondegoIda[7][2]+"</td><td>"+metroMondegoIda[7][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[8]+"</td><td>"+metroMondegoIda[8][0]+"</td><td>"+metroMondegoIda[8][1]+"</td><td>"+metroMondegoIda[8][2]+"</td><td>"+metroMondegoIda[8][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[9]+"</td><td>"+metroMondegoIda[9][0]+"</td><td>"+metroMondegoIda[9][1]+"</td><td>"+metroMondegoIda[9][2]+"</td><td>"+metroMondegoIda[9][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[10]+"</td><td>"+metroMondegoIda[10][0]+"</td><td>"+metroMondegoIda[10][1]+"</td><td>"+metroMondegoIda[10][2]+"</td><td>"+metroMondegoIda[10][3]+"</td>"+
      "</tr>"+
      "<tr class='comRestricao'>"+
      "<td>"+metroMondegoIdaSerpins[11]+"</td><td>"+metroMondegoIda[11][0]+"</td><td>"+metroMondegoIda[11][1]+"</td><td>"+metroMondegoIda[11][2]+"</td><td>"+metroMondegoIda[11][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[12]+"</td><td>"+metroMondegoIda[12][0]+"</td><td>"+metroMondegoIda[12][1]+"</td><td>"+metroMondegoIda[12][2]+"</td><td>"+metroMondegoIda[12][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[13]+"</td><td>"+metroMondegoIda[13][0]+"</td><td>"+metroMondegoIda[13][1]+"</td><td>"+metroMondegoIda[13][2]+"</td><td>"+metroMondegoIda[13][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[14]+"</td><td>"+metroMondegoIda[14][0]+"</td><td>"+metroMondegoIda[14][1]+"</td><td>"+metroMondegoIda[14][2]+"</td><td>"+metroMondegoIda[14][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[15]+"</td><td>"+metroMondegoIda[15][0]+"</td><td>"+metroMondegoIda[15][1]+"</td><td>"+metroMondegoIda[15][2]+"</td><td>"+metroMondegoIda[15][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[16]+"</td><td>"+metroMondegoIda[16][0]+"</td><td>"+metroMondegoIda[16][1]+"</td><td>"+metroMondegoIda[16][2]+"</td><td>"+metroMondegoIda[16][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[17]+"</td><td>"+metroMondegoIda[17][0]+"</td><td>"+metroMondegoIda[17][1]+"</td><td>"+metroMondegoIda[17][2]+"</td><td>"+metroMondegoIda[17][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[18]+"</td><td>"+metroMondegoIda[18][0]+"</td><td>"+metroMondegoIda[18][1]+"</td><td>"+metroMondegoIda[18][2]+"</td><td>"+metroMondegoIda[18][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[19]+"</td><td>"+metroMondegoIda[19][0]+"</td><td>"+metroMondegoIda[19][1]+"</td><td>"+metroMondegoIda[19][2]+"</td><td>"+metroMondegoIda[19][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[20]+"</td><td>"+metroMondegoIda[20][0]+"</td><td>"+metroMondegoIda[20][1]+"</td><td>"+metroMondegoIda[20][2]+"</td><td>"+metroMondegoIda[20][3]+"</td>"+
      "</tr>"+
      "<tr class='comRestricao'>"+
      "<td>"+metroMondegoIdaSerpins[21]+"</td><td>"+metroMondegoIda[21][0]+"</td><td>"+metroMondegoIda[21][1]+"</td><td>"+metroMondegoIda[21][2]+"</td><td>"+metroMondegoIda[21][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[22]+"</td><td>"+metroMondegoIda[22][0]+"</td><td>"+metroMondegoIda[22][1]+"</td><td>"+metroMondegoIda[22][2]+"</td><td>"+metroMondegoIda[22][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[23]+"</td><td>"+metroMondegoIda[23][0]+"</td><td>"+metroMondegoIda[23][1]+"</td><td>"+metroMondegoIda[23][2]+"</td><td>"+metroMondegoIda[23][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[24]+"</td><td>"+metroMondegoIda[24][0]+"</td><td>"+metroMondegoIda[24][1]+"</td><td>"+metroMondegoIda[24][2]+"</td><td>"+metroMondegoIda[24][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[25]+"</td><td>"+metroMondegoIda[25][0]+"</td><td>"+metroMondegoIda[25][1]+"</td><td>"+metroMondegoIda[25][2]+"</td><td>"+metroMondegoIda[25][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[26]+"</td><td>"+metroMondegoIda[26][0]+"</td><td>"+metroMondegoIda[26][1]+"</td><td>"+metroMondegoIda[26][2]+"</td><td>"+metroMondegoIda[26][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[27]+"</td><td>"+metroMondegoIda[27][0]+"</td><td>"+metroMondegoIda[27][1]+"</td><td>"+metroMondegoIda[27][2]+"</td><td>"+metroMondegoIda[27][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[28]+"</td><td>"+metroMondegoIda[28][0]+"</td><td>"+metroMondegoIda[28][1]+"</td><td>"+metroMondegoIda[28][2]+"</td><td>"+metroMondegoIda[28][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[29]+"</td><td>"+metroMondegoIda[29][0]+"</td><td>"+metroMondegoIda[29][1]+"</td><td>"+metroMondegoIda[29][2]+"</td><td>"+metroMondegoIda[29][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[30]+"</td><td>"+metroMondegoIda[30][0]+"</td><td>"+metroMondegoIda[30][1]+"</td><td>"+metroMondegoIda[30][2]+"</td><td>"+metroMondegoIda[30][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[31]+"</td><td>"+metroMondegoIda[31][0]+"</td><td>"+metroMondegoIda[31][1]+"</td><td>"+metroMondegoIda[31][2]+"</td><td>"+metroMondegoIda[31][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSerpins[32]+"</td><td>"+metroMondegoIda[32][0]+"</td><td>"+metroMondegoIda[32][1]+"</td><td>"+metroMondegoIda[32][2]+"</td><td>"+metroMondegoIda[32][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[33]+"</td><td>"+metroMondegoIda[33][0]+"</td><td>"+metroMondegoIda[33][1]+"</td><td>"+metroMondegoIda[33][2]+"</td><td>"+metroMondegoIda[33][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[34]+"</td><td>"+metroMondegoIda[34][0]+"</td><td>"+metroMondegoIda[34][1]+"</td><td>"+metroMondegoIda[34][2]+"</td><td>"+metroMondegoIda[34][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[35]+"</td><td>"+metroMondegoIda[35][0]+"</td><td>"+metroMondegoIda[35][1]+"</td><td>"+metroMondegoIda[35][2]+"</td><td>"+metroMondegoIda[35][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[36]+"</td><td>"+metroMondegoIda[36][0]+"</td><td>"+metroMondegoIda[36][1]+"</td><td>"+metroMondegoIda[36][2]+"</td><td>"+metroMondegoIda[36][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSerpins[37]+"</td><td>"+metroMondegoIda[37][0]+"</td><td>"+metroMondegoIda[37][1]+"</td><td>"+metroMondegoIda[37][2]+"</td><td>"+metroMondegoIda[37][3]+"</td>"+
      "</tr>"+ 
      "</table>"+
      
      "<h3>Sábado</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Serpins</th><th>Lousã</th><th>São José</th><th>Portagem</th><th>Tipo</th>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[0]+"</td><td>"+metroMondegoIdaSabado[0][0]+"</td><td>"+metroMondegoIdaSabado[0][1]+"</td><td>"+metroMondegoIdaSabado[0][2]+"</td><td>"+metroMondegoIdaSabado[0][3]+"</td>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[1]+"</td><td>"+metroMondegoIdaSabado[1][0]+"</td><td>"+metroMondegoIdaSabado[1][1]+"</td><td>"+metroMondegoIdaSabado[1][2]+"</td><td>"+metroMondegoIdaSabado[1][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[2]+"</td><td>"+metroMondegoIdaSabado[2][0]+"</td><td>"+metroMondegoIdaSabado[2][1]+"</td><td>"+metroMondegoIdaSabado[2][2]+"</td><td>"+metroMondegoIdaSabado[2][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSabadoSerpins[3]+"</td><td>"+metroMondegoIdaSabado[3][0]+"</td><td>"+metroMondegoIdaSabado[3][1]+"</td><td>"+metroMondegoIdaSabado[3][2]+"</td><td>"+metroMondegoIdaSabado[3][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[4]+"</td><td>"+metroMondegoIdaSabado[4][0]+"</td><td>"+metroMondegoIdaSabado[4][1]+"</td><td>"+metroMondegoIdaSabado[4][2]+"</td><td>"+metroMondegoIdaSabado[4][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSabadoSerpins[5]+"</td><td>"+metroMondegoIdaSabado[5][0]+"</td><td>"+metroMondegoIdaSabado[5][1]+"</td><td>"+metroMondegoIdaSabado[5][2]+"</td><td>"+metroMondegoIdaSabado[5][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[6]+"</td><td>"+metroMondegoIdaSabado[6][0]+"</td><td>"+metroMondegoIdaSabado[6][1]+"</td><td>"+metroMondegoIdaSabado[6][2]+"</td><td>"+metroMondegoIdaSabado[6][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[7]+"</td><td>"+metroMondegoIdaSabado[7][0]+"</td><td>"+metroMondegoIdaSabado[7][1]+"</td><td>"+metroMondegoIdaSabado[7][2]+"</td><td>"+metroMondegoIdaSabado[7][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoIdaSabadoSerpins[8]+"</td><td>"+metroMondegoIdaSabado[8][0]+"</td><td>"+metroMondegoIdaSabado[8][1]+"</td><td>"+metroMondegoIdaSabado[8][2]+"</td><td>"+metroMondegoIdaSabado[8][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[9]+"</td><td>"+metroMondegoIdaSabado[9][0]+"</td><td>"+metroMondegoIdaSabado[9][1]+"</td><td>"+metroMondegoIdaSabado[9][2]+"</td><td>"+metroMondegoIdaSabado[9][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[10]+"</td><td>"+metroMondegoIdaSabado[10][0]+"</td><td>"+metroMondegoIdaSabado[10][1]+"</td><td>"+metroMondegoIdaSabado[10][2]+"</td><td>"+metroMondegoIdaSabado[10][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[11]+"</td><td>"+metroMondegoIdaSabado[11][0]+"</td><td>"+metroMondegoIdaSabado[11][1]+"</td><td>"+metroMondegoIdaSabado[11][2]+"</td><td>"+metroMondegoIdaSabado[11][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[12]+"</td><td>"+metroMondegoIdaSabado[12][0]+"</td><td>"+metroMondegoIdaSabado[12][1]+"</td><td>"+metroMondegoIdaSabado[12][2]+"</td><td>"+metroMondegoIdaSabado[12][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[13]+"</td><td>"+metroMondegoIdaSabado[13][0]+"</td><td>"+metroMondegoIdaSabado[13][1]+"</td><td>"+metroMondegoIdaSabado[13][2]+"</td><td>"+metroMondegoIdaSabado[13][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[14]+"</td><td>"+metroMondegoIdaSabado[14][0]+"</td><td>"+metroMondegoIdaSabado[14][1]+"</td><td>"+metroMondegoIdaSabado[14][2]+"</td><td>"+metroMondegoIdaSabado[14][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[15]+"</td><td>"+metroMondegoIdaSabado[15][0]+"</td><td>"+metroMondegoIdaSabado[15][1]+"</td><td>"+metroMondegoIdaSabado[15][2]+"</td><td>"+metroMondegoIdaSabado[15][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[16]+"</td><td>"+metroMondegoIdaSabado[16][0]+"</td><td>"+metroMondegoIdaSabado[16][1]+"</td><td>"+metroMondegoIdaSabado[16][2]+"</td><td>"+metroMondegoIdaSabado[16][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[17]+"</td><td>"+metroMondegoIdaSabado[17][0]+"</td><td>"+metroMondegoIdaSabado[17][1]+"</td><td>"+metroMondegoIdaSabado[17][2]+"</td><td>"+metroMondegoIdaSabado[17][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaSabadoSerpins[18]+"</td><td>"+metroMondegoIdaSabado[18][0]+"</td><td>"+metroMondegoIdaSabado[18][1]+"</td><td>"+metroMondegoIdaSabado[18][2]+"</td><td>"+metroMondegoIdaSabado[18][3]+"</td>"+
      "</tr>"+ 
      "</table>"+

      "<h3>Domingo e Feriado</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Serpins</th><th>Lousã</th><th>São José</th><th>Portagem</th><th>Tipo</th>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[0][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[0][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[0][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[0][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[0][4]+"</td>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[1][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[1][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[1][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[1][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[1][4]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[2][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[2][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[2][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[2][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[2][4]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[3][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[3][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[3][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[3][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[3][4]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[4][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[4][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[4][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[4][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[4][4]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[5][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[5][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[5][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[5][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[5][4]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[6][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[6][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[6][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[6][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[6][4]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[7][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[7][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[7][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[7][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[7][4]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[8][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[8][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[8][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[8][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[8][4]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[9][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[9][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[9][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[9][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[9][4]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriado[10][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[10][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[10][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[10][3]+"</td><td>"+metroMondegoIdaDomingoFeriado[10][4]+"</td>"+
      "</tr>"+
      "</table>"+

      "<h3>Tarifário</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Partida</th><th>Chegada</th><th>Bilhete</th><th>Passe</th>"+
      "</tr>"+
      "<tr>"+
      "<td>Lousã</td><td>São José</td><td>2,80€</td><td>47,25€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Lousã</td><td>Portagem</td><td>3,00€</td><td>49,80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Serpins</td><td>Lousã</td><td>1,45€</td><td>24,45€</td>"+
      "</tr>"+
      "</table>"+
      
      "<h4>&copy;"+ano+" - Estúdio Esquimó - "+versao+"</h4>"
    ;
    
  }
  else if (horarioAMostrar == "metroMondegoVolta")
  {
    document.getElementsByClassName("botaoHorario")[0].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[1].style.border = "3px solid black";
    document.getElementsByClassName("botaoHorario")[2].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[3].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[4].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[5].style.border = "2px solid black";
    document.getElementById("conteudo").innerHTML = 
      "<h3>Segunda a Sexta</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Portagem</th><th>São José</th><th>Lousã</th><th>Serpins</th><th>Tipo</th>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoVolta[0][0]+"</td><td>"+metroMondegoVolta[0][1]+"</td><td>"+metroMondegoVolta[0][2]+"</td><td>"+metroMondegoVoltaSerpins[0]+"</td><td>"+metroMondegoVolta[0][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[1][0]+"</td><td>"+metroMondegoVolta[1][1]+"</td><td>"+metroMondegoVolta[1][2]+"</td><td>"+metroMondegoVoltaSerpins[1]+"</td><td>"+metroMondegoVolta[1][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[2][0]+"</td><td>"+metroMondegoVolta[2][1]+"</td><td>"+metroMondegoVolta[2][2]+"</td><td>"+metroMondegoVoltaSerpins[2]+"</td><td>"+metroMondegoVolta[2][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[3][0]+"</td><td>"+metroMondegoVolta[3][1]+"</td><td>"+metroMondegoVolta[3][2]+"</td><td>"+metroMondegoVoltaSerpins[3]+"</td><td>"+metroMondegoVolta[3][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[4][0]+"</td><td>"+metroMondegoVolta[4][1]+"</td><td>"+metroMondegoVolta[4][2]+"</td><td>"+metroMondegoVoltaSerpins[4]+"</td><td>"+metroMondegoVolta[4][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[5][0]+"</td><td>"+metroMondegoVolta[5][1]+"</td><td>"+metroMondegoVolta[5][2]+"</td><td>"+metroMondegoVoltaSerpins[5]+"</td><td>"+metroMondegoVolta[5][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[6][0]+"</td><td>"+metroMondegoVolta[6][1]+"</td><td>"+metroMondegoVolta[6][2]+"</td><td>"+metroMondegoVoltaSerpins[6]+"</td><td>"+metroMondegoVolta[6][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[7][0]+"</td><td>"+metroMondegoVolta[7][1]+"</td><td>"+metroMondegoVolta[7][2]+"</td><td>"+metroMondegoVoltaSerpins[7]+"</td><td>"+metroMondegoVolta[7][3]+"</td>"+
      "</tr>"+
      "<tr class='comRestricao'>"+
      "<td>"+metroMondegoVolta[8][0]+"</td><td>"+metroMondegoVolta[8][1]+"</td><td>"+metroMondegoVolta[8][2]+"</td><td>"+metroMondegoVoltaSerpins[8]+"</td><td>"+metroMondegoVolta[8][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[9][0]+"</td><td>"+metroMondegoVolta[9][1]+"</td><td>"+metroMondegoVolta[9][2]+"</td><td>"+metroMondegoVoltaSerpins[9]+"</td><td>"+metroMondegoVolta[9][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[10][0]+"</td><td>"+metroMondegoVolta[10][1]+"</td><td>"+metroMondegoVolta[10][2]+"</td><td>"+metroMondegoVoltaSerpins[10]+"</td><td>"+metroMondegoVolta[10][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[11][0]+"</td><td>"+metroMondegoVolta[11][1]+"</td><td>"+metroMondegoVolta[11][2]+"</td><td>"+metroMondegoVoltaSerpins[11]+"</td><td>"+metroMondegoVolta[11][3]+"</td>"+
      "</tr>"+
      "<tr class='comRestricao'>"+
      "<td>"+metroMondegoVolta[12][0]+"</td><td>"+metroMondegoVolta[12][1]+"</td><td>"+metroMondegoVolta[12][2]+"</td><td>"+metroMondegoVoltaSerpins[12]+"</td><td>"+metroMondegoVolta[12][3]+"</td>"+
      "</tr>"+
      "<tr class='comRestricao'>"+
      "<td>"+metroMondegoVolta[13][0]+"</td><td>"+metroMondegoVolta[13][1]+"</td><td>"+metroMondegoVolta[13][2]+"</td><td>"+metroMondegoVoltaSerpins[13]+"</td><td>"+metroMondegoVolta[13][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[14][0]+"</td><td>"+metroMondegoVolta[14][1]+"</td><td>"+metroMondegoVolta[14][2]+"</td><td>"+metroMondegoVoltaSerpins[14]+"</td><td>"+metroMondegoVolta[14][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[15][0]+"</td><td>"+metroMondegoVolta[15][1]+"</td><td>"+metroMondegoVolta[15][2]+"</td><td>"+metroMondegoVoltaSerpins[15]+"</td><td>"+metroMondegoVolta[15][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[16][0]+"</td><td>"+metroMondegoVolta[16][1]+"</td><td>"+metroMondegoVolta[16][2]+"</td><td>"+metroMondegoVoltaSerpins[16]+"</td><td>"+metroMondegoVolta[16][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[17][0]+"</td><td>"+metroMondegoVolta[17][1]+"</td><td>"+metroMondegoVolta[17][2]+"</td><td>"+metroMondegoVoltaSerpins[17]+"</td><td>"+metroMondegoVolta[17][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[18][0]+"</td><td>"+metroMondegoVolta[18][1]+"</td><td>"+metroMondegoVolta[18][2]+"</td><td>"+metroMondegoVoltaSerpins[18]+"</td><td>"+metroMondegoVolta[18][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[19][0]+"</td><td>"+metroMondegoVolta[19][1]+"</td><td>"+metroMondegoVolta[19][2]+"</td><td>"+metroMondegoVoltaSerpins[19]+"</td><td>"+metroMondegoVolta[19][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[20][0]+"</td><td>"+metroMondegoVolta[20][1]+"</td><td>"+metroMondegoVolta[20][2]+"</td><td>"+metroMondegoVoltaSerpins[20]+"</td><td>"+metroMondegoVolta[20][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[21][0]+"</td><td>"+metroMondegoVolta[21][1]+"</td><td>"+metroMondegoVolta[21][2]+"</td><td>"+metroMondegoVoltaSerpins[21]+"</td><td>"+metroMondegoVolta[21][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[22][0]+"</td><td>"+metroMondegoVolta[22][1]+"</td><td>"+metroMondegoVolta[22][2]+"</td><td>"+metroMondegoVoltaSerpins[22]+"</td><td>"+metroMondegoVolta[22][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[23][0]+"</td><td>"+metroMondegoVolta[23][1]+"</td><td>"+metroMondegoVolta[23][2]+"</td><td>"+metroMondegoVoltaSerpins[23]+"</td><td>"+metroMondegoVolta[23][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[24][0]+"</td><td>"+metroMondegoVolta[24][1]+"</td><td>"+metroMondegoVolta[24][2]+"</td><td>"+metroMondegoVoltaSerpins[24]+"</td><td>"+metroMondegoVolta[24][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[25][0]+"</td><td>"+metroMondegoVolta[25][1]+"</td><td>"+metroMondegoVolta[25][2]+"</td><td>"+metroMondegoVoltaSerpins[25]+"</td><td>"+metroMondegoVolta[25][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[26][0]+"</td><td>"+metroMondegoVolta[26][1]+"</td><td>"+metroMondegoVolta[26][2]+"</td><td>"+metroMondegoVoltaSerpins[26]+"</td><td>"+metroMondegoVolta[26][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[27][0]+"</td><td>"+metroMondegoVolta[27][1]+"</td><td>"+metroMondegoVolta[27][2]+"</td><td>"+metroMondegoVoltaSerpins[27]+"</td><td>"+metroMondegoVolta[27][3]+"</td>"+
      "</tr>"+
      "<tr >"+
      "<td>"+metroMondegoVolta[28][0]+"</td><td>"+metroMondegoVolta[28][1]+"</td><td>"+metroMondegoVolta[28][2]+"</td><td>"+metroMondegoVoltaSerpins[28]+"</td><td>"+metroMondegoVolta[28][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[29][0]+"</td><td>"+metroMondegoVolta[29][1]+"</td><td>"+metroMondegoVolta[29][2]+"</td><td>"+metroMondegoVoltaSerpins[29]+"</td><td>"+metroMondegoVolta[29][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[30][0]+"</td><td>"+metroMondegoVolta[30][1]+"</td><td>"+metroMondegoVolta[30][2]+"</td><td>"+metroMondegoVoltaSerpins[30]+"</td><td>"+metroMondegoVolta[30][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVolta[31][0]+"</td><td>"+metroMondegoVolta[31][1]+"</td><td>"+metroMondegoVolta[31][2]+"</td><td>"+metroMondegoVoltaSerpins[31]+"</td><td>"+metroMondegoVolta[31][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[32][0]+"</td><td>"+metroMondegoVolta[32][1]+"</td><td>"+metroMondegoVolta[32][2]+"</td><td>"+metroMondegoVoltaSerpins[32]+"</td><td>"+metroMondegoVolta[32][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[33][0]+"</td><td>"+metroMondegoVolta[33][1]+"</td><td>"+metroMondegoVolta[33][2]+"</td><td>"+metroMondegoVoltaSerpins[33]+"</td><td>"+metroMondegoVolta[33][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVolta[34][0]+"</td><td>"+metroMondegoVolta[34][1]+"</td><td>"+metroMondegoVolta[34][2]+"</td><td>"+metroMondegoVoltaSerpins[34]+"</td><td>"+metroMondegoVolta[34][3]+"</td>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoVolta[35][0]+"</td><td>"+metroMondegoVolta[35][1]+"</td><td>"+metroMondegoVolta[35][2]+"</td><td>"+metroMondegoVoltaSerpins[35]+"</td><td>"+metroMondegoVolta[35][3]+"</td>"+
      "</tr>"+
      "</table>"+

      "<h3>Sábado</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Portagem</th><th>São José</th><th>Lousã</th><th>Serpins</th><th>Tipo</th>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[0][0]+"</td><td>"+metroMondegoVoltaSabado[0][1]+"</td><td>"+metroMondegoVoltaSabado[0][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[0]+"</td><td>"+metroMondegoVoltaSabado[0][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[1][0]+"</td><td>"+metroMondegoVoltaSabado[1][1]+"</td><td>"+metroMondegoVoltaSabado[1][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[1]+"</td><td>"+metroMondegoVoltaSabado[1][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[2][0]+"</td><td>"+metroMondegoVoltaSabado[2][1]+"</td><td>"+metroMondegoVoltaSabado[2][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[2]+"</td><td>"+metroMondegoVoltaSabado[2][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[3][0]+"</td><td>"+metroMondegoVoltaSabado[3][1]+"</td><td>"+metroMondegoVoltaSabado[3][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[3]+"</td><td>"+metroMondegoVoltaSabado[3][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVoltaSabado[4][0]+"</td><td>"+metroMondegoVoltaSabado[4][1]+"</td><td>"+metroMondegoVoltaSabado[4][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[4]+"</td><td>"+metroMondegoVoltaSabado[4][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[5][0]+"</td><td>"+metroMondegoVoltaSabado[5][1]+"</td><td>"+metroMondegoVoltaSabado[5][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[5]+"</td><td>"+metroMondegoVoltaSabado[5][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVoltaSabado[6][0]+"</td><td>"+metroMondegoVoltaSabado[6][1]+"</td><td>"+metroMondegoVoltaSabado[6][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[6]+"</td><td>"+metroMondegoVoltaSabado[6][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[7][0]+"</td><td>"+metroMondegoVoltaSabado[7][1]+"</td><td>"+metroMondegoVoltaSabado[7][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[7]+"</td><td>"+metroMondegoVoltaSabado[7][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[8][0]+"</td><td>"+metroMondegoVoltaSabado[8][1]+"</td><td>"+metroMondegoVoltaSabado[8][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[8]+"</td><td>"+metroMondegoVoltaSabado[8][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[9][0]+"</td><td>"+metroMondegoVoltaSabado[9][1]+"</td><td>"+metroMondegoVoltaSabado[9][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[9]+"</td><td>"+metroMondegoVoltaSabado[9][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[10][0]+"</td><td>"+metroMondegoVoltaSabado[10][1]+"</td><td>"+metroMondegoVoltaSabado[10][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[10]+"</td><td>"+metroMondegoVoltaSabado[10][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[11][0]+"</td><td>"+metroMondegoVoltaSabado[11][1]+"</td><td>"+metroMondegoVoltaSabado[11][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[11]+"</td><td>"+metroMondegoVoltaSabado[11][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVoltaSabado[12][0]+"</td><td>"+metroMondegoVoltaSabado[12][1]+"</td><td>"+metroMondegoVoltaSabado[12][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[12]+"</td><td>"+metroMondegoVoltaSabado[12][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[13][0]+"</td><td>"+metroMondegoVoltaSabado[13][1]+"</td><td>"+metroMondegoVoltaSabado[13][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[13]+"</td><td>"+metroMondegoVoltaSabado[13][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[14][0]+"</td><td>"+metroMondegoVoltaSabado[14][1]+"</td><td>"+metroMondegoVoltaSabado[14][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[14]+"</td><td>"+metroMondegoVoltaSabado[14][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaSabado[15][0]+"</td><td>"+metroMondegoVoltaSabado[15][1]+"</td><td>"+metroMondegoVoltaSabado[15][2]+"</td><td>"+metroMondegoVoltaSabadoSerpins[15]+"</td><td>"+metroMondegoVoltaSabado[15][3]+"</td>"+
      "</tr>"+
      "</table>"+

      "<h3>Domingo e Feriado</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Portagem</th><th>São José</th><th>Lousã</th><th>Serpins</th><th>Tipo</th>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[0][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[0][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[0][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[0][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[1][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[1][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[1][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[1][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[2][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[2][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[2][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[2]+"</td><td>"+metroMondegoVoltaDomingoFeriado[2][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[3][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[3][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[3][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[3]+"</td><td>"+metroMondegoVoltaDomingoFeriado[3][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[4][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[4][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[4][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[4]+"</td><td>"+metroMondegoVoltaDomingoFeriado[4][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[5][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[5][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[5][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[5]+"</td><td>"+metroMondegoVoltaDomingoFeriado[5][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[6][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[6][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[6][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[6]+"</td><td>"+metroMondegoVoltaDomingoFeriado[6][3]+"</td>"+
      "</tr>"+
      "<tr class='direto'>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[7][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[7][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[7][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[7]+"</td><td>"+metroMondegoVoltaDomingoFeriado[7][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[8][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[8][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[8][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[8]+"</td><td>"+metroMondegoVoltaDomingoFeriado[8][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[9][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[9][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[9][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[9]+"</td><td>"+metroMondegoVoltaDomingoFeriado[9][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoVoltaDomingoFeriado[10][0]+"</td><td>"+metroMondegoVoltaDomingoFeriado[10][1]+"</td><td>"+metroMondegoVoltaDomingoFeriado[10][2]+"</td><td>"+metroMondegoVoltaDomingoFeriadoSerpins[10]+"</td><td>"+metroMondegoVoltaDomingoFeriado[10][3]+"</td>"+
      "</tr>"+
      "</table>"+

      "<h3>Tarifário</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Partida</th><th>Chegada</th><th>Bilhete</th><th>Passe</th>"+
      "</tr>"+
      "<tr>"+
      "<td>São José</td><td>Lousã</td><td>2,80€</td><td>47,25€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Portagem</td><td>Lousã</td><td>3,00€</td><td>49,80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Lousã</td><td>Serpins</td><td>1,45€</td><td>24,45€</td>"+
      "</tr>"+
      "</table>"+
      
      "<h4>&copy;"+ano+" - Estúdio Esquimó - "+versao+"</h4>"
    ;
  }
  else if (horarioAMostrar == "smtuc5ida")
  {
    document.getElementsByClassName("botaoHorario")[0].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[1].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[2].style.border = "3px solid black";
    document.getElementsByClassName("botaoHorario")[3].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[4].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[5].style.border = "2px solid black";
    document.getElementById("conteudo").innerHTML = 
      "<h3>Segunda a Sexta</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Estádio</th><th>Pedrulha</th>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+SMTUC5Ida[0][0]+"</td><td>"+SMTUC5Ida[0][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[1][0]+"</td><td>"+SMTUC5Ida[1][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[2][0]+"</td><td>"+SMTUC5Ida[2][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[3][0]+"</td><td>"+SMTUC5Ida[3][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[4][0]+"</td><td>"+SMTUC5Ida[4][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[5][0]+"</td><td>"+SMTUC5Ida[5][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[6][0]+"</td><td>"+SMTUC5Ida[6][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[7][0]+"</td><td>"+SMTUC5Ida[7][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[8][0]+"</td><td>"+SMTUC5Ida[8][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[9][0]+"</td><td>"+SMTUC5Ida[9][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[10][0]+"</td><td>"+SMTUC5Ida[10][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[11][0]+"</td><td>"+SMTUC5Ida[11][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[12][0]+"</td><td>"+SMTUC5Ida[12][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[13][0]+"</td><td>"+SMTUC5Ida[13][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[14][0]+"</td><td>"+SMTUC5Ida[14][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[15][0]+"</td><td>"+SMTUC5Ida[15][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[16][0]+"</td><td>"+SMTUC5Ida[16][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[17][0]+"</td><td>"+SMTUC5Ida[17][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[18][0]+"</td><td>"+SMTUC5Ida[18][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[19][0]+"</td><td>"+SMTUC5Ida[19][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[20][0]+"</td><td>"+SMTUC5Ida[20][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[21][0]+"</td><td>"+SMTUC5Ida[21][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[22][0]+"</td><td>"+SMTUC5Ida[22][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[23][0]+"</td><td>"+SMTUC5Ida[23][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[24][0]+"</td><td>"+SMTUC5Ida[24][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[25][0]+"</td><td>"+SMTUC5Ida[25][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[26][0]+"</td><td>"+SMTUC5Ida[26][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[27][0]+"</td><td>"+SMTUC5Ida[27][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[28][0]+"</td><td>"+SMTUC5Ida[28][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[29][0]+"</td><td>"+SMTUC5Ida[29][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[30][0]+"</td><td>"+SMTUC5Ida[30][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[31][0]+"</td><td>"+SMTUC5Ida[31][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Ida[32][0]+"</td><td>"+SMTUC5Ida[32][1]+"</td>"+
      "</tr>"+
      "</table>"+

      "<h3>Tarifário</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Tipo</th><th>Preço</th>"+
      "</tr>"+
      "<tr>"+
      "<td>Bilhete de Motorista</td><td>1.60€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>3 Deslocações</td><td>2.20€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>4 Deslocações</td><td>2.50€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>5 Deslocações</td><td>3.15€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>6 Deslocações</td><td>3.80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>7 Deslocações</td><td>4.40€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>8 Deslocações</td><td>4.65€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>9 Deslocações</td><td>5.25€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>10 Deslocações</td><td>5.80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>11 Deslocações</td><td>6.40€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>1 Dia</td><td>3.50€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Passe</td><td>30€</td>"+
      "</tr>"+
      "</table>"+
      
      "<h4>&copy;"+ano+" - Estúdio Esquimó - "+versao+"</h4>"
      ;
  }
  else if (horarioAMostrar == "smtuc5volta")
  {
    document.getElementsByClassName("botaoHorario")[0].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[1].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[2].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[3].style.border = "3px solid black";
    document.getElementsByClassName("botaoHorario")[4].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[5].style.border = "2px solid black";
    document.getElementById("conteudo").innerHTML = 
      "<h3>Segunda a Sexta</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Pedrulha</th><th>Estádio</th>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[0][0]+"</td><td>"+SMTUC5Volta[0][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[1][0]+"</td><td>"+SMTUC5Volta[1][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[2][0]+"</td><td>"+SMTUC5Volta[2][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[3][0]+"</td><td>"+SMTUC5Volta[3][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[4][0]+"</td><td>"+SMTUC5Volta[4][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[5][0]+"</td><td>"+SMTUC5Volta[5][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[6][0]+"</td><td>"+SMTUC5Volta[6][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[7][0]+"</td><td>"+SMTUC5Volta[7][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[8][0]+"</td><td>"+SMTUC5Volta[8][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[9][0]+"</td><td>"+SMTUC5Volta[9][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[10][0]+"</td><td>"+SMTUC5Volta[10][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[11][0]+"</td><td>"+SMTUC5Volta[11][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[12][0]+"</td><td>"+SMTUC5Volta[12][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[13][0]+"</td><td>"+SMTUC5Volta[13][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[14][0]+"</td><td>"+SMTUC5Volta[14][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[15][0]+"</td><td>"+SMTUC5Volta[15][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[16][0]+"</td><td>"+SMTUC5Volta[16][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[17][0]+"</td><td>"+SMTUC5Volta[17][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[18][0]+"</td><td>"+SMTUC5Volta[18][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[19][0]+"</td><td>"+SMTUC5Volta[19][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[20][0]+"</td><td>"+SMTUC5Volta[20][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[21][0]+"</td><td>"+SMTUC5Volta[21][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[22][0]+"</td><td>"+SMTUC5Volta[22][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[23][0]+"</td><td>"+SMTUC5Volta[23][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[24][0]+"</td><td>"+SMTUC5Volta[24][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[25][0]+"</td><td>"+SMTUC5Volta[25][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[26][0]+"</td><td>"+SMTUC5Volta[26][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[27][0]+"</td><td>"+SMTUC5Volta[27][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[28][0]+"</td><td>"+SMTUC5Volta[28][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[29][0]+"</td><td>"+SMTUC5Volta[29][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[30][0]+"</td><td>"+SMTUC5Volta[30][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC5Volta[31][0]+"</td><td>"+SMTUC5Volta[31][1]+"</td>"+
      "</tr>"+
      "</table>"+

      "<h3>Tarifário</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Tipo</th><th>Preço</th>"+
      "</tr>"+
      "<tr>"+
      "<td>Bilhete de Motorista</td><td>1.60€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>3 Deslocações</td><td>2.20€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>4 Deslocações</td><td>2.50€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>5 Deslocações</td><td>3.15€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>6 Deslocações</td><td>3.80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>7 Deslocações</td><td>4.40€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>8 Deslocações</td><td>4.65€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>9 Deslocações</td><td>5.25€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>10 Deslocações</td><td>5.80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>11 Deslocações</td><td>6.40€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>1 Dia</td><td>3.50€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Passe</td><td>30€</td>"+
      "</tr>"+  
      "</table>"+
      
      "<h4>&copy;"+ano+" - Estúdio Esquimó - "+versao+"</h4>"
      ;
  }
  else if (horarioAMostrar == "smtuc35volta")
  {
    document.getElementsByClassName("botaoHorario")[0].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[1].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[2].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[3].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[4].style.border = "3px solid black";
    document.getElementsByClassName("botaoHorario")[5].style.border = "2px solid black";
    document.getElementById("conteudo").innerHTML = 
      "<h3>Segunda a Sexta</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Pedrulha</th><th>RBL</th>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[0][0]+"</td><td>"+SMTUC35Volta[0][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[1][0]+"</td><td>"+SMTUC35Volta[1][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[2][0]+"</td><td>"+SMTUC35Volta[2][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[3][0]+"</td><td>"+SMTUC35Volta[3][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[4][0]+"</td><td>"+SMTUC35Volta[4][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[5][0]+"</td><td>"+SMTUC35Volta[5][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[6][0]+"</td><td>"+SMTUC35Volta[6][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[7][0]+"</td><td>"+SMTUC35Volta[7][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[8][0]+"</td><td>"+SMTUC35Volta[8][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[9][0]+"</td><td>"+SMTUC35Volta[9][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[10][0]+"</td><td>"+SMTUC35Volta[10][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[11][0]+"</td><td>"+SMTUC35Volta[11][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[12][0]+"</td><td>"+SMTUC35Volta[12][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC35Volta[13][0]+"</td><td>"+SMTUC35Volta[13][1]+"</td>"+
      "</tr>"+
      "</table>"+

      "<h3>Tarifário</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Tipo</th><th>Preço</th>"+
      "</tr>"+
      "<tr>"+
      "<td>Bilhete de Motorista</td><td>1.60€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>3 Deslocações</td><td>2.20€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>4 Deslocações</td><td>2.50€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>5 Deslocações</td><td>3.15€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>6 Deslocações</td><td>3.80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>7 Deslocações</td><td>4.40€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>8 Deslocações</td><td>4.65€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>9 Deslocações</td><td>5.25€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>10 Deslocações</td><td>5.80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>11 Deslocações</td><td>6.40€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>1 Dia</td><td>3.50€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Passe</td><td>30€</td>"+
      "</tr>"+ 
      "</table>"+
      
      "<h4>&copy;"+ano+" - Estúdio Esquimó - "+versao+"</h4>"
    ;
  }
  else if (horarioAMostrar == "smtuc7Tvolta")
  {
    document.getElementsByClassName("botaoHorario")[0].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[1].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[2].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[3].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[4].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[5].style.border = "3px solid black";
    document.getElementById("conteudo").innerHTML = 
      "<h3>Segunda a Sexta</h3>"+
      "<table>"+
      "<tr>"+
      "<th>CTT</th><th>São José</th>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[0][0]+"</td><td>"+SMTUC7TIda[0][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[1][0]+"</td><td>"+SMTUC7TIda[1][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[2][0]+"</td><td>"+SMTUC7TIda[2][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[3][0]+"</td><td>"+SMTUC7TIda[3][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[4][0]+"</td><td>"+SMTUC7TIda[4][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[5][0]+"</td><td>"+SMTUC7TIda[5][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[6][0]+"</td><td>"+SMTUC7TIda[6][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[7][0]+"</td><td>"+SMTUC7TIda[7][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[8][0]+"</td><td>"+SMTUC7TIda[8][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[9][0]+"</td><td>"+SMTUC7TIda[9][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[10][0]+"</td><td>"+SMTUC7TIda[10][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[11][0]+"</td><td>"+SMTUC7TIda[11][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[12][0]+"</td><td>"+SMTUC7TIda[12][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[13][0]+"</td><td>"+SMTUC7TIda[13][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[14][0]+"</td><td>"+SMTUC7TIda[14][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[15][0]+"</td><td>"+SMTUC7TIda[15][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[16][0]+"</td><td>"+SMTUC7TIda[16][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[17][0]+"</td><td>"+SMTUC7TIda[17][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[18][0]+"</td><td>"+SMTUC7TIda[18][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[19][0]+"</td><td>"+SMTUC7TIda[19][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[20][0]+"</td><td>"+SMTUC7TIda[20][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[21][0]+"</td><td>"+SMTUC7TIda[21][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[22][0]+"</td><td>"+SMTUC7TIda[22][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[23][0]+"</td><td>"+SMTUC7TIda[23][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[24][0]+"</td><td>"+SMTUC7TIda[24][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[25][0]+"</td><td>"+SMTUC7TIda[25][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[26][0]+"</td><td>"+SMTUC7TIda[26][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[27][0]+"</td><td>"+SMTUC7TIda[27][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[28][0]+"</td><td>"+SMTUC7TIda[28][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[29][0]+"</td><td>"+SMTUC7TIda[29][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[30][0]+"</td><td>"+SMTUC7TIda[30][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[31][0]+"</td><td>"+SMTUC7TIda[31][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[32][0]+"</td><td>"+SMTUC7TIda[32][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[33][0]+"</td><td>"+SMTUC7TIda[33][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[34][0]+"</td><td>"+SMTUC7TIda[34][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[35][0]+"</td><td>"+SMTUC7TIda[35][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[36][0]+"</td><td>"+SMTUC7TIda[36][1]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+SMTUC7TIda[37][0]+"</td><td>"+SMTUC7TIda[37][1]+"</td>"+
      "</tr>"+
      "</table>"+

      "<h3>Tarifário</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Tipo</th><th>Preço</th>"+
      "</tr>"+
      "<tr>"+
      "<td>Bilhete de Motorista</td><td>1.60€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>3 Deslocações</td><td>2.20€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>4 Deslocações</td><td>2.50€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>5 Deslocações</td><td>3.15€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>6 Deslocações</td><td>3.80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>7 Deslocações</td><td>4.40€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>8 Deslocações</td><td>4.65€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>9 Deslocações</td><td>5.25€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>10 Deslocações</td><td>5.80€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>11 Deslocações</td><td>6.40€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>1 Dia</td><td>3.50€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Passe</td><td>30€</td>"+
      "</tr>"+
      "</table>"+
      
      "<h4>&copy;"+ano+" - Estúdio Esquimó - "+versao+"</h4>"
    ;
  }
}

// REGISTAR SERVICE WORKER

if ("serviceWorker" in navigator) 
{
  window.addEventListener("load", function() 
  {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
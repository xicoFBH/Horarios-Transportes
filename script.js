// ANO E VERSÃO

var ano = new Date().getFullYear();
var versao = "v2.1";

// LOUSÃ -> COIMBRA

metroMondegoIda =
[
  ["05:25", "06:24", "06:35", "NORMAL"],
  ["05:55", "06:54", "07:05", "NORMAL"],
  ["06:25", "07:24", "07:35", "NORMAL"],
  ["06:35", "07:24", "07:35", "SEMI-DIRETO"],
  ["06:45", "07:29", "07:40", "DIRETO"],
  ["06:55", "07:54", "08:05", "NORMAL"],
  ["07:05", "07:54", "08:05", "SEMI-DIRETO"],
  ["07:10", "08:09", "08:20", "NORMAL"],
  ["07:20", "08:04", "08:15", "DIRETO"],
  ["07:25", "08:24", "08:35", "NORMAL"],
  ["07:30", "08:14", "08:25", "DIRETO"],
  ["07:35", "08:19", "08:25", "DIRETO"],
  ["07:40", "08:39", "08:50", "NORMAL"],
  ["07:45", "08:34", "08:45", "SEMI-DIRETO"],
  ["07:55", "08:54", "09:05", "NORMAL"],
  ["08:10", "09:09", "09:20", "NORMAL"],
  ["08:55", "09:54", "10:05", "NORMAL"],
  ["09:10", "09:59", "10:10", "SEMI-DIRETO"],
  ["09:25", "10:24", "10:35", "NORMAL"],
  ["09:55", "10:44", "10:55", "SEMI-DIRETO"],
  ["10:25", "11:24", "11:35", "NORMAL"],
  ["10:55", "11:44", "11:55", "SEMI-DIRETO"],
  ["11:25", "12:24", "12:35", "NORMAL"],
  ["11:55", "12:44", "12:55", "SEMI-DIRETO"],
  ["12:25", "13:24", "13:35", "NORMAL"],
  ["12:55", "13:44", "13:55", "SEMI-DIRETO"],
  ["13:25", "14:24", "14:35", "NORMAL"],
  ["14:25", "15:24", "15:35", "NORMAL"],
  ["15:25", "16:24", "16:35", "NORMAL"],
  ["16:25", "17:24", "17:35", "NORMAL"],
  ["16:55", "17:44", "17:55", "SEMI-DIRETO"],
  ["17:25", "18:24", "18:35", "NORMAL"],
  ["17:55", "18:44", "18:55", "SEMI-DIRETO"],
  ["18:25", "19:24", "19:35", "NORMAL"],
  ["19:25", "20:24", "20:35", "NORMAL"],
  ["20:25", "21:24", "21:35", "NORMAL"],
  ["21:25", "22:24", "22:35", "NORMAL"],
  ["22:25", "23:24", "23:35", "NORMAL"]
]

metroMondegoIdaSerpins =
[
  "05:10", 
  "05:40", 
  "06:10", 
  "", "",
  "06:40", 
  "", "", "",
  "07:10", 
  "", "", "", "", "", 
  "07:40",
  "", "",
  "08:40",
  "",
  "09:10",
  "",
  "10:10",
  "",
  "11:10",
  "",
  "13:10",
  "14:10",
  "15:10",
  "16:10",
  "",
  "17:10",
  "",
  "18:10",
  "19:10",
  "20:10",
  "21:10",
  "22:10"
];

metroMondegoIdaSabado =
[
  ["05:25", "06:24", "06:35", "NORMAL"],
  ["05:55", "06:54", "07:05", "NORMAL"],
  ["06:25", "07:24", "07:35", "NORMAL"],
  ["07:05", "07:54", "08:05", "SEMI-DIRETO"],
  ["07:25", "08:24", "08:35", "NORMAL"],
  ["07:45", "08:34", "08:45", "SEMI-DIRETO"],
  ["07:55", "08:54", "09:05", "NORMAL"],
  ["08:55", "09:54", "10:05", "NORMAL"],
  ["09:55", "10:44", "10:55", "SEMI-DIRETO"],
  ["10:25", "11:24", "11:35", "NORMAL"],
  ["11:25", "12:24", "12:35", "NORMAL"],
  ["12:25", "13:24", "13:35", "NORMAL"],
  ["13:25", "14:24", "14:35", "NORMAL"],
  ["14:25", "15:24", "15:35", "NORMAL"],
  ["16:25", "17:24", "17:35", "NORMAL"],
  ["17:25", "18:24", "18:35", "NORMAL"],
  ["18:25", "19:24", "19:35", "NORMAL"],
  ["20:25", "21:24", "21:35", "NORMAL"],
  ["22:25", "23:24", "23:35", "NORMAL"]
]

metroMondegoIdaSabadoSerpins =
[
  "05:10",
  "05:40",
  "06:10",
  "",
  "07:10",
  "",
  "07:40",
  "08:40",
  "",
  "10:10",
  "11:10",
  "12:10",
  "13:10",
  "14:10",
  "16:10",
  "17:10",
  "18:10",
  "20:10",
  "22:10"
]

metroMondegoIdaDomingoFeriado =
[
  ["05:10", "05:25", "06:24", "06:35", "NORMAL"],
  ["07:10", "07:25", "08:24", "08:35", "NORMAL"],
  ["07:40", "07:55", "08:54", "09:05", "NORMAL"],
  ["08:40", "08:55", "09:54", "10:05", "NORMAL"],
  ["10:10", "10:25", "11:24", "11:35", "NORMAL"],
  ["12:10", "12:25", "13:24", "13:35", "NORMAL"],
  ["14:10", "14:25", "15:24", "15:35", "NORMAL"],
  ["16:10", "16:25", "17:24", "17:35", "NORMAL"],
  ["18:10", "18:25", "19:24", "19:35", "NORMAL"],
  ["20:10", "20:25", "21:24", "21:35", "NORMAL"],
  ["22:10", "22:25", "23:24", "23:35", "NORMAL"]
]
  
// COIMBRA -> LOUSÃ

metroMondegoVolta = 
[
  ["06:45", "06:56", "07:55", "NORMAL"],
  ["07:15", "07:26", "08:25", "NORMAL"],
  ["07:45", "07:56", "08:40", "SEMI-DIRETO"],
  ["08:15", "08:26", "09:25", "NORMAL"],
  ["08:45", "08:56", "09:40", "SEMI-DIRETO"],
  ["09:15", "09:26", "10:25", "NORMAL"],
  ["10:15", "10:26", "11:25", "NORMAL"],
  ["11:15", "11:26", "12:25", "NORMAL"],
  ["11:45", "11:56", "12:40", "SEMI-DIRETO"],
  ["12:15", "12:26", "13:25", "NORMAL"],
  ["12:45", "12:56", "13:40", "SEMI-DIRETO"],
  ["13:15", "13:26", "14:25", "NORMAL"],
  ["13:30", "13:41", "14:25", "SEMI-DIRETO"],
  ["13:45", "13:56", "14:55", "NORMAL"],
  ["14:00", "14:11", "14:55", "SEMI-DIRETO"],
  ["14:15", "14:26", "15:25", "NORMAL"],
  ["15:15", "15:26", "16:25", "NORMAL"],
  ["15:45", "15:56", "16:40", "SEMI-DIRETO"],
  ["16:15", "16:26", "17:25", "NORMAL"],
  ["16:25", "16:36", "17:20", "DIRETO"],
  ["16:45", "16:56", "17:55", "NORMAL"],
  ["16:55", "17:06", "17:50", "DIRETO"],
  ["17:15", "17:26", "18:25", "NORMAL"],
  ["17:25", "17:36", "18:20", "DIRETO"],
  ["17:45", "17:56", "18:55", "NORMAL"],
  ["17:55", "18:06", "18:50", "DIRETO"],
  ["18:15", "18:26", "19:25", "NORMAL"],
  ["18:25", "18:36", "19:20", "DIRETO"],
  ["18:45", "18:56", "19:55", "NORMAL"],
  ["19:00", "19:11", "19:55", "SEMI-DIRETO"],
  ["19:15", "19:26", "20:25", "NORMAL"],
  ["19:45", "19:56", "20:40", "SEMI-DIRETO"],
  ["20:15", "20:26", "21:25", "NORMAL"],
  ["21:15", "21:26", "22:25", "NORMAL"],
  ["22:15", "22:26", "23:25", "NORMAL"],
  ["00:15", "00:26", "01:25", "NORMAL"]
]

metroMondegoVoltaSerpins = 
[
  "08:10",
  "08:40",
  "",
  "09:40",
  "",
  "10:40",
  "11:40",
  "12:40",
  "",
  "13:40",
  "",
  "14:40",
  "",
  "15:10",
  "",
  "15:40",
  "16:40",
  "",
  "17:40",
  "",
  "18:10",
  "",
  "18:40",
  "",
  "19:10",
  "",
  "19:40",
  "",
  "20:10",
  "",
  "20:40",
  "",
  "21:40",
  "22:40",
  "23:40",
  "01:40"
]

metroMondegoVoltaSabado = 
[
  ["06:45", "06:56", "07:55", "NORMAL"],
  ["08:15", "08:26", "09:25", "NORMAL"],
  ["10:15", "10:26", "11:25", "NORMAL"],
  ["12:15", "12:26", "13:25", "NORMAL"],
  ["12:45", "12:56", "13:40", "SEMI-DIRETO"],
  ["13:15", "13:26", "14:25", "NORMAL"],
  ["14:00", "14:11", "14:55", "SEMI-DIRETO"],
  ["14:15", "14:26", "15:25", "NORMAL"],
  ["15:15", "15:26", "16:25", "NORMAL"],
  ["16:15", "16:26", "17:25", "NORMAL"],
  ["17:15", "17:26", "18:25", "NORMAL"],
  ["18:15", "18:26", "19:25", "NORMAL"],
  ["19:00", "19:11", "19:55", "SEMI-DIRETO"],
  ["20:15", "20:26", "21:25", "NORMAL"],
  ["22:15", "22:26", "23:25", "NORMAL"],
  ["00:15", "00:26", "01:25", "NORMAL"]
]

metroMondegoVoltaSabadoSerpins = 
[
  "08:10",
  "09:40",
  "11:40",
  "13:40",
  "",
  "14:40",
  "",
  "15:40",
  "16:40",
  "17:40",
  "18:40",
  "19:40",
  "",
  "21:40",
  "23:40",
  "01:40"
]

metroMondegoVoltaDomingoFeriado = 
[
  ["06:45", "06:56", "07:55", "NORMAL"],
  ["08:15", "08:26", "09:25", "NORMAL"],
  ["10:15", "10:26", "11:25", "NORMAL"],
  ["12:15", "12:26", "13:25", "NORMAL"],
  ["14:15", "14:26", "15:25", "NORMAL"],
  ["16:15", "16:26", "17:25", "NORMAL"],
  ["18:15", "18:26", "19:25", "NORMAL"],
  ["19:00", "19:11", "19:55", "SEMI-DIRETO"],
  ["20:15", "20:26", "21:25", "NORMAL"],
  ["22:15", "22:26", "23:25", "NORMAL"],
  ["00:15", "00:26", "01:25", "NORMAL"]
]

metroMondegoVoltaDomingoFeriadoSerpins = 
[
  "08:10",
  "09:40",
  "11:40",
  "13:40",
  "15:40",
  "17:40",
  "19:40",
  "",
  "21:40",
  "23:40",
  "01:40"
]

// 5 ESTÁDIO -> PEDRULHA

SMTUC5Ida =
[
  ["06:20", "06:40"],
  ["06:55", "07:25"],
  ["07:10", "07:45"],
  ["08:00", "08:35"],
  ["08:25", "09:00"],
  ["08:50", "09:25"],
  ["09:15", "09:50"],
  ["09:40", "10:15"],
  ["10:05", "10:40"],
  ["10:30", "11:05"],
  ["10:55", "11:30"],
  ["11:20", "11:55"],
  ["11:45", "12:20"],
  ["12:10", "12:45"],
  ["12:35", "13:10"],
  ["13:00", "13:35"],
  ["13:25", "14:00"],
  ["13:50", "14:25"],
  ["14:15", "14:50"],
  ["14:40", "15:15"],
  ["15:05", "15:40"],
  ["15:30", "16:05"],
  ["15:55", "16:30"],
  ["16:20", "16:55"],
  ["16:45", "17:20"],
  ["17:10", "17:45"],
  ["17:35", "18:10"],
  ["18:00", "18:35"],
  ["18:25", "19:00"],
  ["18:50", "19:25"],
  ["19:10", "19:45"],
  ["19:35", "20:05"],
  ["20:00", "20:30"] 
]

// 5 PEDRULHA -> ESTÁDIO

SMTUC5Volta = 
[
  ["06:40", "07:10"],
  ["07:25", "08:00"],
  ["07:45", "08:25"],
  ["08:10", "08:50"],
  ["08:35", "09:15"],
  ["09:00", "09:40"],
  ["09:25", "10:05"],
  ["09:50", "10:30"],
  ["10:15", "10:55"],
  ["10:40", "11:20"],
  ["11:05", "11:45"],
  ["11:30", "12:10"],
  ["11:55", "12:35"],
  ["12:20", "13:00"],
  ["12:45", "13:25"],
  ["13:10", "13:50"],
  ["13:35", "14:15"],
  ["14:00", "14:40"],
  ["14:25", "15:05"],
  ["14:50", "15:30"],
  ["15:15", "15:55"],
  ["15:40", "16:20"],
  ["16:05", "16:45"],
  ["16:30", "17:10"],
  ["16:55", "17:35"],
  ["17:20", "18:00"],
  ["17:45", "18:25"],
  ["18:10", "18:50"],
  ["18:35", "19:10"],
  ["19:00", "19:35"],
  ["19:25", "20:00"],
  ["20:30", "20:55"] 
]

// 35 PEDRULHA -> RBL

SMTUC35Volta =
[
  ["07:20", "07:29"],
  ["07:50", "08:06"],
  ["08:55", "09:11"],
  ["09:55", "10:08"],
  ["10:50", "11:04"],
  ["11:50", "12:06"],
  ["12:50", "13:06"],
  ["14:00", "14:18"],
  ["15:00", "15:16"],
  ["16:00", "16:14"],
  ["17:00", "17:18"],
  ["18:00", "18:16"],
  ["19:00", "19:16"],
  ["19:55", "20:04"] 
]

// 7T CTT -> SÂO JOSÉ

SMTUC7TIda =
[
  ["06:10", "06:16"],
  ["06:48", "06:56"],
  ["07:11", "07:21"],
  ["07:33", "07:43"],
  ["07:58", "08:08"],
  ["08:24", "08:34"],
  ["08:49", "08:59"],
  ["09:15", "09:25"],
  ["09:40", "09:50"],
  ["10:06", "10:16"],
  ["10:31", "10:41"],
  ["10:57", "11:07"],
  ["11:22", "11:32"],
  ["11:48", "11:58"],
  ["12:13", "12:23"],
  ["12:38", "12:49"],
  ["13:04", "13:14"],
  ["13:30", "13:40"],
  ["13:55", "14:05"],
  ["14:21", "14:31"],
  ["14:46", "14:56"],
  ["15:12", "15:22"],
  ["15:37", "15:47"],
  ["16:03", "16:13"],
  ["16:28", "16:38"],
  ["16:54", "17:04"],
  ["17:19", "17:30"],
  ["17:45", "17:55"],
  ["18:10", "18:20"],
  ["18:36", "18:48"],
  ["19:01", "19:13"],
  ["19:31", "19:43"],
  ["20:01", "20:11"],
  ["20:46", "20:56"],
  ["21:36", "21:46"],
  ["22:26", "22:36"],
  ["23:11", "23:19"],
  ["23:51", "00:01"] 
];

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
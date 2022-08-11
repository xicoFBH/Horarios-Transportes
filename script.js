// ANO E VERSÃO

var ano = new Date().getFullYear();
var versao = "v2";

// LOUSÃ -> COIMBRA

metroMondegoIda =
[
  ["05:25", "06:24", "06:35", "NORMAL"], //1
  ["05:55", "06:54", "07:05", "NORMAL", ""], //2
  ["06:25", "07:24", "07:35", "NORMAL", ""], //3
  ["06:35", "07:24", "07:35", "SEMI-DIRETO"], //4
  ["06:45", "07:29", "07:40", "DIRETO"], //5
  ["06:55", "07:54", "08:05", "NORMAL", ""], //6
  ["07:05", "07:54", "08:05", "SEMI-DIRETO"], //7
  ["07:10", "08:09", "08:20", "NORMAL", ""], //8
  ["07:20", "08:04", "08:15", "DIRETO", ""], //9
  ["07:25", "08:24", "08:35", "NORMAL", ""], //10
  ["07:30", "08:14", "08:25", "DIRETO", ""], //11
  ["07:35", "08:19", "08:25", "DIRETO", "APENAS PERIODO ESCOLAR"], //12
  ["07:40", "08:39", "08:50", "NORMAL", ""], //13
  ["07:45", "08:34", "08:45", "SEMI-DIRETO", ""], //14
  ["07:55", "08:54", "09:05", "NORMAL", ""], //15
  ["08:10", "09:09", "09:20", "NORMAL", ""], //16
  ["08:55", "09:54", "10:05", "NORMAL", ""], //17
  ["09:10", "09:59", "10:10", "SEMI-DIRETO", ""], //18
  ["09:25", "10:24", "10:35", "NORMAL", ""], //19
  ["09:55", "10:44", "10:55", "SEMI-DIRETO", ""], //20
  ["10:25", "11:24", "11:35", "NORMAL", ""], //21//
  ["10:55", "11:44", "11:55", "SEMI-DIRETO", "APENAS PERIODO ESCOLAR"], //22
  ["11:25", "12:24", "12:35", "NORMAL", ""], //23
  ["11:55", "12:44", "12:55", "SEMI-DIRETO", ""], //24
  ["12:25", "13:24", "13:35", "NORMAL", ""], //25
  ["12:55", "13:44", "13:55", "SEMI-DIRETO", ""], //26
  ["13:25", "14:24", "14:35", "NORMAL", ""], //27
  ["14:25", "15:24", "15:35", "NORMAL", ""], //28
  ["15:25", "16:24", "16:35", "NORMAL", ""], //29
  ["16:25", "17:24", "17:35", "NORMAL", ""], //30
  ["16:55", "17:44", "17:55", "SEMI-DIRETO", ""], //31
  ["17:25", "18:24", "18:35", "NORMAL", ""], //32
  ["17:55", "18:44", "18:55", "SEMI-DIRETO", ""], //33
  ["18:25", "19:24", "19:35", "NORMAL", ""], //34
  ["19:25", "20:24", "20:35", "NORMAL", ""], //35
  ["20:25", "21:24", "21:35", "NORMAL", ""], //36
  ["21:25", "22:24", "22:35", "NORMAL", ""], //37
  ["22:25", "23:24", "23:35", "NORMAL", ""], //38
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
  ["05:25", "06:24", "06:35", "NORMAL", ""],
  ["05:55", "06:54", "07:05", "NORMAL", ""],
  ["06:25", "07:24", "07:35", "NORMAL", ""],
  ["07:05", "07:54", "08:05", "SEMI-DIRETO", ""],
  ["07:25", "08:24", "08:35", "NORMAL", ""],
  ["07:45", "08:34", "08:45", "SEMI-DIRETO", ""],
  ["07:55", "08:54", "09:05", "NORMAL", ""],
  ["08:55", "09:54", "10:05", "NORMAL", ""],
  ["09:55", "10:44", "10:55", "SEMI-DIRETO", ""],
  ["10:25", "11:24", "11:35", "NORMAL", ""],
  ["11:25", "12:24", "12:35", "NORMAL", ""],
  ["12:25", "13:24", "13:35", "NORMAL", ""],
  ["13:25", "14:24", "14:35", "NORMAL", ""],
  ["14:25", "15:24", "15:35", "NORMAL", ""],
  ["16:25", "17:24", "17:35", "NORMAL", ""],
  ["17:25", "18:24", "18:35", "NORMAL", ""],
  ["18:25", "19:24", "19:35", "NORMAL", ""],
  ["20:25", "21:24", "21:35", "NORMAL", ""],
  ["22:25", "23:24", "23:35", "NORMAL", ""]
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
  ["05:25", "06:24", "06:35", "NORMAL", ""],
  ["07:25", "08:24", "08:35", "NORMAL", ""],
  ["07:55", "08:54", "09:05", "NORMAL", ""],
  ["08:55", "09:54", "10:05", "NORMAL", ""],
  ["10:25", "11:24", "11:35", "NORMAL", ""],
  ["12:25", "13:24", "13:35", "NORMAL", ""],
  ["14:25", "15:24", "15:35", "NORMAL", ""],
  ["16:25", "17:24", "17:35", "NORMAL", ""],
  ["18:25", "19:24", "19:35", "NORMAL", ""],
  ["20:25", "21:24", "21:35", "NORMAL", ""],
  ["22:25", "23:24", "23:35", "NORMAL", ""]
]

metroMondegoIdaDomingoFeriadoSerpins =
[
  "05:10",
  "07:10",
  "07:40",
  "08:40",
  "10:10",
  "12:10",
  "14:10",
  "16:10",
  "18:10",
  "20:10",
  "22:10"
]
  
// COIMBRA -> LOUSÃ

metroMondegoVolta = 
[
  ["06:45", "06:56", "07:55", "NORMAL", ""], //1//
  ["07:15", "07:26", "08:25", "NORMAL", ""], //2//
  ["07:45", "07:56", "08:40", "SEMI-DIRETO", ""], //3//
  ["08:15", "08:26", "09:25", "NORMAL", ""], //3//
  ["08:45", "08:56", "09:40", "SEMI-DIRETO", ""], //4//
  ["09:15", "09:26", "10:25", "NORMAL", ""], //5//
  ["10:15", "10:26", "11:25", "NORMAL", ""], //6//
  ["11:15", "11:26", "12:25", "NORMAL", ""], //7//
  ["11:45", "11:56", "12:40", "SEMI-DIRETO", "EXEPTO JULHO/AGOSTO"], //8//
  ["12:15", "12:26", "13:25", "NORMAL",""], //9//
  ["12:45", "12:56", "13:40", "SEMI-DIRETO", ""], //10//
  ["13:15", "13:26", "14:25", "NORMAL", ""], //11//
  ["13:30", "13:41", "14:25", "SEMI-DIRETO", "APENAS PERIODO ESCOLAR"], //12//
  ["13:45", "13:56", "14:55", "NORMAL", "APENAS PERIODO ESCOLAR"], //13//
  ["14:00", "14:11", "14:55", "SEMI-DIRETO", ""], //14//
  ["14:15", "14:26", "15:25", "NORMAL", ""], //15//
  ["15:15", "15:26", "16:25", "NORMAL", ""], //16//
  ["15:45", "15:56", "16:40", "SEMI-DIRETO", ""], //17//
  ["16:15", "16:26", "17:25", "NORMAL", ""], //18//
  ["16:25", "16:36", "17:20", "DIRETO", ""], //19//
  ["16:45", "16:56", "17:55", "NORMAL", ""], //20//
  ["16:55", "17:06", "17:50", "DIRETO", ""], //21//
  ["17:15", "17:26", "18:25", "NORMAL", ""], //22//
  ["17:25", "17:36", "18:20", "DIRETO", ""], //23//
  ["17:45", "17:56", "18:55", "NORMAL", ""], //24//
  ["17:55", "18:06", "18:50", "DIRETO", ""], //25//
  ["18:15", "18:26", "19:25", "NORMAL", ""], //26//
  ["18:25", "18:36", "19:20", "DIRETO", ""], //27//
  ["18:45", "18:56", "19:55", "NORMAL", ""], //28//
  ["19:00", "19:11", "19:55", "SEMI-DIRETO", ""], //29//
  ["19:15", "19:26", "20:25", "NORMAL", ""], //30//
  ["19:45", "19:56", "20:40", "SEMI-DIRETO", ""], //31//
  ["20:15", "20:26", "21:25", "NORMAL", ""], //32//
  ["21:15", "21:26", "22:25", "NORMAL", ""], //33//
  ["22:15", "22:26", "23:25", "NORMAL", ""], //34//
  ["00:15", "00:26", "01:25", "NORMAL", ""] //35//
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
  ["06:45", "06:56", "07:55", "NORMAL", ""],
  ["08:15", "08:26", "09:25", "NORMAL", ""],
  ["10:15", "10:26", "11:25", "NORMAL", ""],
  ["12:15", "12:26", "13:25", "NORMAL", ""],
  ["12:45", "12:56", "13:40", "SEMI-DIRETO", ""],
  ["13:15", "13:26", "14:25", "NORMAL", ""],
  ["14:00", "14:11", "14:55", "SEMI-DIRETO", ""],
  ["14:15", "14:26", "15:25", "NORMAL", ""],
  ["15:15", "15:26", "16:25", "NORMAL", ""],
  ["16:15", "16:26", "17:25", "NORMAL", ""],
  ["17:15", "17:26", "18:25", "NORMAL", ""],
  ["18:15", "18:26", "19:25", "NORMAL", ""],
  ["19:00", "19:11", "19:55", "SEMI-DIRETO", ""],
  ["20:15", "20:26", "21:25", "NORMAL", ""],
  ["22:15", "22:26", "23:25", "NORMAL", ""],
  ["00:15", "00:26", "01:25", "NORMAL", ""]
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
  ["06:45", "06:56", "07:55", "NORMAL", ""],
  ["08:15", "08:26", "09:25", "NORMAL", ""],
  ["10:15", "10:26", "11:25", "NORMAL", ""],
  ["12:15", "12:26", "13:25", "NORMAL", ""],
  ["14:15", "14:26", "15:25", "NORMAL", ""],
  ["16:15", "16:26", "17:25", "NORMAL", ""],
  ["18:15", "18:26", "19:25", "NORMAL", ""],
  ["19:00", "19:11", "19:55", "SEMI-DIRETO", ""],
  ["20:15", "20:26", "21:25", "NORMAL", ""],
  ["22:15", "22:26", "23:25", "NORMAL", ""],
  ["00:15", "00:26", "01:25", "NORMAL", ""]
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
  ["06:20", "06:40"], //1
  ["06:55", "07:25"], //2
  ["07:10", "07:45"], //3
  ["08:00", "08:35"], //4
  ["08:25", "09:00"], //5
  ["08:50", "09:25"], //6
  ["09:15", "09:50"], //7
  ["09:40", "10:15"], //8
  ["10:05", "10:40"], //9
  ["10:30", "11:05"], //10
  ["10:55", "11:30"], //11
  ["11:20", "11:55"], //12
  ["11:45", "12:20"], //13
  ["12:10", "12:45"], //14
  ["12:35", "13:10"], //15
  ["13:00", "13:35"], //16
  ["13:25", "14:00"], //17
  ["13:50", "14:25"], //18
  ["14:15", "14:50"], //19
  ["14:40", "15:15"], //20
  ["15:05", "15:40"], //21
  ["15:30", "16:05"], //22
  ["15:55", "16:30"], //23
  ["16:20", "16:55"], //24
  ["16:45", "17:20"], //25
  ["17:10", "17:45"], //26
  ["17:35", "18:10"], //27
  ["18:00", "18:35"], //28
  ["18:25", "19:00"], //29
  ["18:50", "19:25"], //30
  ["19:10", "19:45"], //31
  ["19:35", "20:05"], //32
  ["20:00", "20:30"]  //33
]

// 5 PEDRULHA -> ESTÁDIO

SMTUC5Volta = 
[
  ["06:40", "07:10"], //1
  ["07:25", "08:00"], //2
  ["07:45", "08:25"], //3
  ["08:10", "08:50"], //4
  ["08:35", "09:15"], //5
  ["09:00", "09:40"], //6
  ["09:25", "10:05"], //7
  ["09:50", "10:30"], //8
  ["10:15", "10:55"], //9
  ["10:40", "11:20"], //10
  ["11:05", "11:45"], //11
  ["11:30", "12:10"], //12
  ["11:55", "12:35"], //13
  ["12:20", "13:00"], //14
  ["12:45", "13:25"], //15
  ["13:10", "13:50"], //16
  ["13:35", "14:15"], //17
  ["14:00", "14:40"], //18
  ["14:25", "15:05"], //19
  ["14:50", "15:30"], //20
  ["15:15", "15:55"], //21
  ["15:40", "16:20"], //22
  ["16:05", "16:45"], //23
  ["16:30", "17:10"], //24
  ["16:55", "17:35"], //25
  ["17:20", "18:00"], //26
  ["17:45", "18:25"], //27
  ["18:10", "18:50"], //28
  ["18:35", "19:10"], //29
  ["19:00", "19:35"], //30
  ["19:25", "20:00"], //31
  ["20:30", "20:55"]  //32
]

// 35 PEDRULHA -> RBL

SMTUC35Volta =
[
  ["07:20", "07:29"], //1
  ["07:50", "08:06"], //2
  ["08:55", "09:11"], //3
  ["09:55", "10:08"], //4
  ["10:50", "11:04"], //5
  ["11:50", "12:06"], //6
  ["12:50", "13:06"], //7
  ["14:00", "14:18"], //8
  ["15:00", "15:16"], //9
  ["16:00", "16:14"], //10
  ["17:00", "17:18"], //11
  ["18:00", "18:16"], //12
  ["19:00", "19:16"], //13
  ["19:55", "20:04"]  //14
]

// 7T CTT -> SÂO JOSÉ

SMTUC7TIda =
[
  ["06:10", "06:16"], //1
  ["06:48", "06:56"], //2
  ["07:11", "07:21"], //3
  ["07:33", "07:43"], //4
  ["07:58", "08:08"], //5
  ["08:24", "08:34"], //6
  ["08:49", "08:59"], //7
  ["09:15", "09:25"], //8
  ["09:40", "09:50"], //9
  ["10:06", "10:16"], //10
  ["10:31", "10:41"], //11
  ["10:57", "11:07"], //12
  ["11:22", "11:32"], //13
  ["11:48", "11:58"], //14
  ["12:13", "12:23"], //15
  ["12:38", "12:49"], //16
  ["13:04", "13:14"], //17
  ["13:30", "13:40"], //18
  ["13:55", "14:05"], //19
  ["14:21", "14:31"], //20
  ["14:46", "14:56"], //21
  ["15:12", "15:22"], //22
  ["15:37", "15:47"], //23
  ["16:03", "16:13"], //24
  ["16:28", "16:38"], //25
  ["16:54", "17:04"], //26
  ["17:19", "17:30"], //27
  ["17:45", "17:55"], //28
  ["18:10", "18:20"], //29
  ["18:36", "18:48"], //30
  ["19:01", "19:13"], //31
  ["19:31", "19:43"], //32
  ["20:01", "20:11"], //33
  ["20:46", "20:56"], //34
  ["21:36", "21:46"], //35
  ["22:26", "22:36"], //36
  ["23:11", "23:19"], //37
  ["23:51", "00:01"]  //38
];

// FUNÇÃO PARA MOSTRAR HORÁRIO

function mostrarHorario (horarioAMostrar)
{
  if (horarioAMostrar == "metroMondegoIda")
  {
    document.getElementsByClassName("botaoHorario")[0].style.border = "3px solid black";
    document.getElementsByClassName("botaoHorario")[1].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[2].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[3].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[4].style.border = "2px solid black";
    document.getElementsByClassName("botaoHorario")[5].style.border = "2px solid black";
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
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[0]+"</td><td>"+metroMondegoIdaDomingoFeriado[0][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[0][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[0][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[0][3]+"</td>"+
      "</tr>"+ 
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[1]+"</td><td>"+metroMondegoIdaDomingoFeriado[1][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[1][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[1][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[1][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[2]+"</td><td>"+metroMondegoIdaDomingoFeriado[2][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[2][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[2][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[2][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[3]+"</td><td>"+metroMondegoIdaDomingoFeriado[3][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[3][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[3][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[3][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[4]+"</td><td>"+metroMondegoIdaDomingoFeriado[4][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[4][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[4][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[4][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[5]+"</td><td>"+metroMondegoIdaDomingoFeriado[5][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[5][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[5][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[5][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[6]+"</td><td>"+metroMondegoIdaDomingoFeriado[6][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[6][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[6][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[6][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[7]+"</td><td>"+metroMondegoIdaDomingoFeriado[7][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[7][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[7][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[7][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[8]+"</td><td>"+metroMondegoIdaDomingoFeriado[8][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[8][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[8][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[8][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[9]+"</td><td>"+metroMondegoIdaDomingoFeriado[9][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[9][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[9][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[9][3]+"</td>"+
      "</tr>"+
      "<tr>"+
      "<td>"+metroMondegoIdaDomingoFeriadoSerpins[10]+"</td><td>"+metroMondegoIdaDomingoFeriado[10][0]+"</td><td>"+metroMondegoIdaDomingoFeriado[10][1]+"</td><td>"+metroMondegoIdaDomingoFeriado[10][2]+"</td><td>"+metroMondegoIdaDomingoFeriado[10][3]+"</td>"+
      "</tr>"+
      "</table>"+

      "<h3>Tarifário</h3>"+
      "<table>"+
      "<tr>"+
      "<th>Partida</th><th>Chegada</th><th>Bilhete</th><th>Passe</th>"+
      "</tr>"+
      "<tr>"+
      "<td>Lousã</td><td>São José</td><td>2,65€</td><td>44,15€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Lousã</td><td>Portagem</td><td>3,15€</td><td>52,95€</td>"+
      "</tr>"+
      "<tr>"+
      "<td>Serpins</td><td>Lousã</td><td>1,45€</td><td>34,70€</td>"+
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
      "<th>Bilhete</th><th>Passe</th>"+
      "</tr>"+
      "<tr>"+
      "<td>1.60€</td><td>30€</td>"+
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
      "<th>Bilhete</th><th>Passe</th>"+
      "</tr>"+
      "<tr>"+
      "<td>1.60€</td><td>30€</td>"+
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
      "<th>Bilhete</th><th>Passe</th>"+
      "</tr>"+
      "<tr>"+
      "<td>1.60€</td><td>30€</td>"+
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
      "<th>Bilhete</th><th>Passe</th>"+
      "</tr>"+
      "<tr>"+
      "<td>1.60€</td><td>30€</td>"+
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
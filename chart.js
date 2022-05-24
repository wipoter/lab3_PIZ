let source= 'file:///D:/ДЗ/Prog/Lab03PIZ';
let figures = document.querySelectorAll('img[class=chess_figure]');
let chess = ['White Pawn','White Bishop','White Knight','White Rook','White Queen','White King','Black Pawn','Black Bishop','Black Knight','Black Rook','Black Queen','Black King'];
let amPawn = document.getElementsByName("PawnW").length,
    amBishop = document.getElementsByName("BishopW").length,
    amKnight = document.getElementsByName("KnightW").length,
    amRook = document.getElementsByName("RookW").length,
    amQueen = document.getElementsByName("QueenW").length,
    amKing = document.getElementsByName("KingW").length,

    amBlPawn = document.getElementsByName("PawnB").length,
    amBlBishop = document.getElementsByName("BishopB").length,
    amBlKnight = document.getElementsByName("KnightB").length,
    amBlRook = document.getElementsByName("RookB").length,
    amBlQueen = document.getElementsByName("QueenB").length,
    amBlKing = document.getElementsByName("KingB").length;

function createDiagram() {
    myChart = new Chart(document.getElementById("myChart"), {
        type: 'bar',
        data: {
            labels: chess,
            datasets: [
                {
                    label: "Pieces",
                    backgroundColor: ["#ffffff", "#ffffff","#ffffff","#ffffff", "#ffffff", "#ffffff", "#000000","#000000","#000000","#000000", "#000000","#000000"],
                    data: [amPawn, amBishop, amKnight, amRook, amQueen, amKing, amBlPawn, amBlBishop, amBlKnight, amBlRook, amBlQueen, amBlKing]
                }
            ]
        },
        options: {
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero: true,
                        fontSize: 20
                    }
                }],
                xAxes:[{
                    ticks:{
                        fontSize:20
                    }
                }]
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'My chess diagram',
                fontSize: 20
            }
        }
    });
}
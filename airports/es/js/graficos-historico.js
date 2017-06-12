//<!--Gráficos-->
         // -----------------------------
        var datatemp = {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
            datasets: [
                {
                    label: "Gráfico 4",
                    fillColor: "rgba(227, 171, 67, 0.2)",
                    strokeColor: "rgb(227, 171, 67)",
                    pointColor: "rgb(227, 171, 67)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgb(227, 171, 67)",
                    data: [32, 34, 29, 27, 22, 20, 18]
                }
            ]
        };
        setTimeout(function () {
            var ctx = document.getElementById("graficotemperatura").getContext("2d");
            window.myLine = new Chart(ctx).Line(datatemp, {
                responsive: true
            });
        }, 1000);


    // -----------------------------
        var dataprecipitacao = {
            labels: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
            datasets: [
                {
                    label: "Gráfico 3",
                    fillColor: "rgba(67, 196, 227, 0.2)",
                    strokeColor: "rgb(67, 190, 227)",
                    pointColor: "rgb(67, 202, 227)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgb(67, 165, 227)",
                    data: [10, 5, 7, 24, 5, 13, 2, 8 , 30, 20 , 6, 9, 2, 15]
                }
            ]
        };

        setTimeout(function () {
            var ctx = document.getElementById("graficoprecipitacao").getContext("2d");
            window.myLine = new Chart(ctx).Line(dataprecipitacao, {
                responsive: true
            });
        }, 600);

    // -----------------------------
        var dataumidade = {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
                {
                    label: "Gráfico 4",
                    fillColor: "rgba(82, 142, 193, 0.63)",
                    highlightFill: "rgb(82, 142, 193)",
                    strokeColor: "rgba(67, 190, 227,0)",
                    pointColor: "rgb(67, 202, 227)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgb(67, 165, 227)",
                    data: [40, 30, 35, 30, 25, 20, 15, 22, 28, 32, 30, 25]
                }
            ]
        };
        setTimeout(function () {
            var ctx = document.getElementById("graficoumidade").getContext("2d");
            window.myBar = new Chart(ctx).Bar(dataumidade, {
                responsive: true
            });
        }, 1000);
//---------------------------
var dataradiacao = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Tipo 1",
            fillColor: "rgba(255, 187, 62, 0.8)",
            strokeColor: "rgba(221, 154, 30, 0)",
            highlightFill: "rgb(255, 187, 62)",
            highlightStroke: "rgba(199, 146, 60, 0)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "Tipo 2",
            fillColor: "rgba(255, 227, 75, 0.8)",
            strokeColor: "rgba(199, 179, 20, 0)",
            highlightFill: "rgb(255, 227, 75)",
            highlightStroke: "rgba(190, 171, 27, 0)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
    setTimeout(function () {
        var ctx = document.getElementById("graficoradiacao").getContext("2d");
        window.myBar = new Chart(ctx).Bar(dataradiacao, {
            responsive: true
        });
    }, 2000);
//---------------------------
var datapressao = {
    labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    datasets: [
        {
            
            label: "Tipo 1",
            fillColor: "rgba(153, 217, 170, 0.8)",
            strokeColor: "rgba(153, 217, 170, 0)",
            highlightFill: "rgb(153, 217, 170)",
            highlightStroke: "rgba(153, 217, 170,0)",
            data: [901.9, 808, 890, 810, 790, 910, 900]
        }
    ]
};
    setTimeout(function () {
        var ctx = document.getElementById("graficopressao").getContext("2d");
        window.myBar = new Chart(ctx).Bar(datapressao, {
            responsive: true
        });
    }, 2000);
//------------------------------
        var datavento = {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
            datasets: [
                {
                    label: "Gráfico 4",
                    fillColor: "rgba(129, 199, 216, 0.2)",
                    strokeColor: "rgb(135, 191, 208)",
                    pointColor: "rgb(121, 202, 217)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgb(128, 178, 209)",
                    data: [40, 30, 35, 30, 25, 20, 15]
                }
            ]
        };
        setTimeout(function () {
            var ctx = document.getElementById("graficovento").getContext("2d");
            window.myLine = new Chart(ctx).Line(datavento, {
                responsive: true
            });
        }, 2000);
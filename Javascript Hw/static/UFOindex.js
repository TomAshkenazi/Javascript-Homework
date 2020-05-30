var TableData = data

var tbody = d3.select("tbody");

TableData.forEach((UFOsightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOsightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var submit_button = d3.selectAll("#filter-btn");
var empty = d3.select("tbody");
submit_button.on("click", handleSubmit);

function handleSubmit() {
    empty.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(TableData);

    let filteredData = TableData;
    if (TableData){
        filteredData = filteredData.filter(
    row => row.datetime === inputValue

    )};

    console.log(filteredData);

    filteredData.forEach(function (filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");
        
        Object.entries(filteredReport).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

var submit_button2 = d3.selectAll("#filter-btn2");
submit_button2.on("click", handleSubmit2);

function handleSubmit2() {
    empty.html("");
    var inputElement2 = d3.select("#city");
    var inputValue2 = inputElement2.property("value");
    console.log(inputValue2);
    console.log(TableData);

    let filteredData2 = TableData;
    if (TableData){
        filteredData2 = filteredData2.filter(
    row => row.city === inputValue2

    )};

    console.log(filteredData2);

    filteredData2.forEach(function (filteredReport2) {
        console.log(filteredReport2);
        var row = tbody.append("tr");
        
        Object.entries(filteredReport2).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

var submit_button3 = d3.selectAll("#filter-btn3");
submit_button3.on("click", handleSubmit3);

function handleSubmit3() {
    empty.html("");
    var inputElement3 = d3.select("#state");
    var inputValue3 = inputElement3.property("value");
    console.log(inputValue3);
    console.log(TableData);

    let filteredData3 = TableData;
    if (TableData){
        filteredData3 = filteredData3.filter(
    row => row.state === inputValue3

    )};

    console.log(filteredData3);

    filteredData3.forEach(function (filteredReport3) {
        console.log(filteredReport3);
        var row = tbody.append("tr");
        
        Object.entries(filteredReport3).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

var submit_button4 = d3.selectAll("#filter-btn4");
submit_button4.on("click", handleSubmit4);

function handleSubmit4() {
    empty.html("");
    var inputElement4 = d3.select("#country");
    var inputValue4 = inputElement4.property("value");
    console.log(inputValue4);
    console.log(TableData);

    let filteredData4 = TableData;
    if (TableData){
        filteredData4 = filteredData4.filter(
    row => row.country === inputValue4

    )};

    console.log(filteredData4);

    filteredData4.forEach(function (filteredReport4) {
        console.log(filteredReport4);
        var row = tbody.append("tr");
        
        Object.entries(filteredReport4).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

var submit_button5 = d3.selectAll("#filter-btn5");
submit_button5.on("click", handleSubmit5);

function handleSubmit5() {
    empty.html("");
    var inputElement5 = d3.select("#shape");
    var inputValue5 = inputElement5.property("value");
    console.log(inputValue5);
    console.log(TableData);

    let filteredData5 = TableData;
    if (TableData){
        filteredData5 = filteredData5.filter(
    row => row.shape === inputValue5

    )};

    console.log(filteredData5);

    filteredData5.forEach(function (filteredReport5) {
        console.log(filteredReport5);
        var row = tbody.append("tr");
        
        Object.entries(filteredReport5).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
function addClass(){
    var table = document.getElementById("classes_table");
    var newrow = table.insertRow(-1);
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);

    var select = document.createElement('select');
    select.setAttribute('name', 'grade');

    var options = [
        { value: "4", text: "A" },
        { value: "3.7", text: "A-" },
        { value: "3.3", text: "B+" },
        { value: "3", text: "B" },
        { value: "2.7", text: "B-" },
        { value: "2.3", text: "C+" },
        { value: "2", text: "C" },
        { value: "1.7", text: "C-" },
        { value: "1.3", text: "D+" },
        { value: "1", text: "D" },
        { value: "0", text: "F" }
    ];

    options.forEach(function(option) {
        var optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        select.appendChild(optionElement);
    });



    cell1.innerHTML = '<input type="text">';
    cell2.innerHTML = '<input type="text">';
    cell3.appendChild(select);
}

function calcGPA(){
    var table = document.getElementById("classes_table");
    var sum = 0;
    var credits_sum = 0;
    var gpa = document.getElementById("GPA_Field");

    for(var i = 1; i < table.rows.length; i++){
        var credits_input = table.rows[i].cells[1].querySelector("input[type='text']").value;
        var grade_input = table.rows[i].cells[2].querySelector("select[name='grade']").value;
        
        var credits = parseFloat(credits_input);
        var grade = parseFloat(grade_input);
        
        if(!isNaN(credits) && !isNaN(grade)){
            sum += credits * grade;
            credits_sum += credits;
        }
    }

    var gpa_sum = sum / credits_sum;
    gpa_sum = gpa_sum.toFixed(2);
    gpa.textContent = gpa_sum;
}
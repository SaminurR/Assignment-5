document.getElementById("btn-click").addEventListener("click", function (event) {
    event.preventDefault();

    alert("Board Updated Successfully")
    const value = 1;

    const taskAssigned = document.getElementById("taskAssigned").innerText;
    const convertedToNum1 = parseFloat(taskAssigned);

    const updatedValue = convertedToNum1 - value;

    document.getElementById("taskAssigned").innerText = updatedValue;


    const taskAssignedComplete = document.getElementById("task-assigned-complete").innerText;
    const convertedToNum2 = parseFloat(taskAssignedComplete);

    const updatedValue2 = convertedToNum2 + value;

    document.getElementById("task-assigned-complete").innerText = updatedValue2;

    const btn = document.getElementById("btn-click");


    btn.setAttribute("disabled", true);


});
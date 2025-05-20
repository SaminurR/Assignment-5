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

    // const buttons = ["btn-click", "btn-click2", "btn-click3", "btn-click4", "btn-click5", "btn-click6",]

    const btn = document.getElementById("btn-click");
    btn.setAttribute("disabled", true);

    const container = document.getElementById("activity-log")
    const realTime = new Date().toLocaleTimeString();
    const p = document.createElement("p");
    p.className = "bg-[#F4F7FF] p-2.5 mb-7 w-11/12 rounded-xl"
    p.innerText = `You have Complete The Task Add Dark Mode at ${realTime}`;

    container.appendChild(p);


});



document.getElementById("btn-click2").addEventListener("click", function (event) {
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

    const btn = document.getElementById("btn-click2");
    btn.setAttribute("disabled", true);

    const container = document.getElementById("activity-log")
    const realTime = new Date().toLocaleTimeString();
    const p = document.createElement("p");
    p.className = "bg-[#F4F7FF] p-2.5 mb-7 w-11/12 rounded-xl"
    p.innerText = `You have Complete The Task Add Dark Mode at ${realTime}`;

    container.appendChild(p);

});

document.getElementById("btn-click3").addEventListener("click", function (event) {
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

    const btn = document.getElementById("btn-click3");
    btn.setAttribute("disabled", true);

    const container = document.getElementById("activity-log")
    const realTime = new Date().toLocaleTimeString();
    const p = document.createElement("p");
    p.className = "bg-[#F4F7FF] p-2.5 mb-7 w-11/12 rounded-xl"
    p.innerText = `You have Complete The Task Add Dark Mode at ${realTime}`;

    container.appendChild(p);

});

document.getElementById("btn-click4").addEventListener("click", function (event) {
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

    const btn = document.getElementById("btn-click4");
    btn.setAttribute("disabled", true);

    const container = document.getElementById("activity-log")
    const realTime = new Date().toLocaleTimeString();
    const p = document.createElement("p");
    p.className = "bg-[#F4F7FF] p-2.5 mb-7 w-11/12 rounded-xl"
    p.innerText = `You have Complete The Task Add Dark Mode at ${realTime}`;

    container.appendChild(p);

});

document.getElementById("btn-click5").addEventListener("click", function (event) {
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

    const btn = document.getElementById("btn-click5");
    btn.setAttribute("disabled", true);

    const container = document.getElementById("activity-log")
    const realTime = new Date().toLocaleTimeString();
    const p = document.createElement("p");
    p.className = "bg-[#F4F7FF] p-2.5 mb-7 w-11/12 rounded-xl"
    p.innerText = `You have Complete The Task Add Dark Mode at ${realTime}`;

    container.appendChild(p);

});

document.getElementById("btn-click6").addEventListener("click", function (event) {
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

    const btn = document.getElementById("btn-click6");
    btn.setAttribute("disabled", true);

    const container = document.getElementById("activity-log")
    const realTime = new Date().toLocaleTimeString();
    const p = document.createElement("p");
    p.className = "bg-[#F4F7FF] p-2.5 mb-7 w-11/12 rounded-xl"
    p.innerText = `You have Complete The Task Add Dark Mode at ${realTime}`;

    container.appendChild(p);

});


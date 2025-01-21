let parsedData = JSON.parse(jsonDataRestaurant);

let libraryTable = document.getElementById("main-table");

let libraryTableHeader = document.createElement("tr");

libraryTable.appendChild(libraryTableHeader);

let tableHeaderDishID = document.createElement("th");
libraryTableHeader.appendChild(tableHeaderDishID);
tableHeaderDishID.innerText = "DishID";

let tableHeaderDishName = document.createElement("th");
libraryTableHeader.appendChild(tableHeaderDishName);
tableHeaderDishName.innerText = "DishName";

let tableHeaderRecipeChef = document.createElement("th");
libraryTableHeader.appendChild(tableHeaderRecipeChef);
tableHeaderRecipeChef.innerText = "RecipeChef";

let tableHeaderPrepTimeMinutes = document.createElement("th");
libraryTableHeader.appendChild(tableHeaderPrepTimeMinutes);
tableHeaderPrepTimeMinutes.innerText = "PrepTimeMinutes";

let tableHeaderPrice = document.createElement("th");
libraryTableHeader.appendChild(tableHeaderPrice);
tableHeaderPrice.innerText = "Price";

let tableHeaderCurrentAvailability = document.createElement("th");
libraryTableHeader.appendChild(tableHeaderCurrentAvailability);
tableHeaderCurrentAvailability.innerText = "Avaliability";

function displayData(){


for ( dish of parsedData)
{
    let dishRow = document.createElement("tr");
    libraryTable.appendChild(dishRow);

    let dishCellID = document.createElement("td");
    dishRow.appendChild(dishCellID);
    dishCellID.innerText = dish.DishID ;

    let dishCellName = document.createElement("td");
    dishRow.appendChild(dishCellName);
    dishCellName.innerText = dish.DishName ;
    
    let dishRecipeChef = document.createElement("td");
    dishRow.appendChild(dishRecipeChef);
    dishRecipeChef.innerText = dish.RecipeChef ;

    let dishPrepTimeMinutes= document.createElement("td");
    dishRow.appendChild(dishPrepTimeMinutes);
    dishPrepTimeMinutes.innerText = dish.PrepTimeMinutes ;

    let dishPrice= document.createElement("td");
    dishRow.appendChild(dishPrice);
    dishPrice.innerText = dish.Price ;
    
    let dishCurrentAvailability= document.createElement("td");
    dishRow.appendChild(dishCurrentAvailability);
    dishCurrentAvailability.innerText = dish.CurrentAvailability;


}
}

displayData(); 

function filterResults() {
    document.getElementById("search").addEventListener("keyup", function () {
        let value = this.value.toLowerCase();
        console.log("Value:", value);
        
    
    let table = document.getElementById("main-table");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let display = false;

        // Choose the column index you want to search (e.g., DishName in this case)
        let columnToSearch = 1; // 1 corresponds to the DishName column

        let cellValue = cells[columnToSearch].textContent.toLowerCase();
        console.log (cellValue);


        // Check if the cell value contains the search term
        if (cellValue.includes(value)) {
            display = true;
            console.log (display);
        }
        else{
            display = false ;
        }

        // Update the display property of the row
        // Update the display property of the row
if (display) {
    rows[i].style.display = "table-row";
} else {
    rows[i].style.display = "none";
}

}
});
}
filterResults();

















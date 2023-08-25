// Select all elements with class 'fa' and convert them to an array
let btnRemove = Array.from(document.getElementsByClassName('fa'));

// Add a click event listener to each 'fa' element
for (let btn of btnRemove) {
    btn.addEventListener('click', function () {
        // Remove the parent node (presumably an item) when clicked
        btn.parentNode.remove();
        // Recalculate and update the total price
        CalcultotalPrice();
    });
}

// Function to calculate and update the total price
function CalcultotalPrice() {
    // Select all elements with class 'priceNumber' and convert to an array
    let PriceOfElement = Array.from(document.getElementsByClassName("priceNumber"));
    // Select all elements with class 'Qty' and convert to an array
    let QtyOfElement = Array.from(document.getElementsByClassName('Qty'));
    let TotalPrice = 0;

    // Calculate total price based on price and quantity of each item
    for (let i = 0; i < PriceOfElement.length; i++) {
        TotalPrice += (PriceOfElement[i].innerHTML * QtyOfElement[i].innerHTML);
    }

    // Update the element with ID 'tp' to display the calculated total price
    return document.getElementById('tp').innerHTML = TotalPrice;
}

// Select all elements with class 'add' and log them to the console
let plus = document.getElementsByClassName('add');
console.log(plus);

// Add a click event listener to each 'add' element
for (let btn of plus) {
    btn.addEventListener('click', function () {
        // Increase the value of the previous sibling element (quantity)
        btn.previousElementSibling.innerHTML++;
        // Recalculate and update the total price
        CalcultotalPrice();
    });
}

// Select all elements with class 'moins' and convert them to an array
let substract = Array.from(document.getElementsByClassName('moins'));

// Add a click event listener to each 'moins' element
for (let btn of substract) {
    btn.addEventListener('click', function () {
        // Decrease the value of the next sibling element (quantity) if greater than 0
        if (btn.nextElementSibling.innerHTML > 0) {
            btn.nextElementSibling.innerHTML--;
            // Recalculate and update the total price
            CalcultotalPrice();
        }
    });
}

// Select all elements with class 'material-icons' and convert them to an array
let like = Array.from(document.getElementsByClassName('material-icons'));

// Add a click event listener to each 'material-icons' element
for (let i of like) {
    i.addEventListener("click", function () {
        // Toggle the class 'myColor' to change the color or style
        i.classList.toggle('myColor');
    });
}

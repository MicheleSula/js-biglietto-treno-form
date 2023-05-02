// Variables
const ticketGenerator = document.querySelector("#ticket-generator");
const clearValues = document.querySelector("#clear-values");


// Function to generate train ticket
ticketGenerator.addEventListener("click",
    function createTicket() {

        // Variables LET
        let userName = document.getElementById("username").value;
        let age = document.getElementById("age").value;
        let km = document.getElementById("km").value;
        
        // Variables CONST
        const lettersRegExp = /^[A-Za-z\s]+$/;
        const minCp = 10000;
        const maxCp = 99999;
        const minCarriage = 1;
        const maxCarriage = 12;
        
        // Price
        price = km * 0.21;


        // Discount for young (<18) and old (>=65) age
        if (age == "young") {
        price *= 0.8;
        } else if (age == "old") {
        price *= 0.6;
        } 

        // Price to fixed
        price = price.toFixed(2);

        // Generation of ticket and alert when wrong inputs are detected
        if ((km != "" && km !== null) && (userName != "" && userName !== null)) {
            document.getElementById("ticket").innerHTML = price + "€";
            document.getElementById("nome").innerHTML = userName;
          } else  {
            alert("Non hai compilato tutti i campi!");
            document.getElementById("ticket").innerHTML = "";
            document.getElementById("nome").innerHTML = "";
          }
        
        // Letters checker for username input with error message toggle
        if (userName.match(lettersRegExp)) {
            document.getElementById("lettersHelp").classList.add('hidden-text');
        } else {
            // alert("In nome e cognome vanno inserite solo lettere!");
            document.getElementById("lettersHelp").classList.remove('hidden-text');
            document.getElementById("nome").innerHTML = "";
            document.getElementById("ticket").innerHTML = "";
        }

        // Numbers checker for KM input with error message toggle
        if (isNaN(km)) {
            // alert("In chilometri vanno inseriti solo numeri!");
            document.getElementById("numbersHelp").classList.remove('hidden-text');
            document.getElementById("nome").innerHTML = "";
            document.getElementById("ticket").innerHTML = "";
            return false;
        } else {
            document.getElementById("numbersHelp").classList.add('hidden-text');
        }

        // CP code creating random number
        cpRandomNumber = getRandomNumberCp(minCp, maxCp);

        function getRandomNumberCp(minCp, maxCp) {
            if ((km != "" && km !== null) && (userName != "" && userName !== null)) {
            min = Math.ceil(minCp);
            max = Math.floor(maxCp);
            return Math.floor(Math.random() * (maxCp - minCp) + minCp);
            } else if (userName.match(lettersRegExp) && isNaN(km)){
                return cpRandomNumber = "";
            } else {
                return cpRandomNumber = "";
            }
          }
        
          document.getElementById("codice-cp").innerHTML = cpRandomNumber;

          // Creating random number for carriage
        carriageRandomNumber = getRandomNumberCarriage(minCarriage, maxCarriage);

        function getRandomNumberCarriage(minCarriage, maxCarriage) {
            min = Math.ceil(minCarriage);
            max = Math.floor(maxCarriage);
            return Math.floor(Math.random() * (maxCarriage - minCarriage) + minCarriage);
          }
        
          document.getElementById("numero-carrozza").innerHTML = carriageRandomNumber;
          
          
    }
);

// Inputclear on-click
clearValues.addEventListener("click",
    function clearFields() {
        // Clear form data
        let km = document.getElementById("km");
        let userName = document.getElementById("username");
        
        if (km.value != "") {
            km.value = "";
        }

        if (userName.value != "") {
            userName.value = "";
        }
        
        // Clear generated ticket data
        document.getElementById("ticket").innerHTML = "";
        document.getElementById("nome").innerHTML = "";
        document.getElementById("codice-cp").innerHTML = "";
        document.getElementById("numero-carrozza").innerHTML = "";
    }
);


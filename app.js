        const successMsg = document.getElementById("matched");
        successMsg.style.display = "none";
        const errorMsg = document.getElementById("tryAgain");
        errorMsg.style.display = "none";

        const pinGenerator = document.getElementById("pinGenerator");
        pinGenerator.addEventListener("click", function(){
             var pin = (Math.floor(Math.random() * 1000) + 999);
             document.getElementById("inputPin").value = pin; 
        })


        document.getElementById('key-pad').addEventListener('click', function (event) {
            const number = event.target.innerText;
            const calcInput = document.getElementById('output');
            if (isNaN(number)) {
                if (number == 'C') {
                    calcInput.value = '';
                }
            }
            else {
                const previousNumber = calcInput.value;
                const newNumber = previousNumber + number;
                calcInput.value = newNumber;
            }
        });

        


        document.getElementById("submitBtn").addEventListener('click', function() {
            const randomPin = document.getElementById("inputPin").value;
        const typedPin = document.getElementById("output").value;
            
            if(randomPin == typedPin){
                successMsg.style.display = "block";
            }
            else{
                errorMsg.style.display = "block";
            }
                
        })

        


        document.getElementById("chance").addEventListener('click', function() {

            document.getElementById("inputPin").value = '';
            document.getElementById("output").value = '';
            successMsg.style.display = "none";
            errorMsg.style.display = "none";

        })
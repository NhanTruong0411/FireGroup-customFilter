myReset = () => {
   document.getElementById("myInput").value = "";
}

myFunction = () => {
   console.time("timer");
   let input = document.getElementById("myInput").value;
   let compareAction = document.getElementById('compareAction').value;
   let myCompare = Number(document.getElementById('myCompare').value);
   let messageText = document.getElementById('message-error');
   let messageCompare = document.getElementById('message-error-com');
   let resultDiv = document.getElementById('result');
   let resultString = "";
   // check input rỗng
   if (!input) {
      messageText.innerHTML = "This field is required !";
      messageText.style.visibility = "visible";
   } 
   // check comparison value rỗng   
   if (!myCompare) {
      messageCompare.innerHTML = "This field is required !";
      messageCompare.style.visibility = "visible";
   }
   
   else {
      messageText.style.visibility = "hidden";
      messageCompare.style.visibility = "hidden";
      // check các giá trị trong input có phải là number ko?
      let arrayInput = input.split(',').map(Number);
      for (let i = 0; i < arrayInput.length; i++) {
         if (isNaN(arrayInput[i])) {
            messageText.innerHTML = "This field must be a NUMBER and separate by a comma !";
            messageText.style.visibility = "visible";
            break;
         } 
      }
      let result = customFilter(arrayInput,compareAction,myCompare);
      resultString = "Result : ";
      result.forEach(el => {
         resultString += `${el}, `
      })
      resultString = resultString.slice(0, resultString.length-2); 
      resultDiv.innerHTML = resultString;
   }
   console.timeEnd("timer");
}

customFilter = (arrayInput, compareAction, myCompare) => {
   let result = [];

   arrayInput.forEach(element => {
      switch(compareAction) {
         case "=":
            if (element == myCompare) {
               result.push(element);
            }
            break;
         case ">":
            if (element > myCompare) {
               result.push(element);
            }
            break;
         case "<":
            if (element < myCompare) {
               result.push(element);
            }
            break;
         case ">=":
            if (element >= myCompare) {
               result.push(element);
            }
            break;
         case "<=":
            if (element <= myCompare) {
               result.push(element);
            }
            break;
         case "%":
            if (element % myCompare == 0) {
               result.push(element);
            }
            break;
         case "/":
            if (element % myCompare != 0) {
               result.push(element);
            }
            break;
      }
   });
   return result;
}

myFilter = () => {

}



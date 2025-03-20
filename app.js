let userinp = +prompt("Enter your pin");

let pin = 4456;
let currBal = 20000;


if (userinp === pin) {
     document.write("<h1>Correct pin code </h1>")
    console.log("Enter in ATM");

    let option = +prompt("Choose an option:\n1. Check Balance\n2. Withdraw Money\n3. Deposit\n4. Exit");

    if (option == 1) {
        document.write(`<h1>Your Current Balance Is</h1> ${currBal} </h1>`);


    }
    else if (option == 2) {
        let userinp1 = +prompt("Enter your witrthdrwal Amount");

        if (userinp1 > currBal) {

        document.write("<h1>IN Sufficient Balance </h1>");

        } else if (currBal -= userinp1) {
        document.write(`<h1>Your Remaining amount ${currBal} </h1>`);
        }

    } else if (option == 3) {
        let userinp2 = Number(prompt("Enter Your Deposit Amount"));

        if (currBal += userinp2) {
        document.write(`<h1>Your deposit amount ${currBal} </h1>`);
        }
    } else {
    document.writeg("<h1>Thank you for using the ATM! </h1>");
    }


} else {
    document.write(" <h1>Enter Wrong Pin Try Again </h1>");

}


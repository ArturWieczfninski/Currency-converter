{

    const calculatorResult = (amount, currency) => {
        const rateEUR = "4.67";
        const rateUSD = "3.41";
        const rateCHF = "4.73";
        const rateGBP = "5.39";

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
            case "CHF":
                return amount / rateCHF;
            case "GBP":
                return amount / rateGBP;

        }
    };


    const updateResultsText = (amount, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculatorResult(amount, currency);

        updateResultsText(amount, currency, result);
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);


    };

    init();


}
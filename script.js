var calcButton,
    resultTable,
    underWeight,
    normalWeight,
    overWeight,
    obesityFirstClass,
    obesitySecondClass,
    obesityThirdClass,
    getElement = function(id){
        return document.getElementById(id);
    }

window.onload = function () {
    calcButton = getElement("calculate");
    resultTable = getElement("results");
    underWeight = getElement("underWeight");
    normalWeight = getElement("normalWeight");
    overWeight = getElement("overWeight");
    obesityFirstClass = getElement("obesityFirstClass");
    obesitySecondClass = getElement("obesitySecondClass");
    obesityThirdClass = getElement("obesityThirdClass");


    calcButton.addEventListener("click", function () {
        resultTable.style.display = "none";

        var i;
        var activeElements = document.getElementsByClassName("active");
        var height = Number(getElement("height").value / 100);
        var weight = Number(getElement("weight").value);
        var index = (weight / (height * height)).toFixed(2);

        if ((height < 0.2 || height > 2.5) || (weight < 10 || weight > 300))
        {
            return false;

        }
        else {
            resultTable.style.display = "table";

            if (index < 18.5) {
                for (i = 0; i < activeElements.length; i++) {
                    activeElements[i].className = "";
                }
                underWeight.className = 'active';
            }
            else if (18.5 < index && index < 24.9) {
                for (i = 0; i < activeElements.length; i++) {
                    activeElements[i].className = "";
                }
                normalWeight.className = 'active';
            }
            else if (25 < index && index < 29.9) {
                for (i = 0; i < activeElements.length; i++) {
                    activeElements[i].className = "";
                }
                overWeight.className = 'active';
            }
            else if (30 < index && index < 34.9) {
                for (i = 0; i < activeElements.length; i++) {
                    activeElements[i].className = "";
                }
                obesityFirstClass.className = 'active';
            }
            else if (35 < index && index < 39.9) {
                for (i = 0; i < activeElements.length; i++) {
                    activeElements[i].className = "";
                }
                obesitySecondClass.className = 'active';
            }
            else if (40 < index) {
                for (i = 0; i < activeElements.length; i++) {
                    activeElements[i].className = "";
                }
                obesityThirdClass.className = 'active';
            }
        }

    }, true);
};


//Author: Christian Piedra Q
//Version 1.0

var TextAreaMain = document.getElementById("txttext");

//Create the action when the user copy text on computer
TextAreaMain.addEventListener('paste', function(event) {
    validateEnableButtons();
});

//Create the action when the user copy text on mobile
TextAreaMain.addEventListener('input', function(event) {
    validateEnableButtons();
});

//Variables of the Script
matriz = {
    a : "1aiuwuddwqd",
    b: "2bdascacfsaln",
    c: "3hgacsacsca",
    d: "8ajsjyugff",
    e: "7stwtqqwyyy",
    f: "nauay62bhch",
    g: "atqwq3rwew4",
    h: "11yyqwsqwec6",
    i: "a7d682s8ahd",
    j: "872qg1827232",
    k: "qr152n227aeoi",
    l: "q763aa272haewe",
    m: "7q7ade1827yad",
    n: "ahyqwy1277gaas",
    o: "oweuaj1726asf",
    p: "qayb31626qand",
    q: "61hayad1872ja",
    r: "ay171ad1827au",
    s: "knb261827adf",
    t: "816baxd12727",
    u: "9i0audnabacx23",
    v: "54bfa1127ajsf",
    w: "817173217ansh1",
    x: "a87178912jabs",
    y: "a7q7ad18278ua",
    z: "612833ad1287a",
    " " : "17gqgwgywygwgyq"
}

matriz = 
{
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

//METHODS OF THE HTML COMPONENTS 

//Method for encrypt Text
function encryptText(texttoencrypt)
{
    let textEncrypted = "";

    texttoencrypt.split("").map(function(element){
    
        if(matriz.hasOwnProperty(element))
        {
            textEncrypted = textEncrypted + matriz[element];
        }
        else
        {
            textEncrypted = textEncrypted + element;
        }
    });

    return textEncrypted;
}

//Method for Decrypt Text
function decryptText(textEncrypted)
{
    let textDecrypted = textEncrypted;

    Object.entries(matriz).forEach(([key, value]) =>
    {
        textDecrypted= textDecrypted.replaceAll(value, key);
    }
    );

    return textDecrypted;
}

//Validate the text for enable buttons
function textAreaValidator(e)
{
    validateEnableButtons();
}

//Action of the button Copy
function valueTextCopied()
{
    document.getElementById("infocopy").classList.remove("nodisplay");
    document.getElementById("infocopy").innerText = "Copiado!!!";
    swal("Texto Copiado", "El texto ha sido copiado, almacenelo o copielo para encriptar o desencriptar", "info");
}

//END OF THE FUNCTIONS OF THE OBJECTS OF THE HTML

//Functions of the Webpage Buttons
function Encrypt()
{
    let textInserted = document.getElementById("txttext").value;

    noDisplayErrors();

    if(checkConditions(textInserted) == true)
    {
        showPanelResults();
        clearTextArea();
        enableCopyButton();
        enableCleanButton();
        disableTextArea();
        focusButtonCopy();

        var textencypted = encryptText(textInserted);
        valueResultLabel(textencypted);

        swal("Información", "Se encriptó el mensaje de forma correcta", "success");
    }
    else
    {
        focusTextArea();
    }
}

function Decrypt()
{
    let textInserted = document.getElementById("txttext").value;

    noDisplayErrors();

    if(checkConditions(textInserted) == true)
    {
        showPanelResults();
        clearTextArea();
        enableCopyButton();
        enableCleanButton();
        disableTextArea();
    
        valueResultTitleLabel("Texto Desencriptado");
        focusButtonCopy();
    
        var textdecrypted = decryptText(textInserted);
        valueResultLabel(textdecrypted);

        swal("Información", "Se desencriptó el mensaje de forma correcta", "success");
    }
    else
    {
        focusTextArea();
    }
}

//Method 
function copyToClipboard()
{
    var copyText = document.getElementById("result").value;

   // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    valueTextCopied();
}

function actionClean()
{
    cleanPanelResults();
    copiedTextNonDisplay();
    disableCopyButton();
    disableCleanButton();
    enableTextArea();
    focusTextArea();
    valueResultTitleLabel("Resultados");
    valueResultLabel("No se ha escrito un texto aún");
}

//Check the conditions if the text has a specific requirements
function checkConditions(text)
{
    if(text == "")
    {
        showError("Debe de ingresar un texto");
        return false;
    }

    if(containsUppercase(text) == true)
    {   
        showError("El texto no puede contener mayúsculas, vuelva a intentarlo");
        focusTextArea();

        return false;
    }

    if(containsSpecialCaracters(text) == true)
    {
        showError("El texto no puede contener caracteres especiales, vuelva a intentarlo");
        focusTextArea();

        return false;
    }

    return true;
}

//Return if the text has special caracters
function containsSpecialCaracters(text)
{
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    return format.test(text) ? true : false;
}


function containsUppercase(str) {
    return /[A-Z]/.test(str);
}

function validateEnableButtons()
{
    let textInserted = document.getElementById("txttext").value;

    if(textInserted != "")
    {
        enableButtons();
    }
    else
    {
        disableButtons();
    }
}

//Show any error
function showError(message)
{
    document.getElementById("errorscontainer").classList.remove("errors");
    document.getElementById("errortext").innerText =message;
    swal("Información", message, "error");
}

//No display the div of the errors
function noDisplayErrors()
{
    document.getElementById("errorscontainer").classList.add("errors");
}

//Enable the buttons of encrypt and decrypt
function enableButtons()
{
    document.getElementById("btnencypt").disabled = false;
    document.getElementById("btndecrypt").disabled = false;
}

//Disable the buttons of encrypt and decrypt
function disableButtons()
{
    document.getElementById("btnencypt").disabled = true;
    document.getElementById("btndecrypt").disabled = true;
}

//Focus the TextArea
function focusTextArea()
{
    document.getElementById("txttext").focus();
}

//Focus Copy Button
function focusButtonCopy()
{
    document.getElementById("btncopy").focus();
}

//Clear TextArea and disable Buttons.
function clearTextArea()
{
    document.getElementById("txttext").value = "";
    disableButtons();
}

//Enable Copy Button
function enableCopyButton()
{
    document.getElementById("btncopy").disabled = false;
}

//Disable Copy Button
function disableCopyButton()
{
    document.getElementById("btncopy").disabled = true;
}

//Enable Clean Button
function enableCleanButton()
{
    document.getElementById("btnclean").disabled = false;
}

//Disable Clean Button
function disableCleanButton()
{
    document.getElementById("btnclean").disabled = true;
}


//Enable TextArea Button
function enableTextArea()
{
    document.getElementById("txttext").disabled = false;
}

//Disable TextArea Button
function disableTextArea()
{
    document.getElementById("txttext").disabled = true;
}

//Change the text of the result
function valueResultLabel(text)
{
    document.getElementById("result").innerText = text;
}

//Not display the object that indicates that you copy the text
function copiedTextNonDisplay()
{
    document.getElementById("infocopy").classList.add("nodisplay");
}

//Change the value of the result
function valueResultTitleLabel(text)
{
    document.getElementById("titleresult").innerText = text;
}

//Change the color of the Results
function changeColorResult(Nameofclass)
{
    document.getElementById("result").classList.add(Nameofclass);
}

function showPanelResults()
{
    document.getElementById("panelresults").classList.remove("nodisplay");
    document.getElementById("panelresultsinfo").classList.add("nodisplay");
}

function cleanPanelResults()
{
    document.getElementById("panelresultsinfo").classList.remove("nodisplay");
    document.getElementById("panelresults").classList.add("nodisplay");
}
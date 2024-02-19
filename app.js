let SecretPasspharse = "OracleOne";


function textAreaValidator(e)
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

function actionClean()
{
    copiedTextNonDisplay();
    disableCopyButton();
    disableCleanButton();
    enableTextAreaButton();
    focusTextArea();
    valueResultTitleLabel("Resultados");
    valueResultLabel("No se ha escrito un texto aún");
}

function Encrypt()
{
    let textInserted = document.getElementById("txttext").value;

    noDisplayErrors();

    if(checkConditions(textInserted) == true)
    {
        clearTextArea();
        enableCopyButton();
        enableCleanButton();
        disableTextAreaButton();
        focusButtonCopy();

        valueResultTitleLabel("Texto Encriptado");

        var textencypted = encryptText(textInserted);

        valueResultLabel(textencypted);
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

    clearTextArea();
    enableCopyButton();
    enableCleanButton();
    disableTextAreaButton();

    valueResultTitleLabel("Texto Desencriptado");
    focusButtonCopy();

    var textdecrypted = decryptText(textInserted);

    valueResultLabel(textdecrypted);
}

function copyToClipboard()
{
    var copyText = document.getElementById("result").innerText;

   // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    valueTextCopied();
}

function encryptText(text)
{
    var encrypted = CryptoJS.AES.encrypt(text, SecretPasspharse );

    return encrypted;
}

function decryptText(text)
{
    var decrypted = CryptoJS.AES.decrypt(text, SecretPasspharse);

    return decrypted.toString(CryptoJS.enc.Utf8);
}

function checkConditions(text)
{
    if(text == "")
    {
        showError("Debe de ingresar un texto");

        return false;
    }

    if(containsUppercase(text) == true)
    {   
        console.log("Not uppercase");

        showError("El texto no puede contener mayusculas, vuelva a intentarlo")

        return false;
    }

    if(containsSpecialCaracters(text) == true)
    {
        showError("El texto no puede contener caracteres especiales, vuelva a intentarlo")

        return false;
    }

    return true;
}

function containsSpecialCaracters(text)
{
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    console.log(format.test(text));

    return format.test(text) ? true : false;
}



function containsUppercase(str) {
    return /[A-Z]/.test(str);
}

function showError(message)
{
    document.getElementById("errorscontainer").classList.remove("errors");

    document.getElementById("errortext").innerText =message;
}

function noDisplayErrors()
{
    document.getElementById("errorscontainer").classList.add("errors");
}

function enableButtons()
{
    document.getElementById("btnencypt").disabled = false;
    document.getElementById("btndecrypt").disabled = false;
}

function disableButtons()
{
    document.getElementById("btnencypt").disabled = true;
    document.getElementById("btndecrypt").disabled = true;
}

function focusTextArea()
{
    document.getElementById("txttext").focus();
}

function focusButtonCopy()
{
    document.getElementById("btncopy").focus();
}

function clearTextArea()
{
    document.getElementById("txttext").value = "";
    disableButtons();
}

function enableCopyButton()
{
    document.getElementById("btncopy").disabled = false;
}

function disableCopyButton()
{
    document.getElementById("btncopy").disabled = true;
}

function enableCleanButton()
{
    document.getElementById("btnclean").disabled = false;
}

function disableCleanButton()
{
    document.getElementById("btnclean").disabled = true;
}

function enableTextAreaButton()
{
    document.getElementById("txttext").disabled = false;
}

function disableTextAreaButton()
{
    document.getElementById("txttext").disabled = true;
}

function valueResultLabel(text)
{
    document.getElementById("result").innerText = text;
}

function valueTextCopied()
{
    document.getElementById("infocopy").classList.remove("nodisplay");
    document.getElementById("infocopy").innerText = "Copiado!!!";
}

function copiedTextNonDisplay()
{
    document.getElementById("infocopy").classList.add("nodisplay");
}

function valueResultTitleLabel(text)
{
    document.getElementById("titleresult").innerText = text;
}

function changeColorResult(Nameofclass)
{
    document.getElementById("result").classList.add(Nameofclass);
}
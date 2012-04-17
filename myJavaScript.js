var m_Names = null;

function Run() {
    if (document.getElementById('m_txtNames') != null) {
        m_Names = document.getElementById('m_txtNames').value;
    }

    var NamesArray = new Array();
    NamesArray = m_Names.split(",");
    PrintNames(NamesArray);
}

function PrintNames(asParams) {
    if (asParams.length > 1) {

        for (param in asParams) {
            alert('Hello there ' + asParams[param] + '!');
        }
    }
    else {
        alert('No Names Specified.');
    }
}

Run();
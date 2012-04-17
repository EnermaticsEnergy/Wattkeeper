var m_Names = null;

function Run() {
    try {
        if (document.getElementById('m_txtCommaDelimetedNames') != null) {
            m_Names = document.getElementById('m_txtCommaDelimetedNames').value;
        }

        var NamesArray = new Array();
        NamesArray = m_Names.split(",");
        PrintNames(NamesArray);
    } catch (ex) {
        alert(ex);
    }
}

function PrintNames(asParams) {
    try {
        if (asParams.length > 1) {

            for (param in asParams) {
                alert('Hello there ' + asParams[param] + '!');
            }
        }
        else {
            alert('No Names Specified.');
        }
    } catch (ex) {
        alert(ex);
    }
}

function LoadCSS() {
    try {
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", "Names.css")

        if (typeof fileref != "undefined") {
            if (!StyleAlreadyLoaded('Names.css')) {
                document.getElementsByTagName("head")[0].appendChild(fileref)
                alert('Hey!! Style are now loaded!');
            }
        }
    } catch (ex) {
        alert(ex);
    }
}

function RemoveCSS() {
    try {
        $("link[href*='Names.css']").remove();
    } catch (ex) {
        alert(ex);
    }
}


function StyleAlreadyLoaded(filename) {
    try {
        var targetelement = "link";
        var targetattr = "href";
        var allsuspects = document.getElementsByTagName(targetelement)
        for (var i = allsuspects.length; i >= 0; i--) {
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1) {
                alert('Found CSS');
                return true;
            }
        }
    } catch (ex) {
        alert(ex);
    }

    return false;
}


Run();
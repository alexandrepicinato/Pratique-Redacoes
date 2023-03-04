function saveContent() {
    var conteudo = document.getElementById('redaction').value;
    var style = "<style>";
    var win = window.open('', '', 'height=700,width=700');
    win.document.write('<div id="printable">');
    win.document.write(conteudo);
    win.strDefault.replace(/\s/g, '');
    win.document.close();
    win.print();
    }
function print() {
    var conteudo = document.getElementById('redaction').value;
    var win = window.open('', '', 'height=700,width=700');
    win.document.write('<div id="printable">');
    win.document.write(conteudo);
    win.document.close();
    win.print();
    }
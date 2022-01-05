function funcao_pdf(){
    var pegar_dados = document.getElementById('dados').innerHTML;
    var janela = window.open('','','width=800, heigth=600');

    janela.document.write('<html><head>');
    janela.document.write('<title></title></head>');
    janela.document.write('<body');
    janela.document.write(pegar_dados);
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();
}
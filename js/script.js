const btnSkill = document.querySelector("#btn-skills");
const btnInfo = document.querySelector("#btn-info-sobre-mi");


btnSkill.addEventListener('click',function(){
    document.querySelector('#info-sobre-mi').style.display = 'none';
    document.querySelector('#info-skills').style.display = 'block';

    btnInfo.classList.remove('selected');
    btnSkill.classList.add("selected");

});

btnInfo.addEventListener('click',function(){
    document.querySelector('#info-sobre-mi').style.display = 'block';
    document.querySelector('#info-skills').style.display = 'none';

    btnInfo.classList.add('selected');
    btnSkill.classList.remove("selected");
});
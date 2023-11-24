var random = ['naruto', 'sakura'];

function sobre_person(){
  var modal = document.getElementById('modal_informacao_person');
  var person = tipo_person;

  if(person == 'naruto'){
      imagem_informacao_person.innerHTML = `<img src="../imagem/narutooo.jpg" width="280px">`;
      sobre_informacao_person.innerHTML =``
      tipo_person.innerHTML = ``

  } else if(person == 'sakura'){
      imagem_informacao_person.innerHTML = `<img src="../imagem/sakura.jpg" width="280px" alt="sakura">`;
      sobre_informacao_person.innerHTML =``
      tipo_person.innerHTML = ``

  } else if(person == 'sasuke'){
      imagem_informacao_person.innerHTML = `<img src="../imagem/sasuke1.jpg" width="280px"></div>`;
      sobre_informacao_person.innerHTML =``
      tipo_person.innerHTML = ``

  } else if(person == 'kakashi'){
      imagem_informacao_person.innerHTML = `<img src="../imagem/kakashi.jpg" width="280px"></div>`;
      sobre_informacao_person.innerHTML =``
      tipo_person.innerHTML = ``
  }
  else if(person == 'jiraiya'){
      imagem_informacao_person.innerHTML = `<img src="../imagem/ji.jpg" width="280x"></div>`;
      sobre_informacao_person.innerHTML =``
      tipo_person.innerHTML = ``
  }


  modal.style = "display: flex";
}

function fechar_modal(){
  var modal_person = document.getElementById("modal_informacao_person");

  modal_person.style.display = 'none';
}

window.addEventListener('click', (e) => {
  var modal_person = document.getElementById("modal_informacao_person");
  if (e.target == modal_person ){

      fechar_modal()
  }
}
)

function favoritos(){
  
}
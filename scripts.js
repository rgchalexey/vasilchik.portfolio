// Получаем элементы на странице
const phone = document.querySelector('#phone');
const mail = document.querySelector('#mail');
const infoBlock = document.querySelector('.links-info-block');

let mail_flag = false
let phone_flag = false

phone.addEventListener('click', (event) => {

  if(phone_flag){
    infoBlock.style.display = 'none';
    phone_flag = false
  } else {
    // Показываем блок с информацией
    infoBlock.style.display = 'block';
    // Меняем текст в блоке с информацией
    infoBlock.querySelector('p').textContent = "+375(33) 646-88-45"
    // Останавливаем всплытие события
    event.stopPropagation();
    phone_flag = true
  }
});

mail.addEventListener('click', (event) => {
  if(mail_flag){
    infoBlock.style.display = 'none';
    mail_flag = false
  } else {
    // Показываем блок с информацией
    infoBlock.style.display = 'block';
    // Меняем текст в блоке с информацией
    infoBlock.querySelector('p').textContent = "v_vasilchik@mail.ru"
    // Останавливаем всплытие события
    event.stopPropagation();
    mail_flag = true
  }
});

// Обрабатываем клик на другой части страницы
document.addEventListener('click', (event) => {
  // Скрываем блок с информацией
  infoBlock.style.display = 'none';
  mail_flag = false
  phone_flag = false
});
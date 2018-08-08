/**
 * 
 */
function validateForm(form) {
	var doc = document;	
 // Заранее объявим необходимые переменные
      var el, // Сам элемент
            elName, // Имя элемента формы
            value, // Значение
            type; // Атрибут type для input-ов
      // Массив списка ошибок, по дефолту пустой
      var errorList = [];
	  
	   // Хэш с текстом ошибок (ключ - ID ошибки)
      var errorText = {
            1 : "Не заполнено поле 'login'",
            2 : "Не заполнено поле 'password'"            
      }
	
	// Получаем семейство всех элементов формы
      // Проходимся по ним в цикле
      for (var i = 0; i < form.elements.length; i++) {
            el = form.elements[i];
            elName = el.nodeName.toLowerCase();
            value = el.value;
            if (elName == "input") { // INPUT
                  // Определяем тип input-а
                  type = el.type.toLowerCase();
                  // Разбираем все инпуты по типам и обрабатываем содержимое
                  switch (type) {
                        case "text" :
                              if (el.name == "login" && value == "") {
									errorList.push(1); 										
								}
                        break;
                        case "password" :
                              if (el.name == "password" && value == "")	{
									errorList.push(2);									
								}
                        break;
                        
                        default :
                              // Сюда попадают input-ы, которые не требуют обработки
                              // type = hidden, submit, button, image
                        break;
                  }
            } else {
                  // Обнаружен неизвестный элемент ;)
            }
      }
	  
	  // Финальная стадия
      // Если массив ошибок пуст - возвращаем true
      if (!errorList.length) return true;
      // Если есть ошибки - формируем сообщение, выовдим alert
      // и возвращаем false
      var errorMsg = "При заполнении формы допущены следующие ошибки:\n";
      for (i = 0; i < errorList.length; i++) {
            errorMsg += errorText[errorList[i]] + "\n";
			if(errorList[i]==1){
			field = doc.getElementsByTagName('input')[0];
			button = doc.getElementsByTagName('input')[2];
			field.classList.add('doAnimF');
			button.classList.add('doAnimBut');
			}
			else{
			field = doc.getElementsByTagName('input')[1];
			button = doc.getElementsByTagName('input')[2];
			field.classList.add('doAnimF');
			button.classList.add('doAnimBut');
			}
      }	 

	  doc.getElementsByTagName('input')[2].disabled= '0';	  
      alert(errorMsg);	
	
	return false;	

}
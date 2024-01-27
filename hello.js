const express = require("express") //Подключение Express
const app = express() //Создание объекта класса?
app.use(express.json()) //Мы точно знаем, что на вход будут JSON поэтому мы сразу их преобразуем в норм
app.post("/user", function(req, res){
    const user = req.body
    console.log(user)
    res.json({message:`User's name: ${user.name}. Age: ${user.age}`}) //Метод пост - это метод, который отправляет на сервер данные
                                                                            //Мы вернем имя и возраст

});
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html"); //Принимаем из index.html?
});app.listen(3000)
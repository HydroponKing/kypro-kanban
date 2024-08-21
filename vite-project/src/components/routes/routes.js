// routes.js

const routes = {
    home: "/",
    homepage: "/homepage",
    signin: "/signin",
    signup: "/signup",
    exit: "/exit",
    card: "/card/:cardId",
    editTask: "/edit-task/:cardId", 
    editTaskModal: '/edit-task-modal/:taskId', //Новый маршрут для редактирования задачи
    notFound: "/404",
    wildcard: "*",
  };
  
  export default routes;
  
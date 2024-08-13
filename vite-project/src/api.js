// src/api.js
const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck"; // Захардкоженный токен

export const fetchTasks = async () => {
  try {
    const response = await fetch('https://wedev-api.sky.pro/api/kanban', {
      headers: {
        Authorization: `Bearer ${token}`, // Передаем токен в заголовке Authorization
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }

    const data = await response.json();
    return data.tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

//Новый API-запрос для получения конкретной задачи
export const fetchTaskById = async (taskId) => {
  try {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Передаем токен в заголовке Authorization
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch task');
    }

    const task = await response.json();
    return task;
  } catch (error) {
    console.error('Error fetching task:', error);
    return null;
  }
};

// Функция для регистрации нового пользователя
// Функция для регистрации нового пользователя
export const registerUser = async (login, name, password) => {
    try {
      const response = await fetch('https://wedev-api.sky.pro/api/user', {
        method: 'POST',
        body: JSON.stringify({
          login: login,
          name: name,
          password: password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Логирование ошибки от сервера
        console.error('Registration error:', errorData);
        throw new Error('Registration failed: ' + (errorData.message || 'Unknown error'));
      }
  
      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };
  
// Функция для авторизации пользователя
// Функция для авторизации пользователя
export const loginUser = async (login, password) => {
    try {
      const response = await fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
          login: login,
          password: password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login error:', errorData);
        throw new Error('Login failed: ' + (errorData.message || 'Unknown error'));
      }
  
      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error('Error logging in user:', error);
      throw error;
    }
  };
  
  
  
// Функция для получения токена из localStorage
const getToken = () => {
    return localStorage.getItem('authToken');
  };
  
  export const fetchTasks = async () => {
    const token = getToken(); // Получаем токен из localStorage
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
  
  // Новый API-запрос для получения конкретной задачи по ID
  export const fetchTaskById = async (taskId) => {
    const token = getToken(); // Получаем токен из localStorage
    try {
      const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Передаем токен в заголовке Authorization
        },
      });
  
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Task not found');
        }
        throw new Error('Failed to fetch task');
      }
  
      const data = await response.json();
      return data.task;
    } catch (error) {
      console.error('Error fetching task:', error);
      return null;
    }
  };
  
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
  
// Функция для получения информации о текущем пользователе
export const fetchUserInfo = async () => {
  const token = getToken(); // Получаем токен из localStorage
  try {
    const response = await fetch('https://wedev-api.sky.pro/api/user', {
      headers: {
        Authorization: `Bearer ${token}`, // Передаем токен в заголовке Authorization
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    const data = await response.json();
    return data.users[0]; // Предполагается, что возвращается список пользователей, берем первого
  } catch (error) {
    console.error('Error fetching user info:', error);
    return null;
  }
};

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

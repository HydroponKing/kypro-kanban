import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Корневая директория
  build: {
    rollupOptions: {
      input: 'D:/учеба/react/kypro-kanban/index.html', // Путь к вашему index.html
    },
  },
  server: {
    open: '/index.html', // Открывать index.html при запуске сервера
  },
});

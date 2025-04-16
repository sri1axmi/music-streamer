docker pull srilaxmiprasanna/music-streamer:latest
docker  run -p 3000:3000  -p 5000:5000 srilaxmiprasanna/musicstream
Frontend (UI) running on port 3000 (like a React app or some web interface).

Backend API (e.g., Express.js, Node.js) running on port 5000.

By exposing both, you're allowing:

http://localhost:3000 to access your frontend

http://localhost:5000 to hit backend routes (like /songs, /upload, /login, etc.)

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 300 },
    { duration: '30s', target: 1000 }
  ],
};

export default function() {
  let roomId = Math.floor(Math.random() * (5000000)) + 5000000;
  http.get(`http://localhost:3004/api/${roomId}/photo-gallery`);
  sleep(1);
}
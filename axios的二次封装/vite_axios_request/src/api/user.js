import myAxios from './axios';

export function login(paramsList) {
  return myAxios({
    url: '/api/login',
    method: 'post',
    data: paramsList
  });
}

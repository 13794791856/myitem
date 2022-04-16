import myAxios from './axios';

export function getListAPI(paramsList) {
  return myAxios({
    url: '/api/list',
    method: 'get',
  })
}

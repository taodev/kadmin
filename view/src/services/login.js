import request from '../utils/request'

export async function login(data) {
  return request('http://localhost:8080/api/v1/auth/login', {
    method: 'post',
    data,
  });
}

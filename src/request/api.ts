import { UserForm } from '@/views/Login';
import request from './index';

const LOGIN_URL = '/login'

export const login = (user:UserForm) => request.post(LOGIN_URL, user);
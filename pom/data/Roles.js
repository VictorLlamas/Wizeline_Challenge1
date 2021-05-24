import { Role } from 'testcafe';
import { URLS, CREDENTIALS } from './Constants'
import loginPage from '../pages/LoginPage'

export const STANDARD_USER = Role(`${URLS.LOGIN_PAGE}`, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
}, { preserveUrl:true });

export const LOCKED_USER = Role(`${URLS.LOGIN_PAGE}`, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.LOCKED_USER.USERNAME, CREDENTIALS.LOCKED_USER.PASSWORD)
}, { preserveUrl:true });

export const PROBLEM_USER = Role(`${URLS.LOGIN_PAGE}`, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.PROBLEM_USER.USERNAME, CREDENTIALS.PROBLEM_USER.PASSWORD)
}, { preserveUrl:true });

export const PERFORMANCE_USER = Role(`${URLS.LOGIN_PAGE}`, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.PERFORMANCE_USER.USERNAME, CREDENTIALS.PERFORMANCE_USER.PASSWORD)
}, { preserveUrl:true });
import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_PAGE: 'https://www.saucedemo.com/'
}

export const CREDENTIALS = {
    STANDARD_USER: {
        USERNAME: process.env.STANDARD_USERNAME,
        PASSWORD: process.env.STANDARD_PASSWORD
    },
    LOCKED_USER : {
        USERNAME: process.env.LOCKED_USERNAME,
        PASSWORD: process.env.LOCKED_PASSWORD
    },
    PROBLEM_USER: {
        USERNAME: process.env.PROBLEM_USERNAME,
        PASSWORD: process.env.PROBLEM_PASSWORD
    },
    PERFORMANCE_USER: {
        USERNAME: process.env.PERFORMANCE_USERNAME,
        PASSWORD: process.env.PERFORMANCE_PASSWORD
    },
    INVALID_USER: {
        USERNAME: process.env.INVALID_USERNAME,
        PASSWORD: process.env.INVALID_PASSWORD
    }
}

export const MESSAGES = {
    ERROR_MESSAGES: {
        INVALID_LOGIN: 'Epic sadface: Username and password do not match any user in this service',
        FIRST_NAME_EMPTY: 'Error: First Name is required',
        LAST_NAME_EMPTY: 'Error: Last Name is required',
        ZIP_CODE_EMPTY: 'Error: Postal Code is required'
    }
}

export const PAGE_TITLE = {
    PRODUCT: 'Products',
    SHOPPING_CART: 'Your Cart',
    CHECKOUT_INFO: 'Checkout: Your Information',
    CHECKOUT_OVERVIEW: 'Checkout: Overview',
    CHECKOUT_COMPLETE: 'Checkout: Complete!'
}

export const PERSONAL_INFO = {
    FIRST_NAME: 'Victor',
    LAST_NAME: 'Llamas',
    ZIP_CODE: '45235'
}
"use strict"

const success = (data, message) => {
    return {
        statusCode: 200,
        data,
        message,
        success: true,
        error: ""
    }
}

const internalServerResponse = (error) => {
    return {
        statusCode: 500,
        success: false,
        error: error
    }
}

const badRequest = (error) => {
    return {
        statusCode: 400,
        success: false,
        error: error
    }
}
module.exports = {
    success, 
    internalServerResponse,
    badRequest
}


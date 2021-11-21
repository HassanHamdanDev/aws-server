'use strict';

const loggerMiddleware = require('../middleware/logger');

describe('Logger Middleware', () => {
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('should log call', () => {
        loggerMiddleware(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });
    test('should if next work', () => {
        loggerMiddleware(req, res, next);
        expect(next).toHaveBeenCalled();
    });

});
/**
 * Created with IntelliJ IDEA.
 * User: shivanyshenoy
 * Date: 1/30/13
 * Time: 10:49 AM
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';

    beforeEach(module('fizzBuzz'));
    describe("fizzBuzz", function () {

        it("when given 1, should return 1", inject(function (fizzBuzz) {

            expect(fizzBuzz).toBeDefined();
        }));

    });

}());
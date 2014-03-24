var should = require('should');

/**
 *  Write a “template engine” meaning a way to transform template strings, “Hello {#name}” into “instanced” strings. To do that a variable->value mapping must be provided. For example, if name=”Cenk” and the template string is “Hello {#name}” the result would be “Hello Cenk”.
 *  - Should evaluate template single variable expression:
 *  mapOfVariables.put(“name”,”Cenk”);
 *  templateEngine.evaluate(“Hello {#name}”, mapOfVariables)
 *  =>   should evaluate to “Hello Cenk”
 *  - Should evaluate template with multiple expressions:
 *  mapOfVariables.put(“firstName”,”Cenk”);
 *  mapOfVariables.put(“lastName”,”Civici”);
 *  templateEngine.evaluate(“Hello {#firstName} {#lastName}”, mapOfVariables);
 *  =>   should evaluate to “Hello Cenk Civici”
 *  - Should give error if template variable does not exist in the map:
 *  map empty
 *  templateEngine.evaluate(“Hello {#firstName} “, mapOfVariables);
 *  =>   should throw missingvalueexception
 *  - Should evaluate complex cases:
 *  mapOfVariables.put(“name”,”Cenk”);
 *  templateEngine.evaluate(“Hello #{{#name}}”, mapOfVariables);
 *  =>   should evaluate to “Hello  #{Cenk}”
 */
describe('Tplr', function () {
    'use strict';

    var tpl;
    beforeEach(function() {
        tpl = require('../lib/tplr');
    });

    it('it evaluates template with multiple expressions', function () {
        tpl.eval('Hello {#name}', {'name': 'Jacek'}).should.equal('Hello Jacek');
    });

    it('it gives error if template variable does not exist in the map', function () {
        tpl.eval('Hello {#first_name} {#last_name}', {'first_name': 'Jacek', 'last_name': 'III Wysocki'}).should.equal('Hello Jacek III Wysocki')
    });

    it('it throws error if when template is empty', function () {
        (function(){
            tpl.eval('', {});
        }).should.throw('You must pass not empty template');
    });

    it('it throws error if template variable does not exist in the map', function () {
        (function(){
            tpl.eval('Hello {#nonexistent}', {});
        }).should.throw('There is no key nonexistent');
    });

    it('it evaluates complex cases', function () {
        tpl.eval('Hello #{{#name}}', {'name': 'Misiak'}).should.equal('Hello #{Misiak}');
    });

});

'use strict';

const { XMLParser } = require('fast-xml-parser');

exports.handler =  async event => {
    const { body: xml } = event
    const parser = new XMLParser();
    const jObj = parser.parse(xml);
    return jObj
}

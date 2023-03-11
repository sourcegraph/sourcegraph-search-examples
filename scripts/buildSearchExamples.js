
import * as yaml from 'js-yaml';
import * as fs from 'fs';
import Ajv from 'ajv';

const dataFile = 'searchExamples.yaml'
const schemaFile = 'searchExamplesSchema.json'
const outputFile = './static/examples.json'

const data = parseYaml(dataFile);
const valid = validateData(data);
if (valid) {
    writeFile(data);
}

// parse yaml document, or throw exception on error
function parseYaml(fileName) {
    let doc;
    try {
        doc = yaml.load(fs.readFileSync(fileName, 'utf8'));
    } catch (e) {
        console.log(e);
    }
    return doc;
}

// validate data against json schema or throw exception on error
function validateData(data) {
    let valid = false;
    try {
        const schema = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));
        const ajv = new Ajv({ allErrors: true });
        const schemaIsValid = ajv.validateSchema(schema)
        if (!schemaIsValid) {
            console.log(`${schemaFile} is not a valid JSON schema`)
        }
        const dataIsValid = ajv.validate(schema, data)
        if (!dataIsValid) {
            const errors = ajv.errorsText()
            console.log(`${dataFile} failed validation against ${schemaFile}:\n${errors}`) 
        } else {
            valid = true;
        }
    } catch (e) {
        console.log(e);
    }
    return valid;
}

// write data to json file
function writeFile(data) {
    try {
        fs.writeFileSync(outputFile, JSON.stringify(data))
        console.log(`writing data to ${outputFile}`)
    } catch (e) {
        console.log(e);
    }
}

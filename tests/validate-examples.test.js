import * as yaml from 'js-yaml';
import * as fs from 'fs';
import Ajv from 'ajv';
import { test, expect } from 'vitest';

const dataFile = 'searchExamples.yaml';
const schemaFile = 'searchExamplesSchema.json';

function parseYaml(fileName) {
  try {
    return yaml.load(fs.readFileSync(fileName, 'utf8'));
  } catch (e) {
    console.error(`Error parsing YAML file ${fileName}:`, e);
    return null;
  }
}

function validateData(data, schema) {
  const ajv = new Ajv({ allErrors: true });
  const valid = ajv.validate(schema, data);
  return { valid, errors: ajv.errors };
}

test('searchExamples.yaml adheres to schema', () => {
  // Load the data and schema
  const data = parseYaml(dataFile);
  const schema = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));
  
  // Validate the schema itself
  const ajv = new Ajv();
  const schemaIsValid = ajv.validateSchema(schema);
  expect(schemaIsValid).toBe(true);
  
  // Validate the data against the schema
  const { valid, errors } = validateData(data, schema);
  
  // Format errors for better readability in test output
  const errorMessage = errors ? JSON.stringify(errors, null, 2) : '';
  expect(valid, `Schema validation failed: ${errorMessage}`).toBe(true);
});

test('example links are valid URLs', () => {
  const data = parseYaml(dataFile);
  
  for (const example of data) {
    expect(example.exampleLink, `Invalid URL in example: ${example.name}`)
      .toMatch(/^https:\/\/(sourcegraph\.com|www\.sourcegraph\.com)/i);
  }
});

test('each example has at least one pattern type tag', () => {
  const data = parseYaml(dataFile);
  const patternTypeRegex = /^pattern_type:/;
  
  for (const example of data) {
    const hasPatternTypeTag = example.tags.some(tag => patternTypeRegex.test(tag));
    expect(hasPatternTypeTag, `Example "${example.name}" is missing a pattern_type tag`).toBe(true);
  }
});

test('each example has at least one use case tag', () => {
  const data = parseYaml(dataFile);
  const useCaseRegex = /^use_case:/;
  
  for (const example of data) {
    const hasUseCaseTag = example.tags.some(tag => useCaseRegex.test(tag));
    expect(hasUseCaseTag, `Example "${example.name}" is missing a use_case tag`).toBe(true);
  }
});
/**
 * Postal Mail
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { HttpFile } from '../http/http';

export class BatchInputSimplePublicObjectInput {
    'inputs': Array<SimplePublicObjectInput>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<SimplePublicObjectInput>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputSimplePublicObjectInput.attributeTypeMap;
    }

    public constructor() {
    }
}


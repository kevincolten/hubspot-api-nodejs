/**
 * Meetings
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SimplePublicObjectId } from './SimplePublicObjectId';
import { HttpFile } from '../http/http';

export class BatchReadInputSimplePublicObjectId {
    'properties': Array<string>;
    'propertiesWithHistory': Array<string>;
    'idProperty'?: string;
    'inputs': Array<SimplePublicObjectId>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "propertiesWithHistory",
            "baseName": "propertiesWithHistory",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "idProperty",
            "baseName": "idProperty",
            "type": "string",
            "format": ""
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<SimplePublicObjectId>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchReadInputSimplePublicObjectId.attributeTypeMap;
    }

    public constructor() {
    }
}


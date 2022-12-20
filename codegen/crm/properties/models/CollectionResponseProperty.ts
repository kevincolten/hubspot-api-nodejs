/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Paging } from '../models/Paging';
import { Property } from '../models/Property';
import { HttpFile } from '../http/http';

export class CollectionResponseProperty {
    'results': Array<Property>;
    'paging'?: Paging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Property>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseProperty.attributeTypeMap;
    }

    public constructor() {
    }
}


/**
 * Files
 * Upload and manage files.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Folder } from '../models/Folder';
import { Paging } from '../models/Paging';

export class CollectionResponseFolder {
    'results': Array<Folder>;
    'paging'?: Paging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Folder>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseFolder.attributeTypeMap;
    }

    public constructor() {
    }
}


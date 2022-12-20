/**
 * Line Items
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ForwardPaging } from '../models/ForwardPaging';
import { MultiAssociatedObjectWithLabel } from '../models/MultiAssociatedObjectWithLabel';
import { HttpFile } from '../http/http';

export class CollectionResponseMultiAssociatedObjectWithLabelForwardPaging {
    'results': Array<MultiAssociatedObjectWithLabel>;
    'paging'?: ForwardPaging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<MultiAssociatedObjectWithLabel>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseMultiAssociatedObjectWithLabelForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}


/**
 * Emails
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NextPage } from '../models/NextPage';
import { HttpFile } from '../http/http';

export class ForwardPaging {
    'next'?: NextPage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "next",
            "baseName": "next",
            "type": "NextPage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}


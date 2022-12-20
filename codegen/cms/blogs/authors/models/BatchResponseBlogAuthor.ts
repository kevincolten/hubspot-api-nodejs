/**
 * Blog Post endpoints
 * Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BlogAuthor } from '../models/BlogAuthor';
import { HttpFile } from '../http/http';

/**
* Response object for batch operations on blog authors.
*/
export class BatchResponseBlogAuthor {
    /**
    * Status of batch operation.
    */
    'status': BatchResponseBlogAuthorStatusEnum;
    /**
    * Results of batch operation.
    */
    'results': Array<BlogAuthor>;
    /**
    * Time of batch operation request.
    */
    'requestedAt'?: Date;
    /**
    * Time of batch operation start.
    */
    'startedAt': Date;
    /**
    * Time of batch operation completion.
    */
    'completedAt': Date;
    /**
    * Links associated with batch operation.
    */
    'links'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseBlogAuthorStatusEnum",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<BlogAuthor>",
            "format": ""
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseBlogAuthor.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BatchResponseBlogAuthorStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE" ;


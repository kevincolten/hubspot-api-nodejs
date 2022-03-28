/**
 * Marketing Events Extension
 * These APIs allow you to interact with HubSpot's Marketing Events Extension. It allows you to: * Create, Read or update Marketing Event information in HubSpot * Specify whether a HubSpot contact has registered, attended or cancelled a registration to a Marketing Event. * Specify a URL that can be called to get the details of a Marketing Event. 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PropertyValue {
    'name': string;
    'value': string;
    'timestamp': number;
    'sourceId': string;
    'sourceLabel': string;
    'source': PropertyValueSourceEnum;
    'selectedByUser': boolean;
    'selectedByUserTimestamp': number;
    'sourceVid': Array<number>;
    /**
    * Source metadata encoded as a base64 string. For example: `ZXhhbXBsZSBzdHJpbmc=`
    */
    'sourceMetadata': string;
    'requestId': string;
    'updatedByUserId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sourceId",
            "baseName": "sourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceLabel",
            "baseName": "sourceLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "PropertyValueSourceEnum",
            "format": ""
        },
        {
            "name": "selectedByUser",
            "baseName": "selectedByUser",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "selectedByUserTimestamp",
            "baseName": "selectedByUserTimestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sourceVid",
            "baseName": "sourceVid",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "sourceMetadata",
            "baseName": "sourceMetadata",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestId",
            "baseName": "requestId",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedByUserId",
            "baseName": "updatedByUserId",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PropertyValue.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PropertyValueSourceEnum = "IMPORT" | "API" | "FORM" | "ANALYTICS" | "MIGRATION" | "SALESFORCE" | "INTEGRATION" | "CONTACTS_WEB" | "WAL_INCREMENTAL" | "TASK" | "EMAIL" | "WORKFLOWS" | "CALCULATED" | "SOCIAL" | "BATCH_UPDATE" | "SIGNALS" | "BIDEN" | "DEFAULT" | "COMPANIES" | "DEALS" | "ASSISTS" | "PRESENTATIONS" | "TALLY" | "SIDEKICK" | "CRM_UI" | "MERGE_CONTACTS" | "PORTAL_USER_ASSOCIATOR" | "INTEGRATIONS_PLATFORM" | "BCC_TO_CRM" | "FORWARD_TO_CRM" | "ENGAGEMENTS" | "SALES" | "HEISENBERG" | "LEADIN" | "GMAIL_INTEGRATION" | "ACADEMY" | "SALES_MESSAGES" | "AVATARS_SERVICE" | "MERGE_COMPANIES" | "SEQUENCES" | "COMPANY_FAMILIES" | "MOBILE_IOS" | "MOBILE_ANDROID" | "CONTACTS" | "ASSOCIATIONS" | "EXTENSION" | "SUCCESS" | "BOT" | "INTEGRATIONS_SYNC" | "AUTOMATION_PLATFORM" | "CONVERSATIONS" | "EMAIL_INTEGRATION" | "CONTENT_MEMBERSHIP" | "QUOTES" | "BET_ASSIGNMENT" | "QUOTAS" | "BET_CRM_CONNECTOR" | "MEETINGS" | "MERGE_OBJECTS" | "RECYCLING_BIN" | "ADS" | "AI_GROUP" | "COMMUNICATOR" | "SETTINGS" | "PROPERTY_SETTINGS" | "PIPELINE_SETTINGS" | "COMPANY_INSIGHTS" | "BEHAVIORAL_EVENTS" | "PAYMENTS" | "GOALS" | "PORTAL_OBJECT_SYNC" | "APPROVALS" ;


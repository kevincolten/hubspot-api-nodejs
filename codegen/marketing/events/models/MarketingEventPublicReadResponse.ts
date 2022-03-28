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

import { PropertyValue } from './PropertyValue';
import { HttpFile } from '../http/http';

export class MarketingEventPublicReadResponse {
    /**
    * The name of the marketing event.
    */
    'eventName': string;
    /**
    * The type of the marketing event.
    */
    'eventType'?: string;
    /**
    * The start date and time of the marketing event.
    */
    'startDateTime'?: Date;
    /**
    * The end date and time of the marketing event.
    */
    'endDateTime'?: Date;
    /**
    * The name of the organizer of the marketing event.
    */
    'eventOrganizer': string;
    /**
    * The description of the marketing event.
    */
    'eventDescription'?: string;
    /**
    * A URL in the external event application where the marketing event can be managed.
    */
    'eventUrl'?: string;
    /**
    * Indicates if the marketing event has been cancelled.
    */
    'eventCancelled'?: boolean;
    /**
    * A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set. In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts. 
    */
    'customProperties'?: Array<PropertyValue>;
    /**
    * The id of the marketing event in the external event application.
    */
    'externalEventId': string;
    /**
    * The number of HubSpot contacts that registered for this marketing event.
    */
    'registrants': number;
    /**
    * The number of HubSpot contacts that attended this marketing event.
    */
    'attendees': number;
    /**
    * The number of HubSpot contacts that registered for this marketing event, but later cancelled their registration.
    */
    'cancellations': number;
    /**
    * The number of HubSpot contacts that registered for this marketing event, but did not attend. This field only had a value when the event is over.
    */
    'noShows': number;
    'createdAt': Date;
    'updatedAt': Date;
    'id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "string",
            "format": ""
        },
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endDateTime",
            "baseName": "endDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "eventOrganizer",
            "baseName": "eventOrganizer",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventDescription",
            "baseName": "eventDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventUrl",
            "baseName": "eventUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventCancelled",
            "baseName": "eventCancelled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "customProperties",
            "baseName": "customProperties",
            "type": "Array<PropertyValue>",
            "format": ""
        },
        {
            "name": "externalEventId",
            "baseName": "externalEventId",
            "type": "string",
            "format": ""
        },
        {
            "name": "registrants",
            "baseName": "registrants",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "attendees",
            "baseName": "attendees",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "cancellations",
            "baseName": "cancellations",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "noShows",
            "baseName": "noShows",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MarketingEventPublicReadResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging } from '../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { EventDetailSettings } from '../models/EventDetailSettings';
import { EventDetailSettingsUrl } from '../models/EventDetailSettingsUrl';
import { MarketingEventCreateRequestParams } from '../models/MarketingEventCreateRequestParams';
import { MarketingEventDefaultResponse } from '../models/MarketingEventDefaultResponse';
import { MarketingEventEmailSubscriber } from '../models/MarketingEventEmailSubscriber';
import { MarketingEventExternalUniqueIdentifier } from '../models/MarketingEventExternalUniqueIdentifier';
import { MarketingEventPublicDefaultResponse } from '../models/MarketingEventPublicDefaultResponse';
import { MarketingEventPublicReadResponse } from '../models/MarketingEventPublicReadResponse';
import { MarketingEventSubscriber } from '../models/MarketingEventSubscriber';
import { MarketingEventUpdateRequestParams } from '../models/MarketingEventUpdateRequestParams';
import { ModelError } from '../models/ModelError';
import { PropertyValue } from '../models/PropertyValue';
import { StandardError } from '../models/StandardError';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class ObservableBasicApi {
    private requestFactory: BasicApiRequestFactory;
    private responseProcessor: BasicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicApiResponseProcessor();
    }

    /**
     * Deletes an existing Marketing Event with the specified id, if one exists.
     * Delete a marketing event
     * @param externalEventId The id of the marketing event to delete
     * @param externalAccountId The account id associated with the marketing event
     */
    public archive(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(externalEventId, externalAccountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams The details of the marketing event to create
     */
    public create(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<MarketingEventDefaultResponse> {
        const requestContextPromise = this.requestFactory.create(marketingEventCreateRequestParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event to mark as cancelled
     * @param externalAccountId The account id associated with the marketing event
     */
    public doCancel(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<MarketingEventDefaultResponse> {
        const requestContextPromise = this.requestFactory.doCancel(externalEventId, externalAccountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doCancel(rsp)));
            }));
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param externalEventId The id of the marketing event to return
     * @param externalAccountId The account id associated with the marketing event
     */
    public getById(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<MarketingEventPublicReadResponse> {
        const requestContextPromise = this.requestFactory.getById(externalEventId, externalAccountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById(rsp)));
            }));
    }

    /**
     * Upsets a Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The id of the marketing event to upsert
     * @param marketingEventCreateRequestParams The details of the marketing event to upsert
     */
    public replace(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<MarketingEventPublicDefaultResponse> {
        const requestContextPromise = this.requestFactory.replace(externalEventId, marketingEventCreateRequestParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replace(rsp)));
            }));
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param externalEventId The id of the marketing event to update
     * @param externalAccountId The account id associated with the marketing event
     * @param marketingEventUpdateRequestParams The details of the marketing event to update
     */
    public update(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Observable<MarketingEventPublicDefaultResponse> {
        const requestContextPromise = this.requestFactory.update(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

}

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param batchInputMarketingEventExternalUniqueIdentifier The details of the marketing events to delete
     */
    public archive(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(batchInputMarketingEventExternalUniqueIdentifier, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }

    /**
     * Upset multiple Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param batchInputMarketingEventCreateRequestParams The details of the marketing events to upsert
     */
    public doUpsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Observable<BatchResponseMarketingEventPublicDefaultResponse> {
        const requestContextPromise = this.requestFactory.doUpsert(batchInputMarketingEventCreateRequestParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doUpsert(rsp)));
            }));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * Search for marketing events that have an event id that starts with the query string
     * Search for marketing events
     * @param q The partial event id to search for
     */
    public doSearch(q: string, _options?: Configuration): Observable<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging> {
        const requestContextPromise = this.requestFactory.doSearch(q, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doSearch(rsp)));
            }));
    }

}

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class ObservableSettingsApi {
    private requestFactory: SettingsApiRequestFactory;
    private responseProcessor: SettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApiResponseProcessor();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl The new application settings
     */
    public create(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Observable<EventDetailSettings> {
        const requestContextPromise = this.requestFactory.create(appId, eventDetailSettingsUrl, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param appId The id of the application to retrieve the settings for.
     */
    public getAll(appId: number, _options?: Configuration): Observable<EventDetailSettings> {
        const requestContextPromise = this.requestFactory.getAll(appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAll(rsp)));
            }));
    }

}

import { SubscriberStateChangesApiRequestFactory, SubscriberStateChangesApiResponseProcessor} from "../apis/SubscriberStateChangesApi";
export class ObservableSubscriberStateChangesApi {
    private requestFactory: SubscriberStateChangesApiRequestFactory;
    private responseProcessor: SubscriberStateChangesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriberStateChangesApiRequestFactory,
        responseProcessor?: SubscriberStateChangesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriberStateChangesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriberStateChangesApiResponseProcessor();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event
     */
    public doEmailUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.doEmailUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doEmailUpsertById(rsp)));
            }));
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event
     */
    public doUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.doUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doUpsertById(rsp)));
            }));
    }

}

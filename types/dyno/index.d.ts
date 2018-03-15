// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/form-data/form-data.d.ts
// Type definitions for dyno
// Project: https://github.com/mapbox/dyno
// Definitions by: Ricardo Guimarães <https://github.com/HefloRicardo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/form-data.d.ts
export = Dyno;

declare class Dyno {
    constructor(config: Dyno.DynoReplicaConfig);

    static deserialize(obj: string): Object;
    /**
     * Break a large batch of write operations into a set of requests that can be
     * sent individually or concurrently.
     *
     * @instance
     * @memberof client
     * @param {object} params - unbounded batchWriteItem request parameters. See [DocumentClient.batchWrite](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#batchWrite-property) for details.
     * @returns {RequestSet}
    */
    batchWriteItemRequests(params: any): any;

    /**
     * Break a large batch of get operations into a set of requests that can be
     * sent individually or concurrently.
     *
     * @instance
     * @memberof client
     * @param {object} params - unbounded batchGetItem request parameters. See [DocumentClient.batchGet](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#batchGet-property) for details.
     * @returns {RequestSet}
    */
    batchGetItemRequests(params: any): any;

    /**
     * Create a table. Passthrough to [DynamoDB.createTable](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property),
     * except the function polls DynamoDB until the table is ready to accept
     * reads and writes, at which point the callback function is called.
     *
     * @instance
     * @memberof client
     * @param {object} params - request parameters. See [DynamoDB.createTable](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property) for details.
     * @param {function} [callback] - a function to handle the response. See [DynamoDB.createTable](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property) for details.
     * @returns {Request}
    */

    createTable(params: Dyno.CreateTableParameters, callback: (err: Error, data: Dyno.CreateTableResponse) => void): any;
    /**
     * Delete a table. Passthrough to [DynamoDB.deleteTable](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#deleteTable-property),
     * except the function polls DynamoDB until the table is ready to accept
     * reads and writes, at which point the callback function is called.
     *
     * @instance
     * @memberof client
     * @param {object} params - request parameters. See [DynamoDB.deleteTable](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#deleteTable-property) for details.
     * @param {function} [callback] - a function to handle the response. See [DynamoDB.deleteTable](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#deleteTable-property) for details.
     * @returns {Request}
    */
    deleteTable(params: Dyno.DeleteTableParameters, callback: Function): any;

    /**
     * Provide the results of a query as a [Readable Stream](https://nodejs.org/api/stream.html#stream_class_stream_readable).
     * This function will paginate through query responses, making HTTP requests
     * as the caller reads from the stream.
     *
     * @instance
     * @memberof client
     * @param {object} params - query request parameters. See [DocumentClient.query](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#query-property) for details.
     * @returns {ReadableStream}
    */
    queryStream(params: Object): any;

    /**
     * Provide the results of a scan as a [Readable Stream](https://nodejs.org/api/stream.html#stream_class_stream_readable).
     * This function will paginate through query responses, making HTTP requests
     * as the caller reads from the stream.
     *
     * @instance
     * @memberof client
     * @param {object} params - scan request parameters. See [DocumentClient.scan](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property) for details.
     * @returns {ReadableStream}
    */
    scanStream(params: Object): any;

    /**
     * Query a table or secondary index. Passthrough to [DocumentClient.query](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#query-property).
     *
     * @instance
     * @memberof client
     * @param {object} params - request parameters. See [DocumentClient.query](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#query-property) for details.
     * @param {function} [callback] - a function to handle the response. See [DocumentClient.query](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#query-property) for details.
     * @returns {Request}
    */
    query<T>(params: Dyno.QueryParameters<T>, callback: (error: Error, data: Dyno.QueryResponse<T>) => void): any;

    /**
     * Scan a table or secondary index. Passthrough to [DocumentClient.scan](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property).
     *
     * @instance
     * @memberof client
     * @param {object} params - request parameters. See [DocumentClient.scan](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property) for details.
     * @param {function} [callback] - a function to handle the response. See [DocumentClient.scan](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property) for details.
     * @returns {Request}
    */
    scan<T>(params: Dyno.ScanParameters<T>, callback: (err: Error, data: Dyno.ScanResponse<T>) => void): any;


    /**
     * Get a single record. Passthrough to [DocumentClient.get](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property).
     *
     * @instance
     * @memberof client
     * @param {object} params - request parameters. See [DocumentClient.get](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property) for details.
     * @param {function} [callback] - a function to handle the response. See [DocumentClient.get](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property) for details.
     * @returns {Request}
    */
    getItem<T>(params: Dyno.GetItemParameters<T>, callback: (error: Error, data: Dyno.GetItemResponse<T>) => void): any;

    /**
     * Update a single record. Passthrough to DocumentClient.update.(http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#update-property).
     *
     * @instance
     * @memberof client
     * @param {object} params - request parameters. See [DocumentClient.update ](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#update-property) for details.
     * @param {function} [callback] - a function to handle the response. See [DocumentClient.update](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#update-property) for details.
     * @returns {Request}
    */
    updateItem<T>(params: Dyno.UpdateItemParameters<T>, callback: (error: Error, data: Dyno.UpdateItemResponse<T>) => void): any;
}
declare namespace Dyno {
    export interface DynoReplicaConfig {
        table: string;
        region: string;
        endpoint?: any;
        httpOptions?: DynoHttpOptions;
        accessKeyId?: string;
        secretAccessKey?: string;
        sessionToken?: string;
        // a writable stream for detailed logging from the aws-sdk. See [constructor docs for details](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#constructor-property).
        logger?: Object;
        maxRetries?: number;
    }

    export interface DynoHttpOptions {
        timeout?: number;
        agent?: string;
    }

    export interface ScanResponse<T> extends BaseResponseParameters<T> {
        Items: Array<T>;
        Count: number;
        ScannedCount: number;
        LastEvaluatedKey?: T;
        ConsumedCapacity?: Capacity;
    }

    export interface TableCapacity extends Capacity {
        TableName: string;
        Table: Capacity;
        LocalSecondaryIndexes: Capacity;
        GlobalSecondaryIndexes: Capacity;

    }

    export interface Capacity {
        CapacityUnits: number;
    }

    export interface BaseRequestParameters<T> {
        TableName?: string;
        ExpressionAttributeNames?: {[keyName: string]: keyof T};
        ExpressionAttributeValues?: {[keyName: string] : AttributeValueDefinition};
        ReturnConsumedCapacity?: 'INDEXES' | 'TOTAL' | 'NONE';
    }

    export interface BaseResponseParameters<T> {

    }

    export interface BaseGetRequestParameters<T> extends BaseRequestParameters<T> {
        AttributesToGet?: Array<string>;
        ConsistentRead?: boolean;
        ProjectionExpression?: string;
        ExclusiveStartKey?: Partial<T>;
        Select?: 'COUNT' | 'ALL_ATTRIBUTES' | 'ALL_PROJECTED_ATTRIBUTES' | 'SPECIFIC_ATTRIBUTES';
        IndexName?: string;
        Limit?: number;
        Pages?: number
    }

    export interface GetItemParameters<T> extends BaseGetRequestParameters<T> {
        Key: Partial<T>;
    }

    export interface UpdateItemParameters<T> extends BaseRequestParameters<T> {
        Key: Partial<T>;
        AttributeUpdates: {[K in keyof T]?: UpdateAttribute};
        ReturnValues?: 'NONE' | 'ALL_OLD' | 'UPDATED_OLD' | 'ALL_NEW' | 'UPDATED_NEW';
        ReturnItemCollectionMetrics?: 'SIZE' | 'NONE';
    }
    export interface UpdateItemResponse<T> {

    }

    export interface UpdateAttribute {
        Action?: 'ADD' | 'PUT' | 'DELETE';
        Value?: AttributeValueDefinition;
    }

    export interface QueryParameters<T> extends BaseGetRequestParameters<T> {
        FilterExpression?: string;
        ExpressionAttributeValues?: {[key: string]: AttributeValueDefinition };
        QueryFilter?: {[K in keyof T]?: FilterValue };
        KeyConditions?: {[K in keyof T]?: FilterValue }
    }

    export interface ScanParameters<T> extends BaseGetRequestParameters<T> {
        FilterExpression?: string;
        ExpressionAttributeValues?: {[key: string]: AttributeValueDefinition };
        ScanFilter?: {[K in keyof T]?: FilterValue };
    }
    export interface FilterValue {
        ComparisonOperator?: 'EQ' | 'NE' | 'IN' | 'LE' | 'LT' | 'GE' | 'GT' | 'BETWEEN' | 'NOT_NULL' | 'NULL' | 'CONTAINS' | 'NOT_CONTAINS' | 'BEGINS_WITH';
        AttributeValueList?: Array<AttributeValueDefinition>
    }

    type AttributeValueDefinition =  string | Buffer | boolean | number | Array<Buffer | string | number> | Array<{[keyName: string]: AttributeValueDefinition}>;
        // B?: Buffer | string;
        // BOOL?: boolean;
        // BS?: Array<Buffer | string>;
        // L?: Array<AttributeValueDefinition>;
        // M?: {[keyName: string]: AttributeValueDefinition };
        // N?: number;
        // NS?: Array<number>;
        // NULL?: boolean;
        // S?: string;
        // SS?: Array<string>;
    //}

    export interface AttributeDefinition {
        AttributeName: string;
        /* 'S | N | B' */
        AttributeType: string;
    }

    export interface KeyDefinition {
        AttributeName: string;
        /* 'HASH | RANGE' */
        KeyType: string;
    }

    export interface Throughput {
        ReadCapacityUnits: number;
        WriteCapacityUnits: number;
    }

    export interface GlobalIndex extends Index {
        ProvisionedThroughput: Throughput;
    }

    export interface Index {
        IndexName: string;
        KeySchema: Array<KeyDefinition>;
        Projection: Projection;
    }

    export interface Projection {
        NonKeyAttributes?: Array<string>;
        /* 'ALL | KEYS_ONLY | INCLUDE' */
        ProjectionType?: string;
    }

    export interface StreamSpec {
        StreamEnabled: boolean;
        /* 'NEW_IMAGE | OLD_IMAGE | NEW_AND_OLD_IMAGES | KEYS_ONLY' */
        StreamViewType: string;
    }

    export interface CreateTableParameters {
        AttributeDefinitions: Array<AttributeDefinition>;
        KeySchema: Array<KeyDefinition>;
        ProvisionedThroughput: Throughput;
        TableName: string;
        GlobalSecondaryIndexes?: Array<GlobalIndex>;
        LocalSecondaryIndexes?: Array<Index>;
        StreamSpecification?: StreamSpec;
    }

    export interface CreateTableResponse {
        TableDefinition: CreateTableDescription;
    }

    export interface CreateTableDescription {
        LatestStreamLabel: string;
        LatestStreamArn: string;
    }

    export interface DeleteTableParameters {
        TableName: string;
    }
    export interface QueryResponse<T> extends BaseResponseParameters<T> {
        Items: Array<T>;
    }
    export interface GetItemResponse<T> extends BaseResponseParameters<T> {
        Item: T;
    }
}

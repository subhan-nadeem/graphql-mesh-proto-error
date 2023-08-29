// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace RequestsGrpcTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  GreetingService_GetGreeting?: Maybe<GreetingResult>;
  GreetingService_connectivityState?: Maybe<ConnectivityState>;
};


export type QueryGreetingService_GetGreetingArgs = {
  input?: InputMaybe<GreetingRequest_Input>;
};


export type QueryGreetingService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GreetingResult = {
  greeting?: Maybe<Scalars['String']['output']>;
};

export type GreetingRequest_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ConnectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

  export type QuerySdk = {
      /** undefined **/
  GreetingService_GetGreeting: InContextSdkMethod<Query['GreetingService_GetGreeting'], QueryGreetingService_GetGreetingArgs, MeshContext>,
  /** undefined **/
  GreetingService_connectivityState: InContextSdkMethod<Query['GreetingService_connectivityState'], QueryGreetingService_connectivityStateArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["RequestsGRPC"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}

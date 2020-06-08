/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { StringDict } from "../utils/MsalTypes";
import { AccountEntity } from "../cache/entities/AccountEntity";

/**
 * Result returned from the authority's token endpoint.
 */
export class AuthenticationResult {
    uniqueId: string;
    tenantId: string;
    scopes: Array<string>;
    idToken: string;
    idTokenClaims: StringDict;
    accessToken: string;
    expiresOn: Date;
    account: AccountEntity;
    extExpiresOn?: Date;
    state?: string;
    familyId?: string;
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn:'root' })
export class GraphQLService {
  public async fetchGraphQL(operationsDoc: string, operationName?: string, variables: Record<string, any> = {}): Promise<any> {
    const httpRequestResponse = await fetch(environment.graphQLEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        query: operationsDoc,
        variables,
        operationName,
      }),
    });
    const responseJson = await httpRequestResponse.json();
    if (responseJson.errors) {
      console.error(`[GRAPHQL ERROR] '${operationName}'.`, {
        errors: responseJson.errors,
        opDoc: operationsDoc,
        args: variables,
      });
      throw new Error(responseJson.errors.map((err: Error) => err.message).join(','));
    }
    return responseJson.data;
  }
}

# CircleCI V2 JS client

Javascript client generated from OpenAPI specifications available at https://circleci.com/docs/api/v2/index.html

## Usage

```typescript
import {createClient, getWorkflowById} from '@celtra/circleci-v2'

const client = createClient('myToken')

const workflow = await getWorkflowById({
    client,
    path: {
        id: 'abcd',
    },
})
```

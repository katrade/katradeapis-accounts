# Katrade Accounts API

### Getting Started
```shell
npm install @katradeapis/accounts --save
```
or

```shell
yarn add @katradeapis/accounts
```

#### Import

JavaScript or NodeJS (ES5)
```js
const { AccountAPI } = require("@katradeapis/accounts")
```

Typescript or ES6
```ts
import { AccountAPI } from "@katradeapis/accounts"
```

#### Usage

Initialize API instance
```ts
const kaccounts = new AccountAPI({
  clientId: "<your-client-id>",
  type: "<'production' or 'development'>",
})
```

Get authorize URL. Example with data scope 0. Reference string is optional
```ts
const scope = "0"
const ref = "<ref-here>"
const authUrl = kaccounts.signinUrl(scope, ref)

console.log(authUrl)  
// https://accounts-katrade.herokuapp.com/signin?client_id=<your-client-id>&scope=0&ref=<ref-here>
```

The authorize URL will bring you to sign in with KU page and will return access token, refresh token and ref (optional) with
querystring back to your registered callback url.

### Developing React App
There is a prebuilt **Sign in with KU** button. This is an exmaple of using prebuilt button.

```ts
import { AccountAPI, SigninButton } from "@katradeapis/accounts"

...

const kaccounts = new AccountAPI({
  clientId: "<your-client-id>",
  type: "<'production' or 'development'>",
})

export default function MyComponent() {
  return (
    <SigninButton apiInstance={kaccounts} width="300px" />
  )
}

```

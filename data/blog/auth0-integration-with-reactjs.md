---
title: "Integrating Auth0 Authentication in ReactJS"
date: "2024-10-05"
readTime: "10 min read"
slug: "auth0-integration-with-reactjs"
---

# Integrating Auth0 Authentication in ReactJS

Auth0 is a popular authentication-as-a-service platform. In this post, we'll integrate Auth0 into a ReactJS app for secure login, logout, protecting routes, and calling secured APIs.

## Why Auth0?

- **Easy integration** with React
- **Supports social logins** (Google, Facebook, etc.)
- **Secure and scalable**
- **Supports RBAC** (roles, permissions, and access control)

## Prerequisites

- Node.js and npm installed
- A React project (e.g. created with `create-react-app` or Vite)
- An Auth0 account

## Setting Up Auth0

1. Sign up at [Auth0](https://auth0.com/).
2. In the **Applications** section, create a new **Single Page Application**.
3. Note your:
   - **Domain**
   - **Client ID**
   - (Optional) **API Identifier** if you plan to call a backend API
4. Add your local development URL (e.g. `http://localhost:3000`) to:
   - **Allowed Callback URLs**
   - **Allowed Logout URLs**
   - **Allowed Web Origins**

## Installing SDK

```bash
npm install @auth0/auth0-react
```

## Configuring Environment Variables

Create a `.env` file in the root of your React project:

```env
REACT_APP_AUTH0_DOMAIN=your-tenant.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your-client-id
REACT_APP_AUTH0_AUDIENCE=https://your-api-identifier (optional if using API)
```

> ⚠️ Never hardcode secrets directly in your components.

## Wrapping the App with `Auth0Provider`

Edit `index.js` (or `main.jsx` if using Vite):

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: audience, // Required if you need API access
    }}
  >
    <App />
  </Auth0Provider>
);
```

## Using Auth0 Hooks for Login/Logout

```jsx
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <img src={user.picture} alt={user.name} />
      <p>Email: {user.email}</p>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log out
      </button>
    </div>
  );
}

export default Profile;
```

## Protecting Routes with Auth0

You can restrict access to certain pages:

```jsx
import { withAuthenticationRequired } from "@auth0/auth0-react";

function Dashboard() {
  return <h2>Private Dashboard</h2>;
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <div>Loading...</div>,
});
```

Now, when a user tries to access `/dashboard`, they will be redirected to Auth0 login if not authenticated.

## Calling a Secured API

If you created an API in Auth0, you’ll need to send an **access token**:

```jsx
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function ApiCaller() {
  const { getAccessTokenSilently } = useAuth0();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const res = await fetch("http://localhost:4000/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [getAccessTokenSilently]);

  return <div>{message ? message : "Loading..."}</div>;
}

export default ApiCaller;
```

## Conclusion

Auth0 makes authentication in ReactJS simple and secure:

- Configured **login and logout**
- Displayed **user profile**
- Protected **routes**
- Integrated with a **secured API**

Next steps:

- Explore **roles & permissions** in the Auth0 dashboard
- Add **social logins**
- Implement **silent authentication** for smoother UX

👉 Check out [Auth0 React SDK docs](https://auth0.com/docs/libraries/auth0-react) for deeper features.

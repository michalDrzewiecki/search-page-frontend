import { useRouteError } from "react-router-dom";

export const ErrorNotFoundRoute = () => {
  const error = useRouteError();

  const prepareErrorMessage = () => {
    if (error instanceof Error) {
      return <i>{error.message}</i>;
    }
    return <i>Unknown route</i>;
  }

  return (
    <div id="error-not-found-route-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {
          prepareErrorMessage()
        }
      </p>
    </div>
  );
}

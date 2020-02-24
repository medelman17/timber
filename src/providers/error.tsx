import * as React from "react";
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN
});

export class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = { hasError: false, eventId: null };

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState(prev => ({ ...prev, eventId }));
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>Oh No!</div>;
    }
    return this.props.children;
  }
}

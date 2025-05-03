import { Component, ErrorInfo, ReactNode } from 'react';
import Error from '../error/Error';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught in Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Error title="문제가 발생했습니다." description="잠시 후 다시 시도해 주세요." />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

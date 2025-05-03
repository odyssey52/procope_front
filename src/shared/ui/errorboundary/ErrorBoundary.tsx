import { Component, ErrorInfo, ReactNode } from 'react';
import Error from '../error/Error';

interface ErrorBoundaryProps {
  children: ReactNode;
  title?: string;
  description?: string;
  onRetry?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 타입에 따른 처리
    if (error.message.includes('Network')) {
      console.error('Network Error:', error, errorInfo);
    } else if (error.message.includes('팀 카드')) {
      console.error('Team Card Error:', error, errorInfo);
    } else {
      console.error('General Error:', error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
    this.props.onRetry?.();
  };

  render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error?.message || '';
      return (
        <Error
          title={this.props.title || '문제가 발생했습니다.'}
          description={this.props.description || `잠시 후 다시 시도해 주세요. (${errorMessage})`}
          onRetry={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

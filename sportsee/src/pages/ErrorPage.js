import React, { Component } from 'react'

/**
 * Component for showing error message in case page not found
 *
 * @component
 * @example
 * return (
 *   <ErrorPage />
 * )
 */
class ErrorPage extends Component {
    render() {

        return (
            <div className="error404Page">
                Error 404: Page not found
            </div>
        );
    }
  }
export default ErrorPage;
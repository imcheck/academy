import React from 'react';

import Error from './Error';

const ErrorHoc = ProtectedComponent =>
  class HOC extends React.Component {
    state = { hasError: false };
    componentDidCatch(e) {
      console.log(e);
      this.setState(state => {
        return { hasError: true };
      })
    }
    render() {
      const { hasError } = this.state;
      if(hasError) {
        return <Error>Error!!</Error>;
      } else {
        return <ProtectedComponent />
      }
    }
  }
export default ErrorHoc;
import React, { Component } from 'react';


class ErrorBoundary extends Component {
    state =  {
        error: false
    };
    componentDidCatch(error, info) {  // this.state.error 값이 true라면 에러가 발생했음을 알려주는 문구를 보여 준다.
        this.setState({
            error: true
        });
        console.log({ error, info });
    }
    render() {
        if(this.state.error) return <div>에러가 발생했습니다.</div>;
        return this.props.children;
    }
}

export default ErrorBoundary;
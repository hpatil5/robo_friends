import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError : true})
    }
    render() {
        if(this.state.hasError) {
            return <h1>ooops that is not good</h1>
        }
        else {
            return this.props.children           
        }
    }
}

export default ErrorBoundary

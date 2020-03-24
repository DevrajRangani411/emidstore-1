import React, { Component, Fragment } from "react";
import Loader from "../components/Loader/Loader";
// import Nprogress from "nprogress";
// import ReactPlaceholder from "react-placeholder";
// import "nprogress/nprogress.css";
// import "react-placeholder/lib/reactPlaceholder.css";

export default function asyncComponent(importComponent) {
    class AsyncFunc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null,
            };
        }

        componentWillMount() {
            // Nprogress.start();
        }

        async componentDidMount() {
            this.mounted = true;
            const { default: Component } = await importComponent();
            // Nprogress.done();
            if (this.mounted) {
                this.setState({
                    component: <Component {...this.props} />,
                });
            }
        }
        componentWillUnmount() {
            this.mounted = false;
        }

        render() {
            const Component = this.state.component || <Loader />;
            return (
                // <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
                <Fragment>
                    {Component}
                </Fragment>
                // </ReactPlaceholder>
            );
        }
    }

    return AsyncFunc;
}
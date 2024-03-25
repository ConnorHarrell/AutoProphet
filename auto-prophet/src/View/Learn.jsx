// No Warranty
// This software is provided "as is" without any warranty of any kind, express or implied. This includes, but is not limited to, the warranties of merchantability, fitness for a particular purpose, and non-infringement.
//
// Disclaimer of Liability
// The authors of this software disclaim all liability for any damages, including incidental, consequential, special, or indirect damages, arising from the use or inability to use this software.

import React, { Component } from "react";
import {
    NavLink,
    useLocation
} from "react-router-dom";

export function Learn() {
    const location = useLocation();

    return (
        <div className="page">
            <h2>Financial Learning Modules</h2>
            <h3>Example Module</h3>
            <p>Description: this is an example module description</p>
            <p>Estimated Time: 15 minutes</p>
            <NavLink to="/learningModule" state={{
                "title": "Test Module",
                "description": "this is a description of the test module",
                "estimatedTime": 25,
                "dataCreated": "01/02/23",
                "pages": null}}>View Module</NavLink>
        </div>
    );
}

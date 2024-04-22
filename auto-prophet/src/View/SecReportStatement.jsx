// No Warranty
// This software is provided "as is" without any warranty of any kind, express or implied. This includes, but is not limited to, the warranties of merchantability, fitness for a particular purpose, and non-infringement.
//
// Disclaimer of Liability
// The authors of this software disclaim all liability for any damages, including incidental, consequential, special, or indirect damages, arising from the use or inability to use this software.

import React from "react";

function SecReportStatement(props) {
    return (
        <div className="page">
            {props ?
                <> 
                    <h3>{props.statementName}</h3>
                    {props.concepts.map((concept) => {
                        return (<div>
                            <p>{concept.concept}</p>
                            <p>{concept.value}</p>
                        </div>)
                    })}
                </>
                :
                <div>Report could not be displayed</div> 
            }
            
        </div>
    );
}

export { SecReportStatement };

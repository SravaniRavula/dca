import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "./Breadcrumb.css";

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <ul className="breadcrumbslist p-2 ">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <li className="navlink-active " key={match.url}>
        <Link className="lists" to={match.url || ""}>{breadcrumb}</Link>
       <span className="lists_space">{index < breadcrumbs.length - 1 && " | " }</span> 
      </li>
    ))}
  </ul>
);

export default withBreadcrumbs()(PureBreadcrumbs);


// import React from "react";
// import { Link } from "react-router-dom";
// import withBreadcrumbs from "react-router-breadcrumbs-hoc";
// import "./Breadcrumb.css";

// const PureBreadcrumbs = ({ breadcrumbs, children }) => (
//   <ul className="breadcrumbslist p-2 ">
//     {breadcrumbs.map(({ breadcrumb, match }, index) => (
//       <li className="navlink-active " key={match.url}>
    
//           <Link className="lists" to={match.url || ""}>
//               {children}
//           </Link>
//           <span className="lists_space">
//             {index < breadcrumbs.length - 1 && " | "}
//           </span>
//       </li>
//     ))}
//   </ul>
// );

// export default withBreadcrumbs()(PureBreadcrumbs);

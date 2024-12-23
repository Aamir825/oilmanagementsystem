import React from 'react'
import { FaHome } from "react-icons/fa";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
    const location = useLocation();
    // Split the path into segments
    const paths = location.pathname.split("/").filter((path) => path);
    return (
        <>
            <Breadcrumb style={{ display: "flex", alignItems: "center", gap: "0.5rem", listStyle: "none", color: "#ffbdbd"}}>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/"><FaHome size={20}/></Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {paths.map((path, index) => {
                    const isLast = index === paths.length - 1;
                    const to = `/${paths.slice(0, index + 1).join("/")}`;

                    return (
                        <React.Fragment key={to}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <span>{path.replace(/-/g, " ")}</span> // Show plain text for the last item
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link to={to}>{path.replace(/-/g, " ")}</Link> // Replace dashes with spaces for readability
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    );
                })}
            </Breadcrumb>
        </>
    );
}

export default BreadCrumb
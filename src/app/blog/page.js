"use client"
import React from "react";
//Components
import BlogListing from "@/src/components/BlogListing";
import Blogs from "@/src/components/Blogs";

export default function BlogHome() {
    return (
        <>
            <BlogListing />
            <Blogs />
        </>
    )
}

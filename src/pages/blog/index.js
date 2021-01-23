import React from "react"
import MainLayout from "../../components/main-layout"
import BlogList from "../../components/blog-list"
import jumbotron from "../images/blog-jumbotron.jpg"

export default function BlogPage() {
  return (
    <div style={{backgroundColor: "#eeedeb"}}>
        <MainLayout bgImage={jumbotron}>
            <BlogList></BlogList> 
        </MainLayout>
    </div>
  );
}



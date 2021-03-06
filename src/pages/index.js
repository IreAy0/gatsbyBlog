import React from 'react';
import Insta from '../components/insta';
import Layout from '../components/layout';
import usePosts from "../hooks/use-posts";
import PostPreview from '../components/post-preview'
import Hero from '../components/hero';



export default () =>{

const posts = usePosts();

 return (
     <>
     <Hero />
<Layout>
{/* <h1>Home</h1>
<p>Hello world</p>
<Link to ='/about'>about &rarr; </Link> */}


<h2> Read my blog </h2>
{posts.map(post =>(
<PostPreview key={post.slug} post={post} /> 
))}
<Insta />
</Layout>
</>
    );}

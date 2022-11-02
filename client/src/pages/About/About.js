import React from "react";

const About = () => {
  return (
    <div>
      <nav>
        <div class="site-tittle">
          <a href="./pages/Home">
            <strong>
              {" "}
              <h1>About Cocktail Sipmle</h1>{" "}
            </strong>
          </a>

          <p>
            For this list, we’ve comprised some of the most autumnal cocktail
            recipes you’ll find on the internet. The kind of cocktails that’ll
            make your house smell grandma’s cinnamon pumpkin pie. Let’s GO!
          </p>
        </div><br></br>
        <ul>
          <li>
            <a href="/home">Blogs</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/blogs/create">New Blog</a>
          </li>
        </ul>
        <a href="/">Homepage</a>
        <a href="/about">About page</a>
      </nav>
      <div class="about Content"><br></br>
        <strong><h1>Start Your Autumn with These 10 Fall Cocktails</h1></strong>
        <p>
          Understanding and managing your finances can be challenging. But never
          fear -- personal finance bloggers are here to save the day! At
          personal finance blogs, you'll find the tools you need to get out of
          debt, save up for your first home, and more. These experts offer free
          tips, tricks, and explanations for complex financial concepts.
        </p>
      </div>
    </div>
  );
};

export default About;

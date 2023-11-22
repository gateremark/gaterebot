![GitHub deployments](https://img.shields.io/github/deployments/gateremark/gaterebot/production?style=flat&logo=vercel&logoColor=white&label=vercel)

# GatereBot

GatereBot is a ChatGPT-inspired project that leverages the OpenAI API for real-time natural language processing. It is built using NextJS, Tailwind CSS, OpenAI API, MongoDB and Mongoose for chat storage, React Markdown, Vercel AI SDK, and Next Auth for authentication.

<div align="center">
<a href="https://gaterebot.vercel.app/">
   
![GatereBotAuth](https://firebasestorage.googleapis.com/v0/b/gateremark.appspot.com/o/gaterebot1.png?alt=media&token=9900d90c-15a6-4c02-bad1-a5a3db557f73)

</a>
</div>

---

<div align="center">
<a href="https://gaterebot.vercel.app/">
   
![GatereBot](https://firebasestorage.googleapis.com/v0/b/gateremark.appspot.com/o/gaterebot3.png?alt=media&token=0f51faf8-f61b-4a51-9320-14e13f3e0e10)

</a>
</div>

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies)
-   [Installation](#installation)
-   [Deployment](#deployment)
-   [Contributing](#contributing)

## Features

-   Utilizes NextJS and Tailwind CSS for a responsive and modern UI
-   Real-time natural language processing using OpenAI API
-   Chat storage in MongoDB with Mongoose
-   User authentication with Next Auth
-   Integration with Vercel AI SDK for enhanced functionality
-   Supports rendering of React Markdown for rich content

## Technologies

-   [NextJS](https://nextjs.org/) : React framework for server-side rendering and optimal performance.
-   [Tailwind CSS](https://tailwindcss.com/) : A utility-first CSS framework for rapidly designing responsive web pages.
-   [OpenAI API](https://platform.openai.com/docs/overview) : Enables real-time natural language processing for user interactions.
-   [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/) : NoSQL database and ODM for flexible data storage and modeling.
-   [React Markdown](https://www.npmjs.com/package/react-markdown) : Library for rendering Markdown content as React components.
-   [Vercel AI SDK](https://sdk.vercel.ai/docs) : Integrates AI capabilities into the application deployed on Vercel.
-   [Next Auth](https://next-auth.js.org/) : Authentication library for secure user access with social authentication providers.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/gateremark/gaterebot.git
    ```

2. Install dependencies:

    ```bash
    cd gaterebot
    pnpm install
    ```

3. Set up environment variables. Create a `.env` file in the root of your project and add the following:

    ```bash
    NEXTAUTH_SECRET=replace_me
    GITHUB_ID=replace_me
    GITHUB_SECRET=replace_me
    GOOGLE_CLIENT_ID=replace_me
    GOOGLE_CLIENT_SECRET=replace_me
    OPENAI_API_KEY=replace_me
    MONGODB_URI=replace_me
    ```

4. Run the development server:

    ```bash
    pnpm run dev
    ```

5. Open your browser and navigate to http://localhost:3000.

## Deployment

GatereBot is deployed using Vercel. Any changes pushed to the main branch will trigger an automatic deployment.
You can visit the live version of gaterebot at https://gaterebot.vercel.app/.

## Contributing

Welcoming all contributions to improve the project! To contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of your changes"
    ```
4. Push your changes to your fork:
    ```bash
    git push origin feature-name
    ```
5. Submit a pull request to the main branch of the original repository.

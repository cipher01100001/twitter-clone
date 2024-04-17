# twitter-clone 🐦
Welcome to Twitter Clone, a web application built with Next.js and powered by Supabase. This project mimics the functionality of Twitter, allowing users to sign up using their GitHub accounts and share short messages, or "tweets" with others. It provides a simple and familiar interface for users to interact with, creating a social media experience similar to the popular platform.

## ⭐️ Features

- **User Registration with GitHub**: 
  - Users can sign up and log in to the application using their GitHub account.
  - The application uses GitHub OAuth authentication to securely authenticate users.
  - After authentication, user information is stored in the Supabase database, including their GitHub username and profile picture.
- **Posting Tweets**: The tweet creation form includes a text input for the tweet content.
When a user submits a tweet, it is stored in the Supabase database along with the user's ID and timestamp.
- **Viewing Tweets**: The feed is dynamically updated as new tweets are posted by users.

## 🚀 Getting Started

To get started with twitter-clone, follow these steps:

1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/cipher01100001/twitter-clone.git
2. Navigate to the project directory:
    ```bash
    cd twitter-clone
3. Install dependencies using npm:
    ```bash
    npm install
4. Run the development server
    ```bash
    npm run dev
5. Open your browser and visit localhost generated to view the application.

## 🛠️ Technologies Used

- Next.js ![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
- TypeScript ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
- Supabase ![Supabase](https://shields.io/badge/supabase-black?logo=supabase&style=for-the-badge%22)
- HTML ![HTML](https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white)
- CSS ![CSS](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white)
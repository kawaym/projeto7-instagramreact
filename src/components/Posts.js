import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      userName: "meowed",
      userImage: "assets/img/meowed.svg",
      contentImage: "assets/img/gato-telefone.svg",
      likedByImage: "assets/img/respondeai.svg",
      likedByText: "respondeai",
      initialLikesAmount: 101523,
      isSaved: false,
      isLiked: true
    },
    {
      userName: "barked",
      userImage: "assets/img/barked.svg",
      contentImage: "assets/img/dog.svg",
      likedByImage: "assets/img/adorable_animals.svg",
      likedByText: "adorable_animals",
      initialLikesAmount: 200541,
      isSaved: true,
      isLiked: false
    },
  ];

  return (
    <div class="posts">
      {posts.map((e) => (
        <Post
          userName={e.userName}
          userImage={e.userImage}
          contentImage={e.contentImage}
          likedByImage={e.likedByImage}
          likedByText={e.likedByText}
          initialLikesAmount={e.initialLikesAmount}
          isSaved={e.isSaved}
          isLiked = {e.isLiked}
        />
      ))}
    </div>
  );
}

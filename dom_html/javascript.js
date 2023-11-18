const tweet = document.getElementById("tweet");
const postButton = document.getElementById("post");

postButton.addEventListener("click", () => {
    const tweetValue = tweet.value;
    const newTweet = document.createElement("p");
    newTweet.textContent = tweetValue;

    document.body.append(newTweet);
    tweet.value = "";
});
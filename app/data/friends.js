var friends = [
    {
        name: "Liam",
        photo: "https://media.licdn.com/dms/image/C5603AQHruoixwE4VnQ/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=tVATrwffnvzOQbIFO8nK3AJn4hZdNrVz3Axy6N0lxcs",
        scores: [5, 3, 1, 3, 4, 5, 3, 3, 2, 1]
    },
    {
        name: "Willie",
        photo: "https://media.licdn.com/dms/image/C5603AQHruoixwE4VnQ/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=tVATrwffnvzOQbIFO8nK3AJn4hZdNrVz3Axy6N0lxcs",
        scores: [2, 3, 5, 3, 4, 5, 1, 3, 2, 1]
    }
]

// The AJAX is posting answers as strings instead integers — this code would cycle through everyone in the friends array scores and convert them. This does not work.
// for (let j = 0; j < friends.length; j++) {
//     for (k = 0; k < friends[j].scores.length; k++) {
//         parseInt(friends[j].scores[k]);
//     }
// }

const totalDifference = function (userOne, userTwo) {
    var scoreOne = 0;
    var scoreTwo = 0;
    var difference = 0;

    for (let i = 0; i < userOne.scores.length; i++) {
        scoreOne = scoreOne + userOne.scores[i]
    }

    for (let i = 0; i < userTwo.scores.length; i++) {
        scoreTwo = scoreTwo + userTwo.scores[i]
    }

    difference = scoreOne - scoreTwo;

    return difference;

    return userTwo;
}

console.log(totalDifference(friends[0], friends[1]));

module.exports = friends;
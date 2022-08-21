const faker = require('faker');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const commentList = () => {
    let list = [];

    let length = getRandomInt(6);
    for (let index = 0; index < length; index++) {


        const element = {
            _id: faker.datatype.uuid(),
            image: faker.internet.avatar(),
            name: faker.name.findName(),
            comment: faker.lorem.paragraph()
        };
        list.push(element);

    }
    return list;
}


const reportElementList = () => {
    let list = [];

    let length = 11;
    for (let index = 0; index < length; index++) {


        const element = {
            _id: faker.datatype.uuid(),

            title: faker.name.findName(),

        };
        list.push(element);

    }
    return list;
}





const CreatList = (data, isNotSingle) => {
    let list = [];

    let length = getRandomInt(6);

    if (length === 0) {
        length = 5;

    }


    for (let index = 0; index < length; index++) {


        let element = data[0]();
        let ind = getRandomInt(data.length);

        if (isNotSingle) {



            element = data[ind]();
        }
        list.push(element);

    }
    return list;
}


const ImageFed = () => {
    return {
        _id: faker.datatype.uuid(),
        uri: faker.internet.avatar(),
        albumImageUri: faker.image.imageUrl(),
        name: faker.name.findName(),
        title: faker.name.jobTitle(),
        discription: faker.lorem.paragraph(),
        comments: commentList()
    }


}


const VideoFeed = () => {
    return {
        _id: faker.datatype.uuid(),
        uri: faker.internet.avatar(),
        name: faker.name.findName(),
        title: faker.name.jobTitle(),
        videoUrl: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        comments: commentList()
    }
}

const TextFeed = () => {
    return {

        _id: faker.datatype.uuid(),
        uri: faker.internet.avatar(),
        name: faker.name.findName(),
        title: faker.name.jobTitle(),
        discription: faker.lorem.paragraph(),
        comments: commentList()
    }

}



const albumList = CreatList([ImageFed, TextFeed, VideoFeed], true);
console.log(albumList.length);


const TodaysChallenge = {
    title: "July month of kindness",
    discription: faker.lorem.paragraph(),
    isTodaysTask: true,
}

const requests = [
    {
        status: "PENDING",
        _id: "613f0ad0a12def3569ccc657",
        admin: "6130e98cd3e879001348a28c",
        from: {
            profile_photo: "https://fcloneodin.herokuapp.com/images/no_pic.jpg",
            _id: "6130e98cd3e879001348a28c",
            name: "new sharads"
        },
        group: {
            _id: "613b79755c7d257c69d96268",
            name: "group name"
        },
        __v: 0,
        createdAt: "2021-09-13T08:24:48.722Z",
        updatedAt: "2021-09-13T08:24:48.722Z"
    }
]

const AllChallenges = [
    {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph(),
        challengeTip: faker.lorem.paragraph()
    },
    {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph(),
        challengeTip: faker.lorem.paragraph()
    }
    ,
    {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph(),
        challengeTip: faker.lorem.paragraph()
    }
    ,
    {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph(),
        challengeTip: faker.lorem.paragraph()
    },
    {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph(),
        challengeTip: faker.lorem.paragraph()
    }
    , {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph(),
        challengeTip: faker.lorem.paragraph()
    }, {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph(),
        challengeTip: faker.lorem.paragraph()
    }, {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph(),
        challengeTip: faker.lorem.paragraph()
    }, {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph()
    }, {

        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        date: faker.date.past(),
        status: faker.datatype.boolean(),
        discription: faker.lorem.paragraph()
    }
]
const UserData = {
    name: faker.name.findName(),
    _id: faker.datatype.uuid(),
    profile_photo: faker.internet.avatar(),
    groupName: faker.name.jobTitle(),
    points: faker.datatype.number()
}

const SingleChallange = {

    _id: faker.datatype.uuid(),
    title: faker.name.jobTitle(),
    uri: faker.internet.avatar(),
    date: faker.date.past(),
    status: faker.datatype.boolean(),
    discription: faker.lorem.paragraph(),
    challengeTip: faker.lorem.paragraph()
}
// const { id, title, uri } = data;
const GroupMembers = [
    {
        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar()
    }, {
        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar()
    }, {
        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar()
    }, {
        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar()
    }, {
        _id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar()
    },
]

//
//const { id, title, uri, adminName, memberCount, avgPoints, action } = data;

const MyGroupsData = [
    {
        id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        adminName: faker.name.findName(),
        memberCount: faker.datatype.number(),
        avgPoints: faker.datatype.number()
    },
    {
        id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        adminName: faker.name.findName(),
        memberCount: faker.datatype.number(),
        avgPoints: faker.datatype.number()
    },
    {
        id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        adminName: faker.name.findName(),
        memberCount: faker.datatype.number(),
        avgPoints: faker.datatype.number()
    },
    {
        id: faker.datatype.uuid(),
        title: faker.name.jobTitle(),
        uri: faker.internet.avatar(),
        adminName: faker.name.findName(),
        memberCount: faker.datatype.number(),
        avgPoints: faker.datatype.number()
    }
];

const Rank = [

    {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        points: faker.datatype.number(),
        challengeCount: faker.datatype.number(),
    },
    {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        points: faker.datatype.number(),
        challengeCount: faker.datatype.number(),
    }
    , {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        points: faker.datatype.number(),
        challengeCount: faker.datatype.number(),
    }, {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        points: faker.datatype.number(),
        challengeCount: faker.datatype.number(),
    }
    , {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        points: faker.datatype.number(),
        challengeCount: faker.datatype.number(),
    }
    , {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        points: faker.datatype.number(),
        challengeCount: faker.datatype.number(),
    }
    , {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        points: faker.datatype.number(),
        challengeCount: faker.datatype.number(),
    }
    , {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        points: faker.datatype.number(),
        challengeCount: faker.datatype.number(),
    }
];
export { albumList, TodaysChallenge, AllChallenges, Rank, UserData, SingleChallange, MyGroupsData, GroupMembers, requests, reportElementList }
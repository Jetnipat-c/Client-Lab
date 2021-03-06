// show only data that is created in 2020-10

const dataList = [
  {
    text: "hello",
    createdAt: new Date("2020-04-19T10:00"),
  },
  {
    text: "world",
    createdAt: new Date("2020-05-15T12:00"),
  },
  {
    text: "good",
    createdAt: new Date("2020-10-19T10:20"),
  },
  {
    text: "morning",
    createdAt: new Date("2020-05-19T13:00"),
  },
  {
    text: "afternoon",
    createdAt: new Date("2020-10-19T14:00"),
  },
  {
    text: "yesterday",
    createdAt: new Date("2020-10-19T12:05"),
  },
  {
    text: "night",
    createdAt: new Date("2020-10-19T12:00"),
  },
];

const date = new Date("2020-10");
const result = dataList.filter((item, index) => {
  if (item.createdAt.valueOf() > date.valueOf()) {
    return true;
  } else false;
});

console.log(result);

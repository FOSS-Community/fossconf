import nikita from '../../images/speakers/nikita.jpg'
import tushar from '../../images/speakers/tushar.jpg'

const schedule = {
  year: 2023,
  timeZone: 'Asia/Kolkata',
  dates: [
    {
      date: '2022-11-26T00:00:00',
      timeZone: 'Asia/Kolkata',
      talks: [
        {
          title: 'Opening',
          startTime: '2022-10-29T10:00:00+08:00',
          endTime: '2022-10-29T10:30:00+08:00',
          id: 'opening',
        },
        {
          title: 'Talk Title',
          summary:
            "Talk Description",
          startTime: '2023-11-26T10:30:00+08:00',
          endTime: '2023-11-26T11:15:00+08:00',
          track: '0',
          id: 'talk-title',
          video: 'https://youtu.be/jBSexKI935w',
          speakers: [
            {
              name: 'Nikita Sobolev',
              id: 'nikita',
              imgUrl: { default: nikita },
              position: 'wemake.services',
              bio: 'Nikita Sobolev, a versatile CTO, mentor, and advocate for open source, with a passion for spreading knowledge and organizing conferences',
              twitter: 'nikita',
            },
            {
              name: 'Another One',
              id: 'another-one',
              imgUrl: { default: tushar },
              position: 'Senior Engineer, BlackRock',
              bio: '',
              twitter: 'another',
            },
          ],
        },
        {
          title: 'Lunch',
          startTime: '2022-10-29T15:00:00+08:00',
          endTime: '2022-10-29T16:30:00+08:00',
          id: 'lunch',
        },
        {
          title: 'Talk Title',
          summary:
            "Talk Description",
          startTime: '2023-11-26T16:30:00+08:00',
          endTime: '2023-11-26T17:15:00+08:00',
          track: '0',
          id: 'talk-title',
          video: 'https://youtu.be/jBSexKI935w',
          speakers: [
            {
              name: 'Nikita Sobolev',
              id: 'nikita',
              imgUrl: { default: nikita},
              position: 'wemake.services',
              bio: 'Nikita Sobolev, a versatile CTO, mentor, and advocate for open source, with a passion for spreading knowledge and organizing conferences',
              twitter: 'nikita',
            },
          ],
        },
      ],
    },
  ],
};

const speakers = schedule.dates.flatMap((date) =>
  date.talks
    .flatMap((talk) => talk.speakers ?? [])
    .sort((a, b) => (a.name > b.name ? 1 : -1)),
);
const tracks = Array.from(
  new Set(
    schedule.dates
      .flatMap((date) => date.talks.map((talk) => talk.track!))
      .filter(Boolean),
  ),
);

export { schedule, speakers, tracks };
// import { textToHtml } from '@src/utils/text-to-html';

// const sessionizeScheduleUrl =
//   'https://sessionize.com/api/v2/sedrhdzi/view/GridSmart';
// const sessionizeSchedule = await (await fetch(sessionizeScheduleUrl)).json();

// const sessionizeSpeakersUrl =
//   'https://sessionize.com/api/v2/sedrhdzi/view/Speakers';
// const sessionizeSpeakers = await (await fetch(sessionizeSpeakersUrl)).json();

// const gridUrl =
//   'https://sessionize.com/view/';

// const speakers = sessionizeSpeakers
//   .filter((speaker) => !speaker.fullName.includes('Nikita Sobolev'))
//   .map((speaker) => ({
//     name: speaker.fullName,
//     id: `sessionize-${speaker.id}`,
//     imgUrl: { default: speaker.profilePicture },
//     position: speaker.tagLine,
//     bio: textToHtml(speaker.bio),
//     twitter: speaker.links
//       ?.filter((link) => link.linkType == 'Twitter')
//       .map((link) => link.url.split('/').pop())
//       .reduce((acc, link) => link || null, null),
//   }));

// const schedule = {
//   year: 2023,
//   timeZone: 'Asia/Kolkata',
//   dates: sessionizeSchedule.map((date) => ({
//     date: date.date,
//     timeZone: 'Asia/Kolkata',
//     talks: date.rooms
//       .flatMap((room) =>
//         room.sessions.map((session) => ({
//           title: session.title,
//           summary: textToHtml(session.description),
//           startTime: session.startsAt,
//           endTime: session.endsAt,
//           track: session.room.replace('Track ', ''),
//           id: `sessionize-${session.id}`,
//           video: session.recordingUrl,
//           speakers: session.title.includes('Nikita Sobolev')
//             ? []
//             : session.speakers.map((speaker) => ({
//                 id: `sessionize-${speaker.id}`,
//                 name: speaker.name,
//                 imgUrl: sessionizeSpeakers
//                   .filter((s) => s.id == speaker.id)
//                   .map((s) => ({
//                     default: s.profilePicture,
//                   }))
//                   .pop(),
//               })),
//         })),
//       )
//       .sort((a, b) => Date.parse(a.startTime) - Date.parse(b.startTime)),
//   })),
// } as const;

// const tracks = Array.from(
//   new Set(
//     schedule.dates
//       .flatMap((date) => date.talks.map((talk) => talk.track!))
//       .filter(Boolean),
//   ),
// );

// export { schedule, speakers, tracks, gridUrl };

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
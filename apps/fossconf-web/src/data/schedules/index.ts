import nikita from '../images/speakers/nikita.jpg'
import tushar from '../images/speakers/tushar.jpeg'
import tushars from '../images/speakers/tushars.jpg'
import jatink from '../images/speakers/jatink.jpg'
import shreya from '../images/speakers/shreya.png'
import swastika from '../images/speakers/swastika.png'

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
          id: 'talk-1',
          speakers: [
            {
              name: 'Nikita Sobolev',
              id: 'nikita',
              imgUrl: {  nikita },
              position: 'CTO, wemake.services',
              bio: 'Nikita Sobolev, a versatile CTO, mentor, and advocate for open source, with a passion for spreading knowledge and organizing conferences',
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
          id: 'talk-2',
          speakers: [
            {
              name: 'Tushar Sadhwani',
              id: 'tushars',
              imgUrl: {tushars},
              position: 'SDE II at DeepSource',
              bio: 'Long term Python developer, author, technical reviewer and speaker. Writing static analysis tools @ DeepSource.',
              twitter: 'tusharisanerd',
            },
          ],
        },
        {
          title: 'Talk Title',
          summary:
            "Talk Description",
          startTime: '2023-11-26T16:30:00+08:00',
          endTime: '2023-11-26T17:15:00+08:00',
          track: '0',
          id: 'talk-3',
          speakers: [
            {
              name: 'Tushar Gupta',
              id: 'tushar',
              imgUrl: { tushar},
              position: 'SDE @Samagra',
              bio: 'SDE at Samagra, GitHub Campus Ambassador, MLH Fellow for Fall&apos;22, and Summer Fellow&apos;22 at Processing Foundation.',
              twitter: 'tushar5526',
            },
          ],
        },
        {
          title: 'Talk Title',
          summary:
            "Talk Description",
          startTime: '2023-11-26T16:30:00+08:00',
          endTime: '2023-11-26T17:15:00+08:00',
          track: '0',
          id: 'talk-4',
          speakers: [
            {
              name: 'Jatin K Malik',
              id: 'jatink',
              imgUrl: { jatink},
              position: 'Principle SE @Atlassian',
              bio: 'Nikita Sobolev, a versatile CTO, mentor, and advocate for open source, with a passion for spreading knowledge and organizing conferences',
              twitter: 'jatinkrmalik',
            },
          ],
        },
        {
          title: 'Panel',
          summary:
            "Talk Description",
          startTime: '2023-11-26T16:30:00+08:00',
          endTime: '2023-11-26T17:15:00+08:00',
          track: '0',
          id: 'talk-title',
          speakers: [
            {
              name: 'Shreya Prasad',
              id: 'shreya',
              imgUrl: { default: shreya},
              position: 'SDE @Atlassian',
              bio: 'Software Development Engineer @Atlassian | Prev: Intuit, BNY Mellon | GitHub Campus Expert&apos;21 | GSoC&apos;21, GCI&apos;19 Mentor @CircuitVerse',
              twitter: 'shreyacasmalert',
            },
            {
              name: 'Swastika Yadav',
              id: 'swastika',
              imgUrl: { default: swastika},
              position: 'Developer Advocate @Rig_dev',
              bio: 'Prev: @tursodatabase | Tweeting about Javascript, Web Development, Communities, Remote jobs, Travel',
              twitter: 'swastika0015',
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
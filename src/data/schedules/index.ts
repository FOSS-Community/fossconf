import nikita from '../images/speakers/nikita.jpg?h=400';
import tushar from '../images/speakers/tushar.jpeg?h=400';
import tushars from '../images/speakers/tushars.jpg?h=400';
import jatink from '../images/speakers/jatink.jpg?h=400';
import shreya from '../images/speakers/shreya.png?h=400';
import swastika from '../images/speakers/swastika.png?h=400';
import misha from '../images/speakers/Misha.jpg?h=400';
import shruti from '../images/speakers/Shruti.jpeg?h=400';

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
          summary: 'Talk Description',
          startTime: '2023-11-26T10:30:00+08:00',
          endTime: '2023-11-26T11:15:00+08:00',
          track: '0',
          id: 'talk-1',
          keynote: [
            {
              name: 'Nikita Sobolev',
              id: 'nikita',
              imgUrl: { default: nikita },
              position: 'CTO, wemake.services',
              bio: 'Nikita Sobolev, a versatile CTO, mentor, and advocate for open source, with a passion for spreading knowledge and organizing conferences',
              website: 'sobolevn.me/about/',
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
          summary: 'Talk Description',
          startTime: '2023-11-26T16:30:00+08:00',
          endTime: '2023-11-26T17:15:00+08:00',
          track: '0',
          id: 'talk-2',
          keynote: [
            {
              name: 'Tushar Sadhwani',
              id: 'tushars',
              imgUrl: { default: tushars },
              position: 'SDE II at DeepSource',
              bio: 'Long term Python developer, author, technical reviewer and speaker. Writing static analysis tools @ DeepSource.',
              twitter: 'tusharisanerd',
            },
          ],
        },
        {
          title: 'Talk Title',
          summary: 'Talk Description',
          startTime: '2023-11-26T16:30:00+08:00',
          endTime: '2023-11-26T17:15:00+08:00',
          track: '0',
          id: 'talk-3',
          keynote: [
            {
              name: 'Tushar Gupta',
              id: 'tushar',
              imgUrl: { default: tushar },
              position: 'SDE @Samagra',
              bio: 'SDE at Samagra, GitHub Campus Ambassador, MLH Fellow for Fall&apos;22, and Summer Fellow&apos;22 at Processing Foundation.',
              twitter: 'tushar5526',
            },
          ],
        },
        {
          title: 'Talk Title',
          summary: 'Talk Description',
          startTime: '2023-11-26T16:30:00+08:00',
          endTime: '2023-11-26T17:15:00+08:00',
          track: '0',
          id: 'talk-4',
          keynote: [
            {
              name: 'Jatin K Malik',
              id: 'jatink',
              imgUrl: { default: jatink },
              position: 'Principle SE @Atlassian',
              bio: 'Principle SE @Atlassian, Previous Positions: Software Architect at Uber, Lead Software Engineer at Uber, SDE III at Synaptic, SDE II at Shuttl and SDE at Adobe.',
              twitter: 'jatinkrmalik',
            },
          ],
        },
        {
          title: 'Panel',
          summary: 'Talk Description',
          startTime: '2023-11-26T16:30:00+08:00',
          endTime: '2023-11-26T17:15:00+08:00',
          track: '0',
          id: 'talk-title',
          panelists: [
            {
              name: 'Shreya Prasad',
              id: 'shreya',
              imgUrl: { default: shreya },
              position: 'SDE @Atlassian',
              bio: 'Software Development Engineer @Atlassian | Prev: Intuit, BNY Mellon | GitHub Campus Expert&apos;21 | GSoC&apos;21, GCI&apos;19 Mentor @CircuitVerse',
              twitter: 'shreyacasmalert',
            },
            {
              name: 'Swastika Yadav',
              id: 'swastika',
              imgUrl: { default: swastika },
              position: 'Developer Advocate @Rig_dev',
              bio: 'Prev: @tursodatabase | Tweeting about Javascript, Web Development, Communities, Remote jobs, Travel',
              twitter: 'swastika0015',
            },
            // {
            //   name: 'Misha Alsner',
            //   id: 'misha',
            //   imgUrl: { default: misha },
            //   position: 'Engineer at Kamaz and SBER',
            //   bio: 'Python/C++ developer.  Engineer at Kamaz and SBER Company. Part of community Ecole 42',
            // },
            {
              name: 'Shruti Panjwani',
              id: 'shruti',
              imgUrl: { default: shruti },
              position: 'Wormhole Fellow',
              bio: 'Full-Stack Web Engineer, Designer & Content Creator',
              twitter: 'shrutipanjwani_',
            },
          ],
        },
      ],
    },
  ],
};

const keynote = schedule.dates.flatMap((date) =>
  date.talks
    .flatMap((talk) => talk.keynote ?? [])
    .sort((a, b) => (a.name > b.name ? 1 : -1)),
);
const panelists = schedule.dates.flatMap((date) =>
  date.talks
    .flatMap((talk) => talk.panelists ?? [])
    .sort((a, b) => (a.name > b.name ? 1 : -1)),
);
const tracks = Array.from(
  new Set(
    schedule.dates
      .flatMap((date) => date.talks.map((talk) => talk.track!))
      .filter(Boolean),
  ),
);

export { schedule, panelists, keynote, tracks };

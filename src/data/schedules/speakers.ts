import { textToHtml } from '@src/utils/text-to-html';

const sessionizeScheduleUrl =
  'https://sessionize.com/api/v2/nwcu1hfs/view/GridSmart';
const sessionizeSchedule = await (await fetch(sessionizeScheduleUrl)).json();

const sessionizeSpeakersUrl =
  'https://sessionize.com/api/v2/nwcu1hfs/view/Speakers';
const sessionizeSpeakers = await (await fetch(sessionizeSpeakersUrl)).json();

const speakers = sessionizeSpeakers
  .filter((speaker: { fullName: string | string[]; }) => !speaker.fullName.includes('Nikita Sobolev'))
  .map((speaker: { fullName: any; id: any; profilePicture: any; tagLine: any; bio: string; links: any[]; }) => ({
    name: speaker.fullName,
    id: `sessionize-${speaker.id}`,
    imgUrl: { default: speaker.profilePicture },
    position: speaker.tagLine,
    bio: textToHtml(speaker.bio),
    twitter: speaker.links
      ?.filter((link: { linkType: string; }) => link.linkType == 'Twitter')
      .map((link: { url: string; }) => link.url.split('/').pop())
      .reduce((acc: any, link: any) => link || null, null),
  }));

const schedule = {
  year: 2023,
  timeZone: 'Asia/Kolkata',
  dates: sessionizeSchedule.map((date: { date: any; rooms: any[]; }) => ({
    date: date.date,
    timeZone: 'Asia/Kolkata',
    talks: date.rooms
      .flatMap((room: { sessions: any[]; }) =>
        room.sessions.map((session: { title: string | string[]; description: string; startsAt: any; endsAt: any; room: string; id: any; recordingUrl: any; speakers: any[]; }) => ({
          title: session.title,
          summary: textToHtml(session.description),
          startTime: session.startsAt,
          endTime: session.endsAt,
          track: session.room.replace('Track ', ''),
          id: `sessionize-${session.id}`,
          video: session.recordingUrl,
          speakers: session.title.includes('Nikita Sobolev')
            ? []
            : session.speakers.map((speaker: { id: any; name: any; }) => ({
                id: `sessionize-${speaker.id}`,
                name: speaker.name,
                imgUrl: sessionizeSpeakers
                  .filter((s: { id: any; }) => s.id == speaker.id)
                  .map((s: { profilePicture: any; }) => ({
                    default: s.profilePicture,
                  }))
                  .pop(),
              })),
        })),
      )
      .sort((a: { startTime: string; }, b: { startTime: string; }) => Date.parse(a.startTime) - Date.parse(b.startTime)),
  })),
} as const;

const tracks = Array.from(
  new Set(
    schedule.dates
      .flatMap((date: { talks: any[]; }) => date.talks.map((talk: { track: any; }) => talk.track!))
      .filter(Boolean),
  ),
);

export { schedule, speakers, tracks };


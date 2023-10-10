import chenhuijing from './images/chen-hui-jing.jpg?h=400';
import chenhuijingWebp from './images/chen-hui-jing.jpg?h=400&webp';
import chewchoonkeat from './images/chew-choon-keat.jpg?h=400';
import chewchoonkeatWebp from './images/chew-choon-keat.jpg?h=400&webp';
import eugenecheah from './images/eugene-cheah.jpg?h=400';
import eugenecheahWebp from './images/eugene-cheah.jpg?h=400&webp';
import gaowei from './images/gao-wei.jpg?h=400';
import gaoweiWebp from './images/gao-wei.jpg?h=400&webp';
import julespoon from './images/jules-poon.jpg?h=400';
import julespoonWebp from './images/jules-poon.jpg?h=400&webp';
import kenjin from './images/ken-jin.jpg?h=400';
import kenjinWebp from './images/ken-jin.jpg?h=400&webp';
import uzynchua from './images/u-zyn-chua.jpg?h=400';
import uzynchuaWebp from './images/u-zyn-chua.jpg?h=400&webp';
import wongmengweng from './images/wong-meng-weng.png?h=400';
import wongmengwengWebp from './images/wong-meng-weng.png?h=400&webp';
import tenzhiyang from './images/ten-zhi-yang.png?h=400';
import tenzhiyangWebp from './images/ten-zhi-yang.png?h=400&webp';

const schedule = {
  year: 2022,
  timeZone: 'Asia/Singapore',
  dates: [
    {
      date: '2022-10-29T00:00:00',
      timeZone: 'Asia/Singapore',
      talks: [
        {
          title: 'Opening',
          startTime: '2022-10-29T10:00:00+08:00',
          endTime: '2022-10-29T10:30:00+08:00',
          id: 'opening',
        },
        {
          title: 'The horizontal overflow problem',
          summary:
            "Have you ever visited a website on a phone only to find that when you want to scroll down, the entire page also sways from left to right due to some mysterious horizontal overflow? Unintended horizontal overscrolling is not a great experience. Let's break the problem down and also try to solve it.",
          startTime: '2022-10-29T10:30:00+08:00',
          endTime: '2022-10-29T11:15:00+08:00',
          track: '0',
          id: 'the-horizontal-overflow-problem',
          video: 'https://youtu.be/jBSexKI935w',
          speakers: [
            {
              name: 'Chen Hui Jing',
              id: 'chen-hui-jing',
              imgUrl: { default: chenhuijing, webp: chenhuijingWebp },
              position: 'Shopify',
              bio: 'Chen Hui Jing is a self-taught designer and developer living in Singapore, with an inordinate love for CSS, as evidenced by her blog, that is mostly about CSS, and her tweets, which are largely about typography and the web. She used to play basketball full-time and launched her web career during downtime between training sessions. Hui Jing is currently a senior frontend developer with Shopify.',
              twitter: 'hj_chen',
            },
            {
              name: 'Gao Wei',
              id: 'gao-wei',
              imgUrl: { default: gaowei, webp: gaoweiWebp },
              position: 'Senior Engineer, BlackRock',
              bio: '',
              twitter: 'wgao19',
            },
          ],
        },
        {
          title: "Rolling Your Own Cryptography: Why You Shouldn't",
          summary:
            "In 2019, a trivial flaw existed on Flickr that allowed user impersonation. It's one of many that come from flaws in the use of cryptography: And it's not the developer's fault; Crypto is fragile. This talk describes the wide contexts crypto is used (and attacked) and all that can go wrong.",
          startTime: '2022-10-29T11:15:00+08:00',
          endTime: '2022-10-29T12:00:00+08:00',
          track: '1',
          id: 'rolling-your-own-cryptography-why-you-shouldn-t',
          slides:
            'https://docs.google.com/presentation/d/1aTNLh7NwL5uu-KYpv3l6ct2_9IDkLM5I3NgiQMImAAw/edit?usp=drivesdk',
          video: 'https://youtu.be/bWEpR07TZGA',
          speakers: [
            {
              name: 'Jules Poon',
              id: 'jules-poon',
              imgUrl: { default: julespoon, webp: julespoonWebp },
              position: 'Hobbyist',
              bio: `- Enthusiast interested in Mathematics, Cybersecurity, and Programming Languages<br/>   - Part of <a href="https://ctftime.org/team/151372" rel="noreferrer noopener" target="_blank">Social Engineering Experts</a>, Singapore's top 1 cybersecurity competitive team and ranking 27th globally (as of Sept 2022), as one of two members who specialise in cryptography<br/>   - Helped organise local and international cybersecurity competitions (CTFSG 2022, <a href="https://ctftime.org/event/1543/" rel="noreferrer noopener" target="_blank">SEETF 2022</a>)<br/>- Was a software developer at CSIT for a year developing program analysis tooling ig<br/>- Errrrrr published <a href="https://www.suzannezahr.com/fortheloveofmath/inverse-mt" rel="noreferrer noopener" target="_blank">an artwork about crypto???</a><br/>- Likes origami and cute stuff`,
              twitter: '',
            },
          ],
        },
        {
          title: 'Storage and Retrieval in databases from scratch',
          summary:
            "Based on content from Martin Kleppmann's Designing Data Intensive Applications, go under the hood of databases and simulate with code examples (in JS), how DBs read and write files: append-only, hash index, LSMTrees and B+Trees. Also will touch on Online Analysis Processing DB strategies",
          startTime: '2022-10-29T14:00:00+08:00',
          endTime: '2022-10-29T14:45:00+08:00',
          track: '1',
          id: 'storage-and-retrieval-in-databases-from-scratch',
          slides: 'https://slides.com/tzyinc/ddia-ch-3',
          video: 'https://youtu.be/Cv8IzmuSqYM',
          speakers: [
            {
              name: 'Zhi-Yang Ten',
              id: 'ten-zhi-yang',
              imgUrl: { default: tenzhiyang, webp: tenzhiyangWebp },
              position: 'Software Developer, Shopify',
              bio: 'I strongly believe in the saying "We build the things we can buy, so that we have the skills to build the things we can\'t buy" - Adam Savage.\nA software developer transitioning from front end to full stack, I enjoy building small weekend projects. Code, Hardware, Carpentry, anything that tickles my fancy I will attempt. Many failures and a few successes, but most times, I will get something to talk about.',
              twitter: 'tzyinc',
            },
          ],
        },
        {
          title: 'The Unreasonable Effectiveness of Dumb Values',
          summary:
            'There are many ways to solve a problem, some better than others: copy from StackOverflow, use a popular library, callbacks, promises, goroutines, meta programming, queue, regexes, and so on. But there’s one dumb approach that keeps ending up as the better solution in many situations: plain values.',
          startTime: '2022-10-29T15:45:00+08:00',
          endTime: '2022-10-29T16:00:00+08:00',
          track: '0',
          id: 'the-unreasonable-effectiveness-of-values',
          video: 'https://youtu.be/VP0sEUg-xW4',
          speakers: [
            {
              name: 'Chew Choon Keat',
              id: 'chew-choon-keat',
              imgUrl: { default: chewchoonkeat, webp: chewchoonkeatWebp },
              position: 'Head of Engineering, Hobnob',
              bio: 'Started the Singapore Ruby Brigade, worked at Slideshare, believes strongly in and contributes to open source. Now available in Elm.',
              twitter: 'choonkeat',
            },
          ],
        },
        {
          title:
            'Bitcoin, Blockchain & Cryptography, Part II: A look back of blockchain evolution over the last 10 years.',
          summary:
            'I gave a FOSSConf opening keynote in 2012 titled "Bitcoin – How it is safer than you bank", when Bitcoin was barely known outside of a small group of users.This is a no-hype talk that covers both my personal journey in the blockchain scene, as well as evolution of blockchain, from my eyes.',
          startTime: '2022-10-29T15:45:00+08:00',
          endTime: '2022-10-29T16:30:00+08:00',
          track: '1',
          id: 'bitcoin-blockchain-cryptography-part-ii-a-look-back-of-blockchain-evolution-over-the-last-years',
          video: 'https://youtu.be/i0QwZ7VPjYc',
          speakers: [
            {
              name: 'U-Zyn Chua',
              id: 'u-zyn-chua',
              imgUrl: { default: uzynchua, webp: uzynchuaWebp },
              position: 'Co-Founder & CTO, Cake DeFi',
              bio: "U-Zyn Chua is the Co-Founder and CTO of Cake DeFi — Singapore-based online platform dedicated to providing easy access to DeFi services. U-Zyn has been dabbling with Bitcoin since 2010, involved in various technological aspects of blockchain for the past 12 years. He made global headlines as the designer and lead architect of the world's first central bank digital currency (CBDC) in The Bahamas. He's also actively involve open source blockchain projects, most notably DeFiChain.",
              twitter: 'uzyn',
            },
          ],
        },
        {
          title: 'How Python 3.11 is Speeding Up',
          summary:
            "Speed is coming to Python. After years of mostly stagnant year-on-year Python performance improvements, Python 3.11 is 25% faster than Python 3.10, thanks to various contributors. I'd love to share the technical details of how this was achieved.",
          startTime: '2022-10-29T16:30:00+08:00',
          endTime: '2022-10-29T17:15:00+08:00',
          track: '1',
          id: 'how-python-is-speeding-up',
          slides:
            'https://docs.google.com/presentation/d/1guh-SNyLgKeA5uFl0nQreyqzNT0tqgbXzWWQf-Z90w4/edit?usp=sharing',
          video: 'https://youtu.be/YrG95v4Sgh0',
          speakers: [
            {
              name: 'Ken Jin',
              id: 'ken-jin',
              imgUrl: { default: kenjin, webp: kenjinWebp },
              position: 'Contributor, CPython',
              bio: 'I work on performance, typing, documentation and the interpreter internals in CPython.',
              twitter: '',
            },
          ],
        },
        {
          title:
            'Using math, statistics, and JavaScript - to automate the solving of WORDLE - so I will never need to do so again',
          summary:
            "My wife is really addicted to Wordle, and she's been bugging me to try it every day, and compete for a better score then me ....But I suck at Wordle! So I used math, statistics, and JavaScript - to automate solving of wordle for me (so I will never need to do so again)",
          startTime: '2022-10-29T17:15:00+08:00',
          endTime: '2022-10-29T18:00:00+08:00',
          track: '0',
          id: 'using-math-statistics-and-javascript-to-automate-the-solving-of-wordle-so-i-will-never-need-to-do-so-again',
          video: 'https://youtu.be/fqpzRgQu9os',
          speakers: [
            {
              name: 'Eugene Cheah',
              id: 'eugene-cheah',
              imgUrl: { default: eugenecheah, webp: eugenecheahWebp },
              position: 'CTO, Uilicious',
              bio: 'Builds UI test automation (<a href="http://uilicious.com" rel="noreferrer noopener" target="_blank">http://uilicious.com</a>) infrastructure and tools, web app development, and part of the GPUJS team (<a href="http://gpu.rocks" rel="noreferrer noopener" target="_blank">http://gpu.rocks</a>). Hot-takes/Views are my own',
              twitter: 'PicoCreator',
            },
          ],
        },
        {
          title: 'The L4 Compiler: a toolchain for a DSL for law',
          summary:
            'Programmers and lawyers do the same thing: we anticipate a range of future scenarios and try to say what is, and is not, supposed to happen in each one. But lawyers program in English. What if CS had been invented before law? What would lawyers be programming in instead?',
          startTime: '2022-10-29T17:15:00+08:00',
          endTime: '2022-10-29T18:00:00+08:00',
          track: '1',
          id: 'the-l-compiler-a-toolchain-for-a-dsl-for-law',
          video: 'https://youtu.be/VfA4rIX2VuU',
          speakers: [
            {
              name: 'Wong Meng Weng',
              id: 'wong-meng-weng',
              imgUrl: { default: wongmengweng, webp: wongmengwengWebp },
              position: 'Principal Research Fellow, SMU YPHSOL',
              bio: "Meng is co-founder at Legalese.com and is principal researcher at SMU's School of Law where he works on L4, a domain-specific language for law.",
              twitter: 'mengwong',
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

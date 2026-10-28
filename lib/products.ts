export type Category = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string; // category slug
  image: string;
  summary: string;
  description: string;
  details: string[];
  includes: string[];
  usage: string[];
  downloadFile?: string;
};

export const CATEGORIES: Category[] = [
  { slug: 'meeting-planning-templates', name: 'Meeting & Planning Templates', blurb: 'Agendas, notes and check-in planners that keep every meeting focused.', image: '/images/cat-meeting.png' },
  { slug: 'project-management-toolkits', name: 'Project Management Toolkits', blurb: 'Checklists, workbooks and logs for planning and running projects.', image: '/images/cat-pm.png' },
  { slug: 'remote-team-playbooks', name: 'Remote Team Playbooks', blurb: 'Written guides for distributed and hybrid teams.', image: '/images/cat-remote.png' },
  { slug: 'workshop-training-kits', name: 'Workshop & Training Kits', blurb: 'Facilitator-ready materials for retrospectives, offsites and training.', image: '/images/cat-workshop.png' },
];

const FORMAT = 'Digital download (PDF, printable at 8.5 x 11 inches)';

export const PRODUCTS: Product[] = [
  {
    slug: 'meeting-notes-template-pack',
    name: 'Meeting Notes Template Pack',
    price: 9.99,
    category: 'meeting-planning-templates',
    image: '/images/p01.png',
    summary: 'Eight one-page note sheets for recurring meeting types.',
    description: 'A compact set of one-page note sheets designed to capture decisions, action items and open questions in a consistent layout. Each sheet has space for attendees, key points, owners and due dates, so notes can be shared with the team within minutes of the meeting ending.',
    details: ['Format: PDF, 8 pages', 'Page size: 8.5 x 11 inches', 'Layouts: standup, status, client call, planning, 1:1, brainstorm, decision, general', FORMAT],
    includes: ['8 printable note sheets', 'Action item tracker page', 'One-page quick start guide'],
    usage: ['Print single-sided or fill in on a tablet with a PDF markup app.', 'Keep one sheet per meeting and file by date.', 'For personal or internal team use.'],
  },
  {
    slug: 'team-meeting-agenda-template-pack',
    name: 'Team Meeting Agenda Template Pack',
    price: 13.95,
    category: 'meeting-planning-templates',
    image: '/images/p02.png',
    summary: 'Six timed agendas for the meetings most teams run every week.',
    description: 'Six ready-to-use agendas with suggested time blocks: weekly sync, project status, one-on-one, decision meeting, brainstorm and monthly all-hands. Every template includes fill-in fields so the facilitator can prepare in a few minutes and share the agenda ahead of time.',
    details: ['Format: PDF, 8 pages', 'Page size: 8.5 x 11 inches', 'Meeting lengths: 30, 45 and 60 minutes', FORMAT],
    includes: ['6 timed agenda templates', 'Facilitator quick guide', 'Fill-in fields for notes and owners'],
    usage: ['Send the agenda at least 24 hours ahead.', 'Adjust the time blocks to your meeting length.', 'Available instantly from My Downloads after purchase.'],
    downloadFile: '/downloads/team-meeting-agenda-template-pack.pdf',
  },
  {
    slug: 'project-kickoff-checklist-bundle',
    name: 'Project Kickoff Checklist Bundle',
    price: 14.75,
    category: 'project-management-toolkits',
    image: '/images/p03.png',
    summary: 'Checklists that cover scope, roles, risks and communication on day one.',
    description: 'A bundle of five checklists that help a project team begin with shared understanding: scope and goals, roles and responsibilities, risks and assumptions, communication plan and kickoff meeting preparation. Use them as written or copy the items into your own tools.',
    details: ['Format: PDF, 10 pages', 'Page size: 8.5 x 11 inches', '5 checklists plus a one-page summary', FORMAT],
    includes: ['5 kickoff checklists', 'Roles and responsibilities grid', 'Kickoff meeting agenda'],
    usage: ['Complete the checklists with the project sponsor before kickoff.', 'Re-check at each major milestone.', 'For personal or internal team use.'],
  },
  {
    slug: 'async-communication-guide',
    name: 'Async Communication Guide',
    price: 17.95,
    category: 'remote-team-playbooks',
    image: '/images/p04.png',
    summary: 'A practical guide to writing updates that do not need a meeting.',
    description: 'A short written guide for teams that work across time zones. It explains how to write clear updates, set response-time expectations, choose the right channel and document decisions so that teammates can act without waiting for a live conversation.',
    details: ['Format: PDF, 18 pages', 'Page size: 8.5 x 11 inches', 'Includes message templates and a channel guide', FORMAT],
    includes: ['18-page written guide', '10 message templates', 'Response-time agreement worksheet'],
    usage: ['Read through with your team and fill in the agreement worksheet together.', 'Revisit the channel guide every quarter.', 'For personal or internal team use.'],
  },
  {
    slug: 'weekly-team-check-in-planner',
    name: 'Weekly Team Check-In Planner',
    price: 18.75,
    category: 'meeting-planning-templates',
    image: '/images/p05.png',
    summary: 'A 52-week planner of check-in prompts and tracking pages.',
    description: 'A planner that gives managers and team leads a prompt for each week of the year, plus tracking pages for priorities, blockers and recognition. It works as a printed binder insert or as a fillable document on a tablet.',
    details: ['Format: PDF, 60 pages', 'Page size: 8.5 x 11 inches', '52 weekly pages plus 8 reference pages', FORMAT],
    includes: ['52 weekly check-in pages', 'Quarterly goal pages', 'Recognition log'],
    usage: ['Print the quarter you need or use the whole file digitally.', 'Fill in prompts before each team check-in.', 'For personal or internal team use.'],
  },
  {
    slug: 'team-retrospective-kit',
    name: 'Team Retrospective Kit',
    price: 28.76,
    category: 'workshop-training-kits',
    image: '/images/p06.png',
    summary: 'Five retrospective formats with facilitator steps and action tracker.',
    description: 'A facilitator guide with five proven retrospective formats: Start Stop Continue, Sailboat, 4Ls, Mad Sad Glad and Timeline. Each format has timing, setup, step-by-step instructions and fill-in boards, followed by an action tracker for follow-through.',
    details: ['Format: PDF, 8 pages', 'Page size: 8.5 x 11 inches', 'Session lengths: 45 to 90 minutes', FORMAT],
    includes: ['5 retrospective formats', 'Facilitator ground rules', 'Action tracker page'],
    usage: ['Rotate formats so sessions stay fresh.', 'Limit each session to three actions with owners.', 'Available instantly from My Downloads after purchase.'],
    downloadFile: '/downloads/team-retrospective-kit.pdf',
  },
  {
    slug: 'sprint-planning-workbook',
    name: 'Sprint Planning Workbook',
    price: 38.64,
    category: 'project-management-toolkits',
    image: '/images/p07.png',
    summary: 'A 40-page workbook for planning, sizing and tracking two-week sprints.',
    description: 'A workbook that walks a team through sprint planning from goal setting to capacity, backlog selection, task breakdown and a mid-sprint check. Worksheets are written for software and non-software teams alike and can be reused every sprint.',
    details: ['Format: PDF, 40 pages', 'Page size: 8.5 x 11 inches', 'Covers 6 sprints of worksheets', FORMAT],
    includes: ['Sprint goal worksheet', 'Capacity planning table', 'Backlog selection sheets', 'Mid-sprint check and sprint summary pages'],
    usage: ['Fill in the capacity table before planning begins.', 'Keep finished sprints together for velocity discussions.', 'For personal or internal team use.'],
  },
  {
    slug: 'remote-onboarding-playbook',
    name: 'Remote Onboarding Playbook',
    price: 47.89,
    category: 'remote-team-playbooks',
    image: '/images/p08.png',
    summary: 'A 30-60-90 day plan and checklists for onboarding remote hires.',
    description: 'A playbook that helps managers welcome new team members who work from home. It covers pre-start tasks, the first week schedule, a 30-60-90 day plan, buddy program guidance and feedback check-ins, with checklists for managers, buddies and new hires.',
    details: ['Format: PDF, 36 pages', 'Page size: 8.5 x 11 inches', 'Checklists for 3 roles', FORMAT],
    includes: ['36-page playbook', '30-60-90 day plan template', 'Buddy program guide', 'Manager, buddy and new hire checklists'],
    usage: ['Customize names, tools and schedule to fit your company.', 'Share the new hire checklist before the first day.', 'For personal or internal team use.'],
  },
  {
    slug: 'okr-planning-toolkit',
    name: 'OKR Planning Toolkit',
    price: 49.76,
    category: 'project-management-toolkits',
    image: '/images/p09.png',
    summary: 'Templates and guidance for setting and tracking quarterly objectives.',
    description: 'A toolkit for teams adopting objectives and key results. It includes a planning guide, objective and key result worksheets, alignment maps, weekly progress trackers and a quarter-end scoring sheet, with worked examples for sales, product, operations and people teams.',
    details: ['Format: PDF, 44 pages', 'Page size: 8.5 x 11 inches', 'Includes 12 worked examples', FORMAT],
    includes: ['Planning guide', 'Objective and key result worksheets', 'Alignment map', 'Weekly tracker and quarter-end scoring sheet'],
    usage: ['Hold a planning session using the guide at the start of each quarter.', 'Update the tracker weekly.', 'For personal or internal team use.'],
  },
  {
    slug: 'team-workshop-facilitation-kit',
    name: 'Team Workshop Facilitation Kit',
    price: 53.45,
    category: 'workshop-training-kits',
    image: '/images/p10.png',
    summary: 'Run a half-day workshop with agendas, activities and handouts.',
    description: 'Everything a facilitator needs to design and lead a half-day team workshop: a design canvas, six activity cards with timing and materials, ice-breakers, participant handouts and a closing evaluation form.',
    details: ['Format: PDF, 42 pages', 'Page size: 8.5 x 11 inches', 'Half-day workshop (about 4 hours)', FORMAT],
    includes: ['Workshop design canvas', '6 activity cards', '10 ice-breakers', 'Participant handouts and evaluation form'],
    usage: ['Print handouts one per participant.', 'Practice timings before the session.', 'For personal or internal team use.'],
  },
  {
    slug: 'hybrid-meeting-etiquette-playbook',
    name: 'Hybrid Meeting Etiquette Playbook',
    price: 54.95,
    category: 'remote-team-playbooks',
    image: '/images/p11.png',
    summary: 'Guidelines and checklists for meetings with people in the room and online.',
    description: 'A playbook that sets shared norms for meetings with both in-room and remote attendees. It covers room setup, camera and audio basics, turn-taking, note sharing, facilitation tips and a meeting health checklist, with one-page posters you can print for conference rooms.',
    details: ['Format: PDF, 32 pages', 'Page size: 8.5 x 11 inches', 'Includes 4 printable posters', FORMAT],
    includes: ['32-page playbook', 'Room setup checklist', '4 printable posters', 'Meeting health checklist'],
    usage: ['Agree on the norms as a team before adopting them.', 'Post the printable pages in meeting rooms.', 'For personal or internal team use.'],
  },
  {
    slug: 'project-risk-and-decision-log-toolkit',
    name: 'Project Risk and Decision Log Toolkit',
    price: 86.88,
    category: 'project-management-toolkits',
    image: '/images/p12.png',
    summary: 'Structured logs and matrices for risks, issues and decisions.',
    description: 'A toolkit for project managers who need a clear record of what could go wrong and what was decided. It contains a risk register, probability and impact matrix, issue log, decision log, assumption tracker and a change request form, with a guide on how to run a monthly risk meeting.',
    details: ['Format: PDF, 64 pages', 'Page size: 8.5 x 11 inches', '6 logs and 1 matrix', FORMAT],
    includes: ['Risk register and matrix', 'Issue and decision logs', 'Assumption tracker', 'Change request form', 'Monthly risk meeting guide'],
    usage: ['Set up all logs at project kickoff.', 'Update at least every two weeks.', 'For personal or internal team use.'],
  },
  {
    slug: 'team-offsite-planning-kit',
    name: 'Team Offsite Planning Kit',
    price: 87.64,
    category: 'workshop-training-kits',
    image: '/images/p13.png',
    summary: 'Plan a one- or two-day team offsite from goals to follow-up.',
    description: 'A planning kit for organizing a team offsite. It includes goal-setting pages, a budget planner, venue and logistics checklists, sample one- and two-day agendas, session templates, a participant pre-survey and a follow-up action plan.',
    details: ['Format: PDF, 58 pages', 'Page size: 8.5 x 11 inches', 'Sample agendas for 1 and 2 days', FORMAT],
    includes: ['Goal-setting pages', 'Budget planner', 'Logistics checklists', 'Sample agendas and session templates', 'Follow-up action plan'],
    usage: ['Begin planning about eight weeks ahead.', 'Send the pre-survey two weeks before the event.', 'For personal or internal team use.'],
  },
  {
    slug: 'remote-team-culture-playbook',
    name: 'Remote Team Culture Playbook',
    price: 87.76,
    category: 'remote-team-playbooks',
    image: '/images/p14.png',
    summary: 'Rituals, norms and activities that help distributed teams connect.',
    description: 'A playbook for building working agreements and shared rituals on a distributed team. It includes a team charter template, 40 virtual activities, recognition ideas, communication norms, time zone planning pages and a quarterly culture check-in.',
    details: ['Format: PDF, 56 pages', 'Page size: 8.5 x 11 inches', '40 activity cards', FORMAT],
    includes: ['Team charter template', '40 virtual activity cards', 'Recognition ideas list', 'Quarterly culture check-in form'],
    usage: ['Complete the charter together in one session.', 'Choose two or three rituals to start and add more later.', 'For personal or internal team use.'],
  },
  {
    slug: 'cross-functional-project-management-toolkit',
    name: 'Cross-Functional Project Management Toolkit',
    price: 94.82,
    category: 'project-management-toolkits',
    image: '/images/p15.png',
    summary: 'A complete document set for projects that involve several departments.',
    description: 'A complete set of project documents for work that spans multiple teams: project charter, stakeholder map, RACI matrix, work breakdown structure, timeline planner, status report template, meeting cadence guide and closeout report. Written in plain language with worked examples.',
    details: ['Format: PDF, 96 pages', 'Page size: 8.5 x 11 inches', '14 templates with examples', FORMAT],
    includes: ['Project charter and stakeholder map', 'RACI matrix', 'Work breakdown structure and timeline planner', 'Status report template', 'Closeout report'],
    usage: ['Use the documents in order from charter to closeout.', 'Share the status report template with stakeholders.', 'For personal or internal team use.'],
  },
  {
    slug: 'team-leadership-training-workshop-bundle',
    name: 'Team Leadership Training Workshop Bundle',
    price: 96.95,
    category: 'workshop-training-kits',
    image: '/images/p16.png',
    summary: 'Three ready-to-teach workshops for new team leads.',
    description: 'A bundle of three facilitator-ready workshops for new team leads: giving feedback, running effective meetings and delegating work. Each workshop has a facilitator script, slide outline, exercises, participant workbook and a follow-up plan, for groups of 6 to 20 people.',
    details: ['Format: PDF, 120 pages', 'Page size: 8.5 x 11 inches', '3 workshops of about 3 hours each', FORMAT],
    includes: ['3 facilitator scripts', '3 slide outlines', '3 participant workbooks', 'Follow-up plans'],
    usage: ['Run the workshops in sequence over several weeks.', 'Print participant workbooks one per attendee.', 'For personal or internal team use.'],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
export function money(n: number) {
  return '$' + n.toFixed(2);
}

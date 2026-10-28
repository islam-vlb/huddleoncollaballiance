import PDFDocument from 'pdfkit';
import fs from 'node:fs';

function build(file, title, pages) {
  const doc = new PDFDocument({ size: 'LETTER', margin: 64, info: { Title: title, Author: 'Rese Gig LLC' } });
  doc.pipe(fs.createWriteStream(file));
  doc.rect(0, 0, 612, 792).fill('#221E8F');
  doc.rect(64, 330, 120, 8).fill('#00C9B1');
  doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(34).text(title, 64, 150, { width: 480 });
  doc.font('Helvetica').fontSize(14).fillColor('#DDFBF6').text('A HuddleOnCollabAlliance digital template pack', 64, 350);
  doc.fontSize(11).text('Rese Gig LLC  |  HuddleOnCollabAlliance.com', 64, 700);
  for (const p of pages) {
    doc.addPage();
    doc.rect(0, 0, 612, 12).fill('#00C9B1');
    doc.fillColor('#14123F').font('Helvetica-Bold').fontSize(22).text(p.h, 64, 64);
    doc.moveDown(0.5).font('Helvetica').fontSize(11).fillColor('#444466').text(p.intro, { width: 484 });
    doc.moveDown(1);
    for (const s of p.sections) {
      doc.font('Helvetica-Bold').fontSize(13).fillColor('#3730C9').text(s.t);
      doc.moveDown(0.3);
      for (const l of s.lines) {
        doc.font('Helvetica').fontSize(11).fillColor('#14123F').text(l, { width: 484 });
        doc.moveDown(0.25);
      }
      doc.moveDown(0.6);
    }
    if (p.fields) {
      doc.moveDown(0.5);
      for (const f of p.fields) {
        doc.font('Helvetica-Bold').fontSize(10).fillColor('#221E8F').text(f);
        const y = doc.y + 2;
        doc.moveTo(64, y + 16).lineTo(548, y + 16).strokeColor('#C9C8EE').lineWidth(1).stroke();
        doc.y = y + 26;
      }
    }
    doc.font('Helvetica').fontSize(9).fillColor('#8886B0').text('HuddleOnCollabAlliance  |  support@huddleoncollaballiance.com  |  (844) 373-4780', 64, 740, { width: 484, align: 'center', lineBreak: false });
  }
  doc.end();
}

const meeting = [
  { h: 'How to use this pack', intro: 'This pack gives you six reusable agendas for the meetings most teams run every week. Print them at 8.5 x 11 inches or fill them in on screen.', sections: [
    { t: 'Before the meeting', lines: ['1. Pick the template that matches the meeting purpose.', '2. Send the agenda to attendees at least 24 hours ahead so people can prepare.', '3. Name one facilitator and one note taker.'] },
    { t: 'During the meeting', lines: ['Start on time and restate the goal in one sentence.', 'Keep a visible timer for each agenda item and park off-topic points in the Parking Lot box.', 'End five minutes early to confirm owners and due dates.'] },
    { t: 'After the meeting', lines: ['Share notes and action items within one business day.', 'Go over open actions at the beginning of the next meeting.'] } ] },
  { h: 'Template 1: Weekly Team Sync (30 min)', intro: 'A short recurring meeting to align on priorities, blockers and wins.', sections: [
    { t: 'Agenda', lines: ['0:00 - Welcome and goal for the week (3 min)', '0:03 - Wins since last sync (5 min)', '0:08 - Priorities and progress by person (10 min)', '0:18 - Blockers and requests for help (8 min)', '0:26 - Action items and owners (4 min)'] } ], fields: ['Date and facilitator', 'Top three priorities this week', 'Blockers', 'Action items (owner / due date)'] },
  { h: 'Template 2: Project Status Meeting (45 min)', intro: 'Use this agenda to keep stakeholders informed without losing time to long updates.', sections: [
    { t: 'Agenda', lines: ['0:00 - Objective and scope reminder (5 min)', '0:05 - Milestone status: on track, at risk, late (10 min)', '0:15 - Risks and mitigation (10 min)', '0:25 - Decisions needed today (10 min)', '0:35 - Next steps and owners (10 min)'] } ], fields: ['Project name', 'Milestones due this period', 'Risks raised', 'Decisions made'] },
  { h: 'Template 3: One-on-One (30 min)', intro: 'A shared agenda that the team member owns and the manager supports.', sections: [
    { t: 'Agenda', lines: ['0:00 - Check-in: how are things going? (5 min)', '0:05 - Topics the team member wants to cover (10 min)', '0:15 - Feedback in both directions (8 min)', '0:23 - Growth and goals (5 min)', '0:28 - Agreed next steps (2 min)'] } ], fields: ['Topics for today', 'Feedback shared', 'Follow-ups'] },
  { h: 'Template 4: Decision Meeting (60 min)', intro: 'When a group must choose between options, a clear structure prevents circular debate.', sections: [
    { t: 'Agenda', lines: ['0:00 - State the decision and the deadline (5 min)', '0:05 - Present options and criteria (15 min)', '0:20 - Questions of clarification (10 min)', '0:30 - Discussion and concerns (15 min)', '0:45 - Decide using the agreed method (10 min)', '0:55 - Record outcome and communicate (5 min)'] } ], fields: ['Decision statement', 'Options considered', 'Criteria', 'Final decision and owner'] },
  { h: 'Template 5: Brainstorm Session (45 min)', intro: 'Generate many ideas first, then narrow with simple criteria.', sections: [
    { t: 'Agenda', lines: ['0:00 - Problem statement (5 min)', '0:05 - Silent idea writing (10 min)', '0:15 - Share and group ideas (15 min)', '0:30 - Vote with three dots each (5 min)', '0:35 - Pick top ideas and assign next steps (10 min)'] } ], fields: ['Problem statement', 'Top ideas', 'Owners and next steps'] },
  { h: 'Template 6: Monthly All-Hands (60 min)', intro: 'Keep the whole team aligned on direction, results and recognition.', sections: [
    { t: 'Agenda', lines: ['0:00 - Welcome and agenda (5 min)', '0:05 - Results and key numbers (15 min)', '0:20 - Team spotlights and recognition (10 min)', '0:30 - What is coming next (10 min)', '0:40 - Open questions (15 min)', '0:55 - Closing and thanks (5 min)'] } ], fields: ['Key results to share', 'Spotlights', 'Questions collected in advance'] },
];

const retro = [
  { h: 'Team Retrospective Kit: Facilitator Guide', intro: 'A retrospective is a regular, structured conversation where a team looks at how it worked and chooses a few improvements. This kit includes five formats you can run in 45 to 90 minutes.', sections: [
    { t: 'Ground rules', lines: ['Focus on process and results, not on individuals.', 'Everyone speaks; use silent writing first so quieter voices count.', 'Leave with no more than three actions, each with an owner and date.'] },
    { t: 'Room setup (in person or remote)', lines: ['In person: wall space, sticky notes in three colors, markers, dot stickers.', 'Remote: a shared whiteboard with one column per prompt and a visible timer.'] } ] },
  { h: 'Format 1: Start, Stop, Continue (45 min)', intro: 'The simplest format. Good for new teams.', sections: [
    { t: 'Steps', lines: ['1. Set the stage (5 min): restate the period being discussed.', '2. Silent writing (10 min): each person writes notes for Start, Stop and Continue.', '3. Group and discuss (15 min): cluster similar notes.', '4. Vote (5 min): three dots per person.', '5. Choose actions (10 min): top voted items become actions.'] } ], fields: ['Start doing', 'Stop doing', 'Continue doing'] },
  { h: 'Format 2: Sailboat (60 min)', intro: 'A visual metaphor that makes risks and drivers easy to talk about.', sections: [
    { t: 'Draw the scene', lines: ['Wind: what pushes us forward.', 'Anchor: what slows us down.', 'Rocks: risks ahead.', 'Island: the goal we are sailing toward.'] },
    { t: 'Steps', lines: ['Write notes for each element (10 min), share (20 min), vote (5 min), turn the top items into actions (15 min).'] } ], fields: ['Wind', 'Anchors', 'Rocks', 'Chosen actions'] },
  { h: 'Format 3: 4Ls (60 min)', intro: 'Liked, Learned, Lacked, Longed for. Balanced between positives and gaps.', sections: [
    { t: 'Steps', lines: ['Give each prompt four minutes of silent writing.', 'Read notes aloud one prompt at a time.', 'Look for patterns that repeat across prompts.', 'Pick one action for Lacked and one for Longed for.'] } ], fields: ['Liked', 'Learned', 'Lacked', 'Longed for'] },
  { h: 'Format 4: Mad, Sad, Glad (60 min)', intro: 'Surfaces how the work felt as well as what happened.', sections: [
    { t: 'Steps', lines: ['Write notes in each category (10 min).', 'Share Glad first to build momentum, then Sad and Mad (20 min).', 'Discuss root causes for the biggest clusters (15 min).', 'Agree on actions (15 min).'] } ], fields: ['Mad', 'Sad', 'Glad'] },
  { h: 'Format 5: Timeline (90 min)', intro: 'Best after a long project or quarter.', sections: [
    { t: 'Steps', lines: ['Draw a line across the wall from beginning to end.', 'Each person adds events with high and low moments (15 min).', 'Walk the timeline together and ask what changed (25 min).', 'Find turning points and extract lessons (25 min).', 'Pick actions for the next period (25 min).'] } ], fields: ['Key events', 'Turning points', 'Lessons', 'Actions'] },
  { h: 'Action tracker', intro: 'Record the actions you agreed on and go over them at the next retrospective.', sections: [
    { t: 'Rules for good actions', lines: ['Specific: begins with a verb.', 'Owned: one named person.', 'Dated: a due date within the next iteration.', 'Visible: added to the team backlog.'] } ], fields: ['Action 1 (owner / due date)', 'Action 2 (owner / due date)', 'Action 3 (owner / due date)'] },
];

build('public/downloads/team-meeting-agenda-template-pack.pdf', 'Team Meeting Agenda Template Pack', meeting);
build('public/downloads/team-retrospective-kit.pdf', 'Team Retrospective Kit', retro);
